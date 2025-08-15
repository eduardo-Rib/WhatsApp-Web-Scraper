let isWebZapOpen = false;
let isNumberCorrect = false; 

function updateIconIfNeeded(isOpen) {
  if (isWebZapOpen !== isOpen) {
    isWebZapOpen = isOpen;
    chrome.action.setIcon({
      path: isOpen ? "images/16px/orange_icon.png" : "images/16px/gray_icon.png"
    });
  }
}

async function checkWebZapTabs() {
  const tabs = await chrome.tabs.query({});
  const hasWebZap = tabs.some(tab => tab.url && tab.url.includes("web.whatsapp.com"));
  updateIconIfNeeded(hasWebZap);
  sendStatusToPopup('whatsapp', hasWebZap);

}

function sendStatusToPopup(type, status) {
  chrome.runtime.sendMessage({ type, status });
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) { 
    checkWebZapTabs();
  }
});

chrome.tabs.onActivated.addListener(() => {
  checkWebZapTabs();
});

chrome.tabs.onRemoved.addListener(() => {
  checkWebZapTabs();
});