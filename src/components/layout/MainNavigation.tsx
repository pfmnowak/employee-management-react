import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.scss';

const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<h2 className={classes.header__logo}>Workers management</h2>
			<nav className={classes.header__nav}>
				<NavLink
					to='/employees'
					className={navData =>
						navData.isActive
							? `${classes['nav-link']} ${classes['nav-link--active']}`
							: classes['nav-link']
					}
				>
					Employees List
				</NavLink>
				<NavLink
					to='/new-employee'
					className={navData =>
						navData.isActive
							? `${classes['nav-link']} ${classes['nav-link--active']}`
							: classes['nav-link']
					}
				>
					New Employee
				</NavLink>
				<NavLink
					to='/summary'
					className={navData =>
						navData.isActive
							? `${classes['nav-link']} ${classes['nav-link--active']}`
							: classes['nav-link']
					}
				>
					Summary
				</NavLink>
			</nav>
		</header>
	);
};

export default MainNavigation;
