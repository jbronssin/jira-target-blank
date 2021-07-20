function search_links() {
  let links = document.getElementsByTagName('a');
  console.log(links);
  for (var i=0; i < links.length; i++) {
    links[i].target = '_blank';
  }
}

search_links();

document.getElementById('jira').addEventListener("click", function() {
  search_links();
})
