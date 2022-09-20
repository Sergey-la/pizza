import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from 'redux/slices/filterSlices/filterSlice';
import type { RootState } from 'redux/store';


import styles from './Categories.module.scss';

const Categories: FC = () => {
	const category = useSelector(
		(state: RootState) => state.filterSlice.category
	);
	const dispatch = useDispatch();

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
					onClick={() => dispatch(setCategory(item))}
				>
					{item}
				</li>
			))}
		</ul>
	);
};

export default Categories;
