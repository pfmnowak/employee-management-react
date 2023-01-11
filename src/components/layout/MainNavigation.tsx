import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.scss';

const MainNavigation = () => {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(prevState => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', height: '100%' }}>
			<Typography variant='h5' sx={{ my: 2 }}>
				Workers management
			</Typography>
			<Divider />
			<Box component='nav'>
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
			</Box>
		</Box>
	);

	return (
		<>
			<AppBar component='nav' position='sticky' color='secondary'>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						size='large'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant='h5'
						component='header'
						sx={{
							flexGrow: 1,
							textAlign: { xs: 'center', sm: 'left' },
						}}
					>
						Workers management
					</Typography>
					<Box component='nav' sx={{ display: { xs: 'none', sm: 'flex' }, alignSelf: 'stretch' }}>
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
					</Box>
				</Toolbar>
			</AppBar>
			<Box component='nav'>
				<Drawer
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</>
	);
};

export default MainNavigation;
