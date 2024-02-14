const button = document.getElementById('movingbutton')
button.addEventListener('mouseover', function () {
	button.style.left = `${Math.ceil(Math.random() * 30)}%`
	button.style.top = `${Math.ceil(Math.random() * 40)}%`
})
button.addEventListener('click', function () {
	alert('Лёля?...')
})
