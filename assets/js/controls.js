import {setNewColor} from './colors.js';





const stopForm = event => event.preventDefault();





const initControls = (form) => {
	const setButton = form.querySelector('#setNewBackgroundColor');
	form.addEventListener('submit', stopForm);
	setButton.addEventListener('click', setNewColor);
};





export {initControls};
