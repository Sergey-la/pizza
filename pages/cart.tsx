import { NextPage } from 'next';
import React from 'react';

import Meta from '@/components/Meta/Meta';

import Cart from '@/pages/cart/Cart';

const cart: NextPage = () => {
	return (
		<React.Fragment>
			<Meta
				title="React Pizza - корзина товаров"
				description="React Pizza - корзина товаров"
			/>
			<Cart />
		</React.Fragment>
	);
};

export default cart;
