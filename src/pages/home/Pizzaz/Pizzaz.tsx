import React, { FC } from 'react';

import Pizza from './Pizza';
import Skeleton from './Skeleton';
import { PizzaList } from './pizza.interface';

const Pizzaz: FC<PizzaList> = ({ pizzaz }) => {
	const [isLoaded, setIsloaded] = React.useState(true);

	React.useEffect(() => {
		setIsloaded(false);
	}, []);

	const render = () => {
		if (isLoaded) {
			return [...new Array(6)].map((_, i) => <Skeleton key={i} />);
		} else if (pizzaz?.length && !isLoaded) {
			return pizzaz?.map((item) => <Pizza key={item.id} pizza={item} />);
		}
		return <div>Упс, пицц нет</div>;
	};

	return <React.Fragment>{render()}</React.Fragment>;
};

export default Pizzaz;
