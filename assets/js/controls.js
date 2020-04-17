const stopForm = event => event.preventDefault();





const setNewColor = event => {
	console.log('yay');
	const page = document.querySelector('#page');
	const target = event.target;
	const field = target.closest('#controls').querySelector('#backgroundColor');
	const newColor = field.value;
	page.style.backgroundColor = newColor;
	field.value = '';
};





const initControls = (form) => {
	const setButton = form.querySelector('#setNewBackgroundColor');
	form.addEventListener('submit', stopForm);
	setButton.addEventListener('click', setNewColor);
};





export {initControls};
