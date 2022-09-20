import Image from 'next/image';
import React, { FC } from 'react';

import styles from './Pizza.module.scss';
import { IPizza } from './pizza.interface';

const Pizza: FC<{ pizza: IPizza }> = ({ pizza }) => {
	const [size, setSize] = React.useState(0);
	const [type, setType] = React.useState(0);

	return (
		<div className={styles['pizza-wrapper']}>
			<div className={styles['pizza-block']}>
				<Image
					src={pizza.imageUrl}
					width={250}
					height={200}
					className="pizza-block__image"
					alt={pizza.title}
					draggable={false}
				/>
				<h4 className={styles['pizza-block__title']}>{pizza.title}</h4>
				<div className={styles['pizza-block__selector']}>
					<ul>
						{pizza.types.map((item, i) => (
							<li
								key={item}
								className={i === type ? `${styles.active}` : ''}
								onClick={() => setType(i)}
							>
								{item === 0 ? 'тонкое' : 'традиционное'}
							</li>
						))}
					</ul>
					<ul>
						{pizza.sizes.map((item, i) => (
							<li
								key={i}
								className={i === size ? `${styles.active}` : ''}
								onClick={() => setSize(i)}
							>
								{item} см.
							</li>
						))}
					</ul>
				</div>
				<div className={styles['pizza-block__bottom']}>
					<div className={styles['pizza-block__price']}>от {pizza.price} ₽</div>
					<div className="button button--outline button--add">
						<svg
							width="12"
							height="12"
							viewBox="0 0 12 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
								fill="white"
							/>
						</svg>
						<span>Добавить</span>
						<i>2</i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pizza;
