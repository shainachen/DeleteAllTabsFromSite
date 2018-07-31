let deleteTabs = document.getElementById('deleteTabsFromSite');

deleteTabs.onclick = function(tab) {
	console.log("clicked on popup");
	chrome.tabs.query({active: true}, function(tabs){
	chrome.tabs.executeScript(
			tabs[0].id,
			{code: chrome.tabs.remove(tabs[0].id)}
);
	});
};


/*    chrome.tabs.remove(tab.id, function(){
      appendToLog('tab: ' + tabId + ' removed.');
     });
};


/*chrome.storage.sync.get('color', function(data) {
	changeColor.style.backgroundColor = data.color;
	changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
	let color = element.target.value;
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(
			tabs[0].id,
			{code: 'document.body.style.backgroundColor = "' + color + '";'});
	});
};
*/