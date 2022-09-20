import React, { FC } from 'react';

import Header from './Header/Header';

const Layout: FC = ({ children }) => {
	return (
		<div className="wrapper">
			<div className="container">
				<Header />
				<React.Fragment>{children}</React.Fragment>
			</div>
		</div>
	);
};

export default Layout;
