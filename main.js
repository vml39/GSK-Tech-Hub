chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
  	id: 'hub', 
    'innerBounds': {
      'width': 400,
      'height': 500,
    }
  });
});