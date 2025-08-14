const whatsappPattern = "https://web.whatsapp.com/*";

function updateIcon(tabId) {
  chrome.tabs.get(tabId, (tab) => {
    if (tab && tab.url && tab.url.startsWith("https://web.whatsapp.com")) {
      console.log("ficou laranja")
      chrome.action.setIcon({
        path: {
          "16": "images/16px/orange_icon.png",
          "32": "images/16px/orange_icon.png",
          "48": "images/16px/orange_icon.png",
          "128": "images/16px/orange_icon.png"
        },
        tabId: tab.id
      });
    } else {
      console.log("ficou cinza")

      chrome.action.setIcon({
        path: {
          "16": "images/16px/gray_icon.png",
          "32": "images/16px/gray_icon.png",
          "48": "images/16px/gray_icon.png",
          "128": "images/16px/gray_icon.png"
        },
        tabId: tab.id
      });
    }
  });
}

// Quando o usuário troca de aba
chrome.tabs.onActivated.addListener((activeInfo) => {
  updateIcon(activeInfo.tabId);
});

// Quando uma aba muda de URL (ex.: navegação dentro da mesma aba)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    updateIcon(tabId);
  }
});