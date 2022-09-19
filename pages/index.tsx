import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

import Home from '@/pages/home/Home';
import { IHome } from '@/pages/home/home.interface';

const HomePage: NextPage<IHome> = ({
	pizzaz,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return <Home pizzaz={pizzaz} />;
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
