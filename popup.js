let deleteTabs = document.getElementById('deleteTabsFromSite');
var hostname;

deleteTabs.onclick = function(tabDelete) {
	console.log("clicked on popup");
	chrome.tabs.query({active: true, currentWindow: true}, function(tab){
		var url= tab[0].url;
		hostname = (new URL(url)).hostname;
		console.log(hostname);
		
		chrome.tabs.query({currentWindow: true, url: '*://'+ hostname +'/*'}, function(tabs){
			console.log("running query through hostnames");
			for (i = 0; i < tabs.length; i++) { 
				console.log("deleting tab" + tabs[i].id);
				chrome.tabs.executeScript(
					tabs[i].id,
					{code: chrome.tabs.remove(tabs[i].id)}
				);
			}
		});

	});
};