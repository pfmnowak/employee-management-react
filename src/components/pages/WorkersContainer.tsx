import WorkerList from '../WorkerList';
import { Employee } from './../../types/types';

import classes from './WorkersContainer.module.scss';

type WorkersContainerProps = {
	workers: Employee[];
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
