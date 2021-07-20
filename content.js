document.getElementById('jira').addEventListener('click', (event) => {
  if(event.target.href) {
    event.preventDefault();
    event.stopPropagation();
    window.open(event.target.href, '_blank')
  }
})