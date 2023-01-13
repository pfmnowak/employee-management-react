import { Employee } from '../types/types';
import classes from './EmployeeList.module.scss';

type EmployeeListProps = {
	employeeList: Employee[];
};

const EmployeeList = (props: EmployeeListProps) => {
	return (
		<table className={classes['employee-list']}>
			<thead>
				<tr>
					<th>ID</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Department</th>
					<th>Salary</th>
				</tr>
			</thead>
			<tbody>
				{props.employeeList.map((employee, index) => (
					<tr key={index}>
						<td>{index + 1}.</td>
						<td>{employee.firstName}</td>
						<td>{employee.lastName}</td>
						<td>{employee.department}</td>
						<td>
							{employee.salary.amount} {employee.salary.currency}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default EmployeeList;
