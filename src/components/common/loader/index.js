import React from 'react';
import LoaderContainer from './elements';

const Loader = ({ size, alignSelf, className, marginT }) => (
	<LoaderContainer
		className={className}
		size={size}
		alignSelf={alignSelf}
		marginT={marginT}
	>
		<div />
		<div />
		<div />
		<div />
	</LoaderContainer>
);

export default Loader;
