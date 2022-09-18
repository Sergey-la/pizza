import { FC } from 'react';

import Header from './Header/Header';

const Layout: FC = ({ children }) => {
	return (
		<div className="container">
			<Header />
			<div>{children}</div>
		</div>
	);
};

export default Layout;
