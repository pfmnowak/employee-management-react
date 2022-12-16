import classes from './App.module.scss';
import WorkersContainer from './components/WorkersContainer';

const initialWorkers = [
	{
		firstName: 'John',
		lastName: 'Smith',
		department: 'IT',
		salary: { amount: 3000, currency: 'USD' },
	},
	{
		firstName: 'Jane',
		lastName: 'Doe',
		department: 'IT',
		salary: { amount: 3000.5, currency: 'USD' },
	},
	{
		firstName: 'Bob',
		lastName: 'Colman',
		department: 'Sales',
		salary: { amount: 9000, currency: 'USD' },
	},
	{
		firstName: 'Barbara',
		lastName: "O'Connor",
		department: 'Administration',
		salary: { amount: 4000, currency: 'EUR' },
	},
	{
		firstName: 'Adam',
		lastName: 'Murphy',
		department: 'Administration',
		salary: { amount: 2000, currency: 'USD' },
	},

	{
		firstName: 'Kevin',
		lastName: 'Klein',
		department: 'Sales',
		salary: { amount: 4300, currency: 'USD' },
	},
	{
		firstName: 'Spencer',
		lastName: 'Waters',
		department: 'Sales',
		salary: { amount: 4700, currency: 'USD' },
	},
	{
		firstName: 'Johan',
		lastName: 'Gomez',
		department: 'Management',
		salary: { amount: 4800, currency: 'USD' },
	},
	{
		firstName: 'Olivia',
		lastName: 'Douglas',
		department: 'Accounting',
		salary: { amount: 7600, currency: 'USD' },
	},
	{
		firstName: 'Mila',
		lastName: 'Myers',
		department: 'IT',
		salary: { amount: 12300, currency: 'USD' },
	},
	{
		firstName: 'Juan',
		lastName: 'Bennet',
		department: 'Finance',
		salary: { amount: 14500, currency: 'EUR' },
	},
	{
		firstName: 'Donovan',
		lastName: 'Campbell',
		department: 'HR',
		salary: { amount: 8000, currency: 'USD' },
	},
	{
		firstName: 'Marley',
		lastName: 'Thomas',
		department: 'Sales',
		salary: { amount: 16000, currency: 'PLN' },
	},
	{
		firstName: 'Evelynn',
		lastName: 'Patel',
		department: 'Marketing',
		salary: { amount: 13700, currency: 'USD' },
	},
	{
		firstName: 'Eli',
		lastName: 'Watson',
		department: 'HR',
		salary: { amount: 3600, currency: 'USD' },
	},
	{
		firstName: 'Kayson',
		lastName: 'Johnson',
		department: 'HR',
		salary: { amount: 6000, currency: 'EUR' },
	},
	{
		firstName: 'Vanessa',
		lastName: 'Woods',
		department: 'Marketing',
		salary: { amount: 7000, currency: 'EUR' },
	},
	{
		firstName: 'Lincoln',
		lastName: 'Klein',
		department: 'IT',
		salary: { amount: 9500, currency: 'EUR' },
	},
	{
		firstName: 'Grace',
		lastName: 'Hammond',
		department: 'Accounting',
		salary: { amount: 6300, currency: 'EUR' },
	},
	{
		firstName: 'Malcolm',
		lastName: 'Ortiz',
		department: 'Finance',
		salary: { amount: 8400, currency: 'EUR' },
	},
	{
		firstName: 'Maggie',
		lastName: 'Jackson',
		department: 'IT',
		salary: { amount: 12300, currency: 'EUR' },
	},
	{
		firstName: 'Elijah',
		lastName: 'Ortiz',
		department: 'IT',
		salary: { amount: 16000, currency: 'EUR' },
	},
	{
		firstName: 'Caleb',
		lastName: 'Hammond',
		department: 'Management',
		salary: { amount: 60000, currency: 'EUR' },
	},
	{
		firstName: 'Andrew',
		lastName: 'Perez',
		department: 'Sales',
		salary: { amount: 5450, currency: 'EUR' },
	},
	{
		firstName: 'Presley',
		lastName: 'Kelly',
		department: 'Administration',
		salary: { amount: 1500, currency: 'EUR' },
	},
	{
		firstName: 'Nevaeh',
		lastName: 'Hoffman',
		department: 'IT',
		salary: { amount: 25000, currency: 'PLN' },
	},
	{
		firstName: 'Callum',
		lastName: 'Stokes',
		department: 'Administration',
		salary: { amount: 4200, currency: 'PLN' },
	},
	{
		firstName: 'Adelyn',
		lastName: 'White',
		department: 'Finance',
		salary: { amount: 6050, currency: 'USD' },
	},
];

function App() {
	return (
		<div className={classes.App}>
			<header className={classes['App-header']}>
				<WorkersContainer workers={initialWorkers} />
			</header>
		</div>
	);
}

export default App;
