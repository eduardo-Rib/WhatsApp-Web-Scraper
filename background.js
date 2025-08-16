let isWebZapOpen = false;
let isNumberCorrect = false;

function updateIconIfNeeded(isOpen) {
  if (isWebZapOpen !== isOpen) {
    isWebZapOpen = isOpen;

    try {
      chrome.action.setIcon({
        path: {
          16: isOpen ? "images/16px/orange_icon.png" : "images/16px/gray_icon.png",
          32: isOpen ? "images/16px/orange_icon.png" : "images/16px/gray_icon.png"
        }
      });
    } catch (error) {
      console.error("Erro ao atualizar o ícone:", error);
    }

    chrome.storage.local.set({ isWebZapOpen });
  }
}

function updateNumberStatusInCache(isCorrect) {
  if (isNumberCorrect !== isCorrect) {
    isNumberCorrect = isCorrect;
    chrome.storage.local.set({ isNumberCorrect });
  }
}

async function checkWebZapTabs() {
  const tabs = await chrome.tabs.query({});
  const hasWebZap = tabs.some(tab => tab.url && tab.url.includes("web.whatsapp.com"));

  updateIconIfNeeded(hasWebZap);
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && tab.url && tab.url.includes("web.whatsapp.com")) {
    if (!isWebZapOpen) {
      updateIconIfNeeded(true);
    }
  } else if (changeInfo.url) {
    checkWebZapTabs();
  }
});

chrome.tabs.onActivated.addListener(() => {
  checkWebZapTabs();
});

chrome.tabs.onRemoved.addListener(() => {
  if (isWebZapOpen) {
    checkWebZapTabs();
  }
});

checkWebZapTabs();