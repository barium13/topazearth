const serverIp = document.getElementById('server-ip');
const tooltip = serverIp.querySelector('.copy-tooltip');

// Get only the plain IP (ignore emoji & tooltip)
serverIp.addEventListener('click', () => {
  const ipText = serverIp.querySelector('.ip-text').textContent.trim();

  navigator.clipboard.writeText(ipText)
    .then(() => {
      tooltip.textContent = 'Copied!';
      tooltip.classList.add('show');
      setTimeout(() => tooltip.classList.remove('show'), 1200);
    })
    .catch(() => {
      tooltip.textContent = 'Failed';
      tooltip.classList.add('show');
      setTimeout(() => {
        tooltip.classList.remove('show');
        tooltip.textContent = 'Copied!';
      }, 1200);
    });
});