const checkHexChar = strColor => {
	const test = /^[0-9A-F]{6}$/i.test(strColor);
	return test ? '#' + strColor : strColor;
};





function isColor(strColor){
	const s = new Option().style;
	s.color = strColor;
	const test1 = s.color === strColor;
	const test2 = /^#[0-9A-F]{6}$/i.test(strColor);
	return (test1 || test2);
}





const setNewColor = event => {
	const page = document.querySelector('#page');
	const target = event.target;
	const field = target.closest('#controls').querySelector('#backgroundColor');
	const newColor = checkHexChar(field.value);
	if (isColor(newColor)) {
		page.style.backgroundColor = newColor;
		field.value = '';
	} else {
		console.log('no es un color');
	}
};





export {checkHexChar, isColor, setNewColor};
