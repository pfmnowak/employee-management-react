import classes from './WorkerList.module.scss';

type WorkerListProps = {
	workerList: {
		firstName: string;
		lastName: string;
		department: string;
		salary: {
			amount: number;
			currency: string;
		};
	}[];
};

const WorkerList = (props: WorkerListProps) => {
	return (
		<table className={classes['worker-list']}>
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
				{props.workerList.map((worker, index) => (
					<tr key={index}>
						<td>{index + 1}.</td>
						<td>{worker.firstName}</td>
						<td>{worker.lastName}</td>
						<td>{worker.department}</td>
						<td>
							{worker.salary.amount} {worker.salary.currency}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default WorkerList;
