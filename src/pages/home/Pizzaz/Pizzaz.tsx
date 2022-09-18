import React, { FC } from 'react';

import Pizza from './Pizza';

const Pizzaz: FC = () => {
	const mac = [1, 2];
	return (
		<React.Fragment>
			{mac.map(() => (
				<Pizza />
			))}{' '}
		</React.Fragment>
	);
};

export default Pizzaz;
