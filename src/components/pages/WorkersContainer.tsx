import { FormEvent, useReducer } from 'react';
import AdvancedFilter from '../AdvancedFilter';
import Card from '../layout/Card';
import WorkerList from '../WorkerList';
import { Employee, SearchedEmployee } from './../../types/types';
import classes from './WorkersContainer.module.scss';

type WorkersContainerProps = {
	workers: Employee[];
	departments: string[];
};

const WorkersContainer = ({ workers, departments }: WorkersContainerProps) => {
	const [filterInput, setFilterInput] = useReducer(
		(state: SearchedEmployee, newState: SearchedEmployee) => ({ ...state, ...newState }),
		{
			person: '',
			department: '',
			salaryMin: '',
			salaryMax: '',
		},
	);

	const filterWorkersHandler = (event: FormEvent) => {
		const { name, value } = event.target as HTMLInputElement;
		setFilterInput({ [name]: value });
	};

	const filterWorkers = (workers: Employee[]) => {
		return workers.filter((worker: Employee) => {
			return (
				(worker.firstName.toLowerCase().includes(filterInput.person.toLowerCase()) ||
					worker.lastName.toLowerCase().includes(filterInput.person.toLowerCase())) &&
				(worker.department === filterInput.department || filterInput.department === '') &&
				worker.salary.amount >= +filterInput.salaryMin &&
				(worker.salary.amount <= +filterInput.salaryMax || filterInput.salaryMax === '')
			);
		});
	};

	return (
		<div className={classes['workers-page']}>
			<Card header='Workers'>
				<div className={classes['workers-container']}>
					<AdvancedFilter
						searchValue={filterInput}
						handleChangeValue={filterWorkersHandler}
						departments={departments}
					/>
					<WorkerList workerList={filterWorkers(workers)} />
				</div>
			</Card>
		</div>
	);
};

export default WorkersContainer;
