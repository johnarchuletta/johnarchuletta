window.onload = function() {
  // Store elements in variables.
  var window = document.querySelector('div.window');
  var titlebar = document.querySelector('div.window div.titlebar');
  
  // Animate terminal window into view.
  setTimeout(function() {
    window.style.transform = 'scale(1)';
    window.style.opacity = '1';
  }, 1000);
  
  // Make terminal window draggable.
  var mouseIsDown = false;
  var titlebarXPos = 0;
  var titlebarYPos = 0;
  titlebar.onmousedown = function(evt) {
    mouseIsDown = true;
    titlebarXPos = evt.clientX - window.offsetLeft;
    titlebarYPos = evt.clientY - window.offsetTop;
  }
  titlebar.onmouseup = function() {
    console.log('mouse went up?');
    mouseIsDown = false;
  }
  document.body.onmousemove = function(evt) {
    if (mouseIsDown) {
      window.style.left = evt.clientX - titlebarXPos + 'px';
      window.style.top = evt.clientY - titlebarYPos + 'px';
    }
  }
  
  // Set focus on terminal input line.
  var terminalInput = document.getElementById('terminal-text-input');
  terminalInput.focus();
  window.onclick = function() { terminalInput.focus(); }
  terminalInput.onkeypress = function(evt) {
    if (evt.key === 'Enter') {
      var input = this.value;
      this.value = '';
      
      echoInput(input);
      
      switch (input) {
        case 'clear':
          document.querySelector('div.terminal-output').innerHTML = '';
          break;
        case 'fuck':
          output(['Whoa there, buddy! Calm down!']);
          break;
        case 'cmds':
          output(['Hrmph...']);
          break;
        default:
          output(['<span style="color: #E53F3A;">No command \'' + input + '\' found.</span>']);
          break;
      }
    }
  }
  
  // Print introductory text to terminal window.
  output([
    'Welcome to the personal website of <span style="color: #DFE300;">John Archuletta!</span>',
    '<span style="color: #707070;">Created using NodeJS, ExpressJS, MongoDB, JavaScript, HTML, and Sass.</span>',
    '<br>For a list of commands, please enter \'cmds\'.<br><br>'
  ]);
}

//-                                                                                                                                            .

var output = function(lines) {
  var windowContent = document.querySelector('div.terminal-output');
  var newLine;
  
  for (var i = 0; i < lines.length; i++) {
    newLine = document.createElement('p');
    newLine.innerHTML = lines[i];
    
    windowContent.appendChild(newLine);
  }
}

var echoInput = function(input) {
  output([
    '<span style="color: #71E53B;">user@linux</span><span style="color: #FFF;">:</span><span style="color: #7DD6E5">~</span><span style="color: #FFF;">$</span>&nbsp' + input,
  ]);
}