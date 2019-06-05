import { css } from 'styled-components';

const sizes = {
	pc: 1170,
	desktop: 992,
	tablet: 768,
	phone: 576,
	smallPhone: 320
};

const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`@media (max-width: ${sizes[label] / 16}em) {${css(...args)};}`;

	return acc;
}, {});

export default media;
