import React, { FC, useState } from 'react';

import styles from './Sort.module.scss';

const Sort: FC = () => {
	const [isActive, setIsActive] = React.useState(false);
	const [sort, setSort] = useState('популярности');
	const data = ['популярности', 'цене', 'алфавиту'];

	const changeSort = (sortParam: string) => {
		setIsActive(!isActive);
		setSort(sortParam);
	};

	return (
		<div className={styles.sort}>
			<div className={styles.sort__label}>
				<b>Сортировка по:</b>
				<span onClick={() => setIsActive(!isActive)}>{sort}</span>
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
							key={item}
							className={item === sort ? `${styles.active}` : ''}
							onClick={() => changeSort(item)}
						>
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Sort;
