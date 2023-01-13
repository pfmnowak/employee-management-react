import { FormEvent, useReducer } from 'react';
import { Employee, SearchedEmployee } from '../../types/types';
import AdvancedFilter from '../AdvancedFilter';
import Card from '../layout/Card';
import EmployeeList from '../EmployeeList';
import classes from './EmployeesContainer.module.scss';

type EmployeesContainerProps = {
	employees: Employee[];
	departments: string[];
};

const EmployeesContainer = ({ employees: employees, departments }: EmployeesContainerProps) => {
	const [filterInput, setFilterInput] = useReducer(
		(state: SearchedEmployee, newState: SearchedEmployee) => ({ ...state, ...newState }),
		{
			person: '',
			department: '',
			salaryMin: '',
			salaryMax: '',
		},
	);

	const filterEmployeesHandler = (event: FormEvent) => {
		const { name, value } = event.target as HTMLInputElement;
		setFilterInput({ [name]: value });
	};

	const filterEmployees = (employees: Employee[]) => {
		return employees.filter((employee: Employee) => {
			return (
				(employee.firstName.toLowerCase().includes(filterInput.person.toLowerCase()) ||
					employee.lastName.toLowerCase().includes(filterInput.person.toLowerCase())) &&
				(employee.department === filterInput.department || filterInput.department === '') &&
				employee.salary.amount >= +filterInput.salaryMin &&
				(employee.salary.amount <= +filterInput.salaryMax || filterInput.salaryMax === '')
			);
		});
	};

	return (
		<div className={classes['employees-page']}>
			<Card header='Employees'>
				<div className={classes['employees-container']}>
					<AdvancedFilter
						searchValue={filterInput}
						handleChangeValue={filterEmployeesHandler}
						departments={departments}
					/>
					<EmployeeList employeeList={filterEmployees(employees)} />
				</div>
			</Card>
		</div>
	);
};

export default EmployeesContainer;
