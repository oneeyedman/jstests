const checkHexChar = strColor => {
	const test6 = /^[0-9A-F]{6}$/i.test(strColor);
	const test3 = /^[0-9A-F]{3}$/i.test(strColor);
	return (test6 || test3) ? '#' + strColor : strColor;
};





const isColor = strColor => {
	const s = new Option().style;
	s.color = strColor;
	const test1 = s.color === strColor;
	const test2 = /^#[0-9A-F]{6}$/i.test(strColor);
	const test3 = /^#[0-9A-F]{3}$/i.test(strColor);
	return (test1 || test2 || test3);
};




const showNoColorAlert = element => {
	element.classList.add('is-not-a-color');
	setTimeout(()=>{
		element.classList.add('is-not-a-color--active');
		setTimeout(()=>{
			element.classList.remove('is-not-a-color--active');
			setTimeout(()=>{
				element.classList.remove('is-not-a-color');
			},500);
		},1000);
	}, 10);
};





const setNewColor = event => {
	const page = document.querySelector('#page');
	const target = event.target;
	const field = target.closest('#controls').querySelector('#backgroundColor');

	const newColor = checkHexChar(field.value);
	if (isColor(newColor)) {
		page.style.backgroundColor = newColor;
		field.value = '';
	} else {
		showNoColorAlert(page);
	//	page.classList.add('is-not-a-color');
	}
};





export {checkHexChar, isColor, setNewColor};
