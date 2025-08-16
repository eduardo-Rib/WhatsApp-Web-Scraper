document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get(['isWebZapOpen', 'isNumberCorrect'], (data) => {
    updateWhatsappStatus(data.isWebZapOpen || false);
    updateNumberStatus(data.isNumberCorrect || false);
  });
});

function updateWhatsappStatus(isOpen) {
  const whatsappElement = document.querySelector('.whatsappVerify');
  if (!whatsappElement) return;

  whatsappElement.classList.toggle('status-true', isOpen);
  whatsappElement.classList.toggle('status-false', !isOpen);
}

function updateNumberStatus(isCorrect) {
  const numberElement = document.querySelector('.numberVerify');
  if (!numberElement) return;

  numberElement.classList.toggle('status-true', isCorrect);
  numberElement.classList.toggle('status-false', !isCorrect);
}