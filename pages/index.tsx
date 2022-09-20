import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import React from 'react';

import Meta from '@/components/Meta/Meta';

import Home from '@/pages/home/Home';
import { IHome } from '@/pages/home/home.interface';

const HomePage: NextPage<IHome> = ({
	pizzaz,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<React.Fragment>
			<Meta
				title="Rect Pizza - самая вкусная пицца во вселенной"
				description="самая вкусная пицца во вселенной"
			/>
			<Home pizzaz={pizzaz} />
		</React.Fragment>
	);
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch(`${process.env.API_URL}/pizzez`);
	const pizzaz = await res.json();
	if (pizzaz !== 'Not found') {
		return {
			props: { pizzaz },
		};
	}
	return { props: {} };
};
