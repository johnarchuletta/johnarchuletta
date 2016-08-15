const Post = require('../schemas/post.js');

module.exports = {
  get: function (req, res) {
    
    // Check if user is authenticated.
    if (req.session.user) {
      
      // Check if user is attempting to logout.
      if (!req.query.action) {
        
        // Retrieve 10 latest blog posts and store them in 'posts' local variable.
        Post.find({}).limit(10).sort('-date').exec(function (err, posts) {
          res.render('admin', {posts: posts});
        });
        
      } else if (req.query.action === 'logout') {
        
        // Nullify user session and redirect to login page.
        req.session.user = null;
        res.redirect('/admin-login');
        
      }
    } else {
      res.redirect('/admin-login');
    }
  },
  post: function (req, res) {
    
    // Store form data in variables.
    var title = req.body.title;
    var date = req.body.date;
    var keywords = req.body.keywords.split(', ');
    var body = req.body.body;
    var image = req.file ? req.file.filename : '';
    
    // Validate that none of the fields are empty.
    if (title && date && keywords && body && image) {
      
      // Create new Mongoose object.
      var newPost = new Post({
        title: title,
        date: date,
        keywords: keywords,
        body: body,
        image: image
      });
      
      // Attempt to save blog post to database.
      newPost.save(function (err, post) {
        if (!err) {
          res.redirect('/admin');
        } else {
          console.log(err);
          res.redirect('/admin');
        }
      });
    } else {
      res.redirect('/admin');
    }
  },
  put: function (req, res) {
    
    // Check that user is authenticated.
    if (req.session.user) {
      
      // Store form data in variables.
      var title = req.body.title;
      var date = req.body.date;
      var keywords = req.body.keywords.split(',');
      var body = req.body.body;
      var id = req.body.id;
      var image = req.body['image-file'];
      
      // Check if new image file was sent.
      if (req.file) {
        image = req.file.filename;
      }
      
      // Validate that none of the fields are empty.
      if (title && date && keywords && body && id) {
        
        // Store updated data in object.
        var updatedPost = {
          title: title,
          date: date,
          keywords: keywords,
          body: body,
          image: image
        };
        
        // Save updated data to database.
        Post.findOneAndUpdate({_id: id}, updatedPost, function (err, raw) {
          if (err) console.log(err);
          res.redirect('/admin');
        });
      } else {
        res.redirect('/admin');
      }
    }
  },
  delete: function (req, res) {
    
    // Check that user is authenticated.
    if (req.session.user) {
      
      // Remove database entry using supplied [req.params._id]: /admin/blog/delete/:id
      Post.remove({_id: req.params.id}).exec(function (err) {
        res.redirect('/admin');
      })
    } else {
      res.redirect('/admin-login');
    }
  }
};