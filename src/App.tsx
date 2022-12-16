import classes from './App.module.scss';

function App() {
	return (
		<div className={classes.App}>
			<header className={classes['App-header']}>
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className={classes['App-link']}
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
