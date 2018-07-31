function test (tab) {
  alert('The browser action was clicked! Yay!');
}

chrome.runtime.onInstalled.addListener(test);

