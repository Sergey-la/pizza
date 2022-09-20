import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSort } from 'redux/slices/filterSlices/filterSlice';
import type { RootState } from 'redux/store';

import styles from './Sort.module.scss';

const Sort: FC = () => {
	const [isActive, setIsActive] = React.useState(false);
	const sort = useSelector((state: RootState) => state.filterSlice.sort);

	const dispatch = useDispatch();
	const data = [
		{ name: 'популярности', sortProperty: 'rating' },
		{ name: 'цене', sortProperty: 'price' },
		{ name: 'алфавиту', sortProperty: 'desc' },
	];

	const changeSort = (sortParam: object) => {
		setIsActive(!isActive);
		dispatch(setSort(sortParam));
	};

	return (
		<div className={styles.sort}>
			<div className={styles.sort__label}>
				<b>Сортировка по:</b>
				<span onClick={() => setIsActive(!isActive)}>{sort.name}</span>
			</div>
			<div
				className={
					isActive
						? `${styles.sort__popup} ${styles['sort__popup--active']}`
						: `${styles.sort__popup}`
				}
			>
				<ul>
					{data.map((item) => (
						<li
							key={item.name}
							className={item.name === sort.name ? `${styles.active}` : ''}
							onClick={() =>
								changeSort({ name: item.name, sortProperty: item.sortProperty })
							}
						>
							{item.name}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Sort;
