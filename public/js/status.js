chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const { type, status } = message;
    console.log("entrou aqui")
    if (type === 'whatsapp') {
    updateWhatsappStatus(status);
    } else if (type === 'number') {
    updateNumberStatus(status);
    }
});

function updateWhatsappStatus(isOpen) {
  const whatsappElement = document.querySelector('.whatsappVerify');
  
  if (isOpen) {
    whatsappElement.classList.add('status-true');
    whatsappElement.classList.remove('status-false');
    whatsappElement.querySelector('.status-text').textContent = 'true'; // WhatsApp está aberto
  } else {
    whatsappElement.classList.add('status-false');
    whatsappElement.classList.remove('status-true');
    whatsappElement.querySelector('.status-text').textContent = 'false'; // WhatsApp não está aberto
  }
}

function updateNumberStatus(isCorrect) {
  const numberElement = document.querySelector('.numberVerify');
  
  if (isCorrect) {
    numberElement.classList.add('status-true');
    numberElement.classList.remove('status-false');
    numberElement.querySelector('.status-text').textContent = 'true'; // Número correto
  } else {
    numberElement.classList.add('status-false');
    numberElement.classList.remove('status-true');
    numberElement.querySelector('.status-text').textContent = 'false'; // Número incorreto
  }
}