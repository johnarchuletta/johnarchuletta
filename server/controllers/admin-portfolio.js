const Project = require('../schemas/project.js');

module.exports = {
  get: function (req, res) {
    
    // Check if user is authenticated.
    if (req.session.user) {
      
      // Retrieve all portfolio projects from the database and put them into the 'projects' local variable.
      Project.find().sort('-date').exec(function (err, projects) {
        res.render('admin-portfolio', {projects: projects});
      });
    } else {
      res.redirect('/admin-login');
    }
  },
  post: function (req, res) {
    
    // Check if user is authenticated.
    if (req.session.user) {
      
      // Store form data in variables.
      var title = req.body.title;
      var date = req.body.date;
      var keywords = req.body.keywords.split(', ');
      var body = req.body.body;
      var images = [];
      
      // Push only the filenames from files array into images array.
      req.files.forEach(function (el) {
        images.push(el.filename);
      });
      
      // Check that none of the fields are empty.
      if (title && date && keywords && body && images) {
        // Create Mongoose object.
        var newProject = new Project({
          title: title,
          date: date,
          keywords: keywords,
          body: body,
          images: images
        });
        
        // Attempt to save project to database.
        newProject.save(function (err, project) {
          if (!err) { // Save successful
            res.redirect('/admin/portfolio');
          } else { // Unsuccessful
            console.log(err);
            res.redirect('/admin/portfolio');
          }
        });
      } else {
        // There were empty fields - redirect to portfolio page.
        res.redirect('/admin/portfolio');
      }
      
    } else {
      res.redirect('/admin-login');
    }
  },
  delete: function (req, res) {
    
    // Check if user is authenticated.
    if (req.session.user) {
      
      // Remove database entry using supplied [req.params._id]: /admin/blog/delete/:id
      Project.remove({_id: req.params.id}).exec(function (err) {
        res.redirect('/admin/portfolio');
      })
    } else {
      res.redirect('/admin-login');
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
      var images = [];
      
      // Check if new images are supplied.
      if (req.files.length > 0) {
        
        // Push only the filenames from files array into images array.
        req.files.forEach(function (el) {
          images.push(el.filename);
        });
      } else {
        images = req.body['image-filenames'].split(',');
      }
      console.log(images);
      // Validate that none of the fields are empty.
      if (title && date && keywords && body && images && id) {
        
        // Store updated data in object.
        var updatedProject = {
          title: title,
          date: date,
          keywords: keywords,
          body: body,
          images: images
        };
        
        // Save updated data to database.
        Project.findOneAndUpdate({_id: id}, updatedProject, function (err, raw) {
          if (err) console.log(err);
          res.redirect('/admin/portfolio');
        });
      } else {
        res.redirect('/admin');
      }
    }
  }
};