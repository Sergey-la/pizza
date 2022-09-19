import React, { FC } from 'react';

import pizzaz from '../../../../public/pizzaz.json';

import Pizza from './Pizza';
import { PizzaList } from './pizza.interface';

const Pizzaz: FC<PizzaList> = () => {
	return (
		<React.Fragment>
			{pizzaz.map((item) => (
				<Pizza key={item.id} pizza={item} />
			))}{' '}
		</React.Fragment>
	);
};

export default Pizzaz;
