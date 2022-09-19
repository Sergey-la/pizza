import React, { FC } from 'react';

import styles from './Categories.module.scss';

const Categories: FC = () => {
	const [category, setCategory] = React.useState('Все');

	const data = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	];

	return (
		<ul className={styles.categories}>
			{data.map((item) => (
				<li
					key={item}
					className={item === category ? `${styles.active}` : ''}
					onClick={() => setCategory(item)}
				>
					{item}
				</li>
			))}
		</ul>
	);
};

export default Categories;
