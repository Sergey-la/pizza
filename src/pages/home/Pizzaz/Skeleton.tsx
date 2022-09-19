import { FC } from 'react';
import ContentLoader from 'react-content-loader';

import styles from './Pizza.module.scss';

const Skeleton: FC = () => {
	return (
		<ContentLoader
			speed={2}
			width={280}
			height={401}
			viewBox="0 0 280 401"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
			className={styles['pizza-block']}
		>
			<circle cx="128" cy="101" r="100" />
			<rect x="8" y="208" rx="10" ry="10" width="249" height="19" />
			<rect x="99" y="207" rx="0" ry="0" width="23" height="0" />
			<rect x="101" y="206" rx="0" ry="0" width="0" height="1" />
			<rect x="77" y="207" rx="0" ry="0" width="25" height="0" />
			<rect x="102" y="207" rx="0" ry="0" width="1" height="0" />
			<rect x="103" y="207" rx="0" ry="0" width="1" height="0" />
			<rect x="3" y="246" rx="10" ry="10" width="258" height="94" />
			<rect x="6" y="362" rx="10" ry="10" width="87" height="31" />
			<rect x="121" y="356" rx="20" ry="20" width="144" height="42" />
		</ContentLoader>
	);
};

export default Skeleton;
