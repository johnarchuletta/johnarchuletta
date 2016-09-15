window.onload = function () {
  // Find terminal input textbox.
  var terminalInput = document.getElementById('terminal-text-input');
  var window = document.querySelector('div.window');
  var titlebar = document.querySelector('div.window div.titlebar');

  // TODO: Make the window draggable.
  titlebar.onmousedown = function (e) {
    console.log(e);
  }

  window.onclick = function () {
    terminalInput.focus();
  }

  // Focus on terminal input textbox.
  terminalInput.focus();

  // Do not let the user lose focus of terminal input.
  terminalInput.onblur = function () {
    terminalInput.focus();
  };

  terminalInput.onkeypress = function (e) {
    if (e.key === 'Enter') {
      var input = this.value;
      this.value = '';

      switch (input) {
        case 'clear':
          document.querySelector('div.terminal-output').innerHTML = '';
          break;
        case 'fuck':
          output(['Whoa there, buddy! Calm down!']);
          break;
        default:
          output(['<span style="color: #E53F3A;">Command "' + input + '" not recognized.</span>']);
          break;
      }
    }
  }

  output([
    'Welcome to the personal website of <span style="color: #DFE300;">John Archuletta!</span>',
    '<span style="color: #707070;">Created 09-14-16 using NodeJS, ExpressJS, MongoDB, JavaScript, HTML, and Sass.</span>',
    '<br>For a list of commands, please enter "cmdlist".<br><br>'
  ]);
}

// Functions -------------------------------------------------------------------------------------------------------------------------------

output = function (lines) {
  var windowContent = document.querySelector('div.terminal-output');
  var newLine;

  for (var i = 0; i < lines.length; i++) {
    newLine = document.createElement('p');
    newLine.innerHTML = lines[i];

    windowContent.appendChild(newLine);
  }
}