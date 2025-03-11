function filterBooks() {
	var input, filter, cat, els, a, i, txtValue;
	input = document.getElementById('bar');
	filter = input.value.toUpperCase();
	cat = document.getElementById("cat");
	els = cat.getElementsByTagName('a');
	
	for (i = 0; i < els.length; i++) {
    a = els[i].getElementsByTagName("h4")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      els[i].style.display = "";
    } else {
      els[i].style.display = "none";
    }
  }
}