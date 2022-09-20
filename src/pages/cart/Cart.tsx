import Link from 'next/link';
import { FC } from 'react';

import ClearSvg from '@/ui/ClearSvg';

import styles from './Cart.module.scss';
import CartEmpty from './CartEmpty';
import CartItem from './CartItem';

const Cart: FC = () => {
	return (
		<div className="content">
			<div className="container container--cart">
				<div className={styles.cart}>
					<div className={styles.cart__top}>
						<h2 className="content__title">Корзина</h2>
						<div className={styles.cart__clear}>
							<ClearSvg />
							<span>Очистить корзину</span>
						</div>
					</div>
					<div className={styles.cart__items}>
						<CartItem />
					</div>
					<div className={styles.cart__bottom}>
						<div className={styles['cart__bottom-details']}>
							<span>
								{' '}
								Всего пицц: <b>3 шт.</b>{' '}
							</span>
							<span>
								{' '}
								Сумма заказа: <b>900 ₽</b>{' '}
							</span>
						</div>
						<div className={styles['cart__bottom-buttons']}>
							<Link href="/">
								<a className="button button--outline button--add go-back-btn">
									<span>Вернуться назад</span>
								</a>
							</Link>
							<div className="button pay-btn">
								<span>Оплатить сейчас</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
