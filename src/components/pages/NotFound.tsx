import HomeIcon from '@mui/icons-material/Home';
import { Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import classes from './NotFound.module.scss';

const NotFound = () => {
	return (
		<div className={classes['not-found']}>
			<div className={classes['not-found__img']}>
				<Box
					component='img'
					sx={{
						height: '100%',
						width: '100%',
						objectFit: 'cover',
					}}
					alt='The 404 error image'
					src={require('./../../img/404.jpg')}
				/>
			</div>
			<Typography fontSize={'1.5rem'} color={'#000'}>
				Image by{' '}
				<Link
					href='https://www.freepik.com/free-vector/404-error-with-landscape-concept-illustration_20602785.htm#query=error%20404&position=1&from_view=keyword'
					color={'#000'}
				>
					storyset
				</Link>{' '}
				on Freepik
			</Typography>
			<p className={classes['not-found__text']}>
				The page you are looking for apparently does not exist.
			</p>
			<NavLink to='/' className={classes['not-found__btn']}>
				<HomeIcon fontSize='large' sx={{ mr: 1 }} />
				Take me home
			</NavLink>
		</div>
	);
};

export default NotFound;
