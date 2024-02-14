function show() {
	document.getElementById('id1').style.maxHeight = '300px'
	var images = document.querySelectorAll('#id1 img')
	for (var i = 0; i < images.length; i++) {
		images[i].src = images[i].getAttribute('src')
	}
}
