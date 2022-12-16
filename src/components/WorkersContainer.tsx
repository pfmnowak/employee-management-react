import WorkerList from './WorkerList';
import classes from './WorkersContainer.module.scss';

type WorkersContainerProps = {
	workers: {
		firstName: string;
		lastName: string;
		department: string;
		salary: {
			amount: number;
			currency: string;
		};
	}[];
};

const WorkersContainer = (props: WorkersContainerProps) => {
	return (
		<div className={classes['workers-container']}>
			<h1>Workers</h1>
			<WorkerList workerList={props.workers} />
		</div>
	);
};

export default WorkersContainer;
