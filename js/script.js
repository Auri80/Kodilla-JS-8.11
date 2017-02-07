

var list = document.getElementById('Lista');
var add = document.getElementById('addElem');

add.addEventListener('click', function(e) {
	var num = list.getElementsByTagName('li').length;
	list.innerHTML += '<li>item '+num+'</li>';
});



