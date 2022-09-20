import Image from 'next/image';
import { FC } from 'react';

import ButtonSvg from '@/ui/ButtonSvg';

import styles from './Cart.module.scss';

const CartItem: FC = () => {
	return (
		<div className={styles.cart__item}>
			<div className={styles['cart__item-img']}>
				<Image
					src={
						'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
					}
					width={80}
					height={80}
					alt="Pizza"
				/>
			</div>
			<div className={styles['cart__item-info']}>
				<h3>Сырный цыпленок</h3>
				<p>тонкое тесто, 26 см.</p>
			</div>
			<div className={styles['cart__item-count']}>
				<div
					className={`button button--outline button--circle ${styles['cart__item-count-minus']}`}
				>
					<ButtonSvg />
				</div>
				<b>2</b>
				<div
					className={`button button--outline button--circle ${styles['cart__item-count-plus']}`}
				>
					<ButtonSvg />
				</div>
			</div>
			<div className={styles['cart__item-price']}>
				<b>770 ₽</b>
			</div>
			<div className={styles['cart__item-remove']}>
				<div className="button button--outline button--circle button--remove">
					<ButtonSvg />
				</div>
			</div>
		</div>
	);
};

export default CartItem;
