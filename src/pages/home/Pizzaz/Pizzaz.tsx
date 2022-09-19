import React, { FC } from 'react';

import Pizza from './Pizza';
import { IPizza, PizzaList } from './pizza.interface';

const Pizzaz: FC<PizzaList> = () => {
	const [pizzaz, setPizzaz] = React.useState<IPizza[]>([]);

	React.useEffect(() => {
		fetch(`${process.env.API_URL}/pizzez`)
			.then((res) => res.json())
			.then((arr) => setPizzaz(arr));
	}, []);

	return (
		<React.Fragment>
			{pizzaz.length &&
				pizzaz.map((item) => <Pizza key={item.id} pizza={item} />)}{' '}
		</React.Fragment>
	);
};

export default Pizzaz;
