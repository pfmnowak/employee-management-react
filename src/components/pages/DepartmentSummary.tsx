import { ReactNode } from 'react';
import { CurrencySum, Employee } from '../../types/types';
import classes from './DepartmentSummary.module.scss';

type DepartmentSummaryProps = {
	workerList: Employee[];
	children?: ReactNode;
};

const DepartmentSummary = (props: DepartmentSummaryProps) => {
	const currencySum: CurrencySum = props.workerList.reduce((accumulator: CurrencySum, item) => {
		if (!accumulator[item.department]) {
			accumulator[item.department] = {};
		}

		accumulator[item.department][item.salary.currency] =
			(accumulator[item.department][item.salary.currency] || 0) + item.salary.amount;

		return accumulator;
	}, {});

	return (
		<div className={classes.summary}>
			<h1 className={classes.summary__header}>Department Summary</h1>
			<div className={classes.summary__content}>
				{Object.keys(currencySum)
					.sort((a, b) => {
						return ('' + a).localeCompare(b);
					})
					.map(cur => {
						return (
							<div key={cur} className={classes.summary__department}>
								<div className={classes.summary__title}>{cur}</div>
								<div className={classes.summary__currencies}>
									{Object.keys(currencySum[cur]).map(sum => {
										return (
											<div key={sum} className={classes.summary__currency}>
												{currencySum[cur][sum]} {sum}
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default DepartmentSummary;
