import { FC } from 'react';

import Categories from './Categories/Categories';
import Pizzaz from './Pizzaz/Pizzaz';
import Sort from './Sort/Sort';

const Home: FC = () => {
	return (
		<div className="content container">
			<div className="content__top">
				<Categories />
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				<Pizzaz />
			</div>
		</div>
	);
};

export default Home;
