const serverIp = document.getElementById('server-ip');
const tooltip = serverIp.querySelector('.copy-tooltip');

serverIp.addEventListener('click', () => {
  navigator.clipboard.writeText(serverIp.textContent)
    .then(() => {
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
