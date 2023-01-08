import { ReactNode } from 'react';
import classes from './Layout.module.scss';
import MainNavigation from './MainNavigation';

type LayoutProps = {
	children?: ReactNode;
};

const Layout = (props: LayoutProps) => {
	return (
		<div className={classes.layout}>
			<MainNavigation />
			<main className={classes.main}>{props.children}</main>
		</div>
	);
};

export default Layout;
