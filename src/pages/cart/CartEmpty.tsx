import Link from 'next/link';
import { FC } from 'react';

import styles from './Cart.module.scss';

const CartEmpty: FC = () => {
	return (
		<div className={`${styles.cart} ${styles['cart--empty']}`}>
			<h2>Корзина пустая 😕</h2>
			<p>
				Вероятней всего, вы не заказывали ещё пиццу.
				<br />
				Для того, чтобы заказать пиццу, перейди на главную страницу.
			</p>
			<img src="/images/empty-cart.png" alt="Empty cart" />
			<Link href="/">
				<a className="button button--black">
					<span>Вернуться назад</span>
				</a>
			</Link>
		</div>
	);
};

export default CartEmpty;
