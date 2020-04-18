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

	test('Valid Hexadecimal color (#fc0) is an OK color', () => {
		expect(isColor('#fc0')).toBe(true);
	});

	test('Invalid Hexadecimal color (fc0) is an OK color', () => {
		expect(isColor('fc0')).toBe(false);
	});

	test('Hex color without # (ffcc00) returns valid hex code', () => {
		expect(checkHexChar('ffcc00')).toBe('#ffcc00');
	});

	test('Hex color without # (fc0) returns valid hex code', () => {
		expect(checkHexChar('fc0')).toBe('#fc0');
	});

	test('Name color returns same name color', () => {
		expect(checkHexChar('blue')).toBe('blue');
	});
});
