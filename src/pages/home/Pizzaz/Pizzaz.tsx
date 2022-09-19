import React, { FC } from 'react';

import Pizza from './Pizza';
import { PizzaList } from './pizza.interface';

const Pizzaz: FC<PizzaList> = ({ pizzaz }) => {
	return (
		<React.Fragment>
			{pizzaz?.length ? (
				pizzaz.map((item) => <Pizza key={item.id} pizza={item} />)
			) : (
				<div></div>
			)}
		</React.Fragment>
	);
};

export default Pizzaz;
