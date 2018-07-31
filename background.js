chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.remove(tab.id);

  // Okay, the actual action should go here
  // And look, we already have the required Tab object for free!
});
