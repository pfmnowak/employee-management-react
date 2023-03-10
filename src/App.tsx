import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { Navigate, Route } from 'react-router';
import { Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import DepartmentSummary from './components/pages/DepartmentSummary';
import EmployeesContainer from './components/pages/EmployeesContainer';
import NewEmployeeForm from './components/pages/NewEmployeeForm';
import NotFound from './components/pages/NotFound';
import { Employee } from './types/types';

const initialEmployees: Employee[] = [
	{
		firstName: 'Alexandra',
		lastName: 'Gill',
		department: 'IT',
		salary: { amount: 3200, currency: 'USD' },
	},
	{
		firstName: 'Nicole',
		lastName: 'May',
		department: 'IT',
		salary: { amount: 3000.5, currency: 'USD' },
	},
	{
		firstName: 'Cody',
		lastName: 'Foster',
		department: 'Sales',
		salary: { amount: 9000, currency: 'USD' },
	},
	{
		firstName: 'Gabrielle',
		lastName: "O'Connor",
		department: 'Administration',
		salary: { amount: 4000, currency: 'EUR' },
	},
	{
		firstName: 'Adam',
		lastName: 'Gross',
		department: 'Administration',
		salary: { amount: 2500, currency: 'USD' },
	},
	{
		firstName: 'Rowan',
		lastName: 'Howard',
		department: 'Finance',
		salary: { amount: 7500, currency: 'USD' },
	},
	{
		firstName: 'Sophie',
		lastName: 'Morris',
		department: 'Sales',
		salary: { amount: 6700, currency: 'USD' },
	},
	{
		firstName: 'Ariana',
		lastName: 'Douglas',
		department: 'Finance',
		salary: { amount: 8400, currency: 'USD' },
	},
	{
		firstName: 'Selena',
		lastName: 'Parson',
		department: 'Management',
		salary: { amount: 9200, currency: 'USD' },
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

const departmentOptions: string[] = [
	'IT',
	'Sales',
	'HR',
	'Administration',
	'Marketing',
	'Finance',
	'Accounting',
	'Management',
];

const currencyOptions: string[] = ['EUR', 'USD', 'PLN'];

function App() {
	const [employees, setEmployees] = useState(initialEmployees);

	const submitHandler = (employee: Employee) => {
		setEmployees(prevEmployees => [...prevEmployees, employee]);
	};

	const colorPrimary = '#00ddc2';
	const colorSecondary = '#1b1b1b';
	const colorTertiary = '#f2f2f2';

	const theme = createTheme({
		palette: {
			primary: {
				main: colorPrimary,
			},
			secondary: {
				main: colorSecondary,
			},
			tertiary: {
				main: colorTertiary,
			},
		},
		components: {
			MuiDrawer: {
				styleOverrides: {
					paper: {
						boxSizing: 'border-box',
						background: colorSecondary,
						color: '#fff',
						width: 240,
					},
				},
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<Routes>
					<Route path='/' element={<Navigate to='/employees' replace />} />
					<Route
						path='/employees'
						element={<EmployeesContainer employees={employees} departments={departmentOptions} />}
					/>
					<Route
						path='/new-employee'
						element={
							<NewEmployeeForm
								onFormSubmit={submitHandler}
								departments={departmentOptions}
								currencies={currencyOptions}
							/>
						}
					/>
					<Route path='/summary' element={<DepartmentSummary employeeList={employees} />} />
					Summary
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Layout>
		</ThemeProvider>
	);
}

export default App;
