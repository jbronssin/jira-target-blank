document.getElementById('jira').addEventListener('click', (event) => {
  if(event.target.href && event.target.href.startsWith('http')) {
    event.preventDefault();
    event.stopPropagation();
    window.open(event.target.href, '_blank')
  }
})