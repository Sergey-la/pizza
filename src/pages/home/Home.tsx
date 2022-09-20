import { FC } from 'react';

import Categories from './Categories/Categories';
import Pizzaz from './Pizzaz/Pizzaz';
import Sort from './Sort/Sort';
import { IHome } from './home.interface';

const Home: FC<IHome> = ({ pizzaz }) => {
	return (
		<div className="content">
			<div className="content__top">
				<Categories />
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				<Pizzaz pizzaz={pizzaz} />
			</div>
		</div>
	);
};

export default Home;
