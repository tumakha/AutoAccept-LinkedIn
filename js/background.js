
var invitationsUrl = "https://www.linkedin.com/mynetwork/invitation-manager/";

var tabId = 0;

chrome.browserAction.setBadgeText({text: ""});

function runScript() {
  chrome.tabs.executeScript(tabId, {file: "js/auto-accept.js"}, function() {
  });
}

chrome.browserAction.onClicked.addListener(function() {
  chrome.browserAction.setBadgeText({text: "ON"});
  chrome.tabs.create({url: invitationsUrl}, function(tab) {
    tabId = tab.id
    runScript();
  });
});

chrome.runtime.onMessage.addListener(function(msg, _, sendResponse) {
  if (msg.moreInvitations) {
    chrome.tabs.reload(tabId)
    setTimeout(function() {
      runScript(tabId)
    }, 3000);
  } else {
    chrome.browserAction.setBadgeText({text: ""});
  }
});

