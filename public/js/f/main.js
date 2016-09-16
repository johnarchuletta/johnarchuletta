window.onload = function () {
  // Store elements in variables.
  var terminalInput = document.getElementById('terminal-text-input');
  var window = document.querySelector('div.window');
  var titlebar = document.querySelector('div.window div.titlebar');

  setTimeout(function() {
    window.style.transform = 'scale(1)';
  }, 1000);

  // TODO: Make the window draggable.
  titlebar.onmousedown = function (e) {
    console.log(e);
  }

  // Focus on terminal input textbox.
  terminalInput.focus();

  // Focus on terminal command line when user clicks terminal window.
  window.onclick = function () {
    terminalInput.focus();
  }

  terminalInput.onkeypress = function (e) {
    if (e.key === 'Enter') {
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
        default:
          output(['<span style="color: #E53F3A;">No command \'' + input + '\' found.</span>']);
          break;
      }
    }
  }

  output([
    'Welcome to the personal website of <span style="color: #DFE300;">John Archuletta!</span>',
    '<span style="color: #707070;">Created 09-14-16 using NodeJS, ExpressJS, MongoDB, JavaScript, HTML, and Sass.</span>',
    '<br>For a list of commands, please enter \'cmds\'.<br><br>'
  ]);
}

// Functions -------------------------------------------------------------------------------------------------------------------------------

var output = function (lines) {
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