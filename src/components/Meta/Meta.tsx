import Head from 'next/head';
import React, { FC } from 'react';

import { IMeta } from './meta.interface';

const Meta: FC<IMeta> = ({ title, description }) => {
	return (
		<React.Fragment>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<meta name="description" content={description} />
			</Head>
		</React.Fragment>
	);
};

export default Meta;
