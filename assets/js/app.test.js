/* eslint-disable no-undef */
import {isColor, checkHexChar} from './colors.js';

describe('Color tests', () => {
	test('Valid color name (red) is an OK color', () => {
		expect(isColor('red')).toBe(true);
	});

	test('Valid Hexadecimal color (#ffffff) is an OK color', () => {
		expect(isColor('#ffffff')).toBe(true);
	});

	test('Invalid Hexadecimal color (ffffff) is an OK color', () => {
		expect(isColor('ffffff')).toBe(false);
	});

	test('Hex color without # returns valid hex code', () => {
		expect(checkHexChar('ffffff')).toBe('#ffffff');
	});

	test('Name color returns same name color', () => {
		expect(checkHexChar('blue')).toBe('blue');
	});

});

