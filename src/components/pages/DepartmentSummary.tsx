import { ReactNode } from 'react';
import { CurrencySum, Employee } from '../../types/types';
import Card from '../layout/Card';
import classes from './DepartmentSummary.module.scss';

type DepartmentSummaryProps = {
	employeeList: Employee[];
	children?: ReactNode;
};

const DepartmentSummary = (props: DepartmentSummaryProps) => {
	const currencySum: CurrencySum = props.employeeList.reduce((accumulator: CurrencySum, item) => {
		if (!accumulator[item.department]) {
			accumulator[item.department] = {};
		}

		accumulator[item.department][item.salary.currency] =
			(accumulator[item.department][item.salary.currency] || 0) + item.salary.amount;

		return accumulator;
	}, {});

	return (
		<Card header='Department Summary'>
			<div className={classes.summary}>
				{Object.keys(currencySum)
					.sort((a, b) => {
						return ('' + a).localeCompare(b);
					})
					.map(cur => {
						return (
							<div key={cur} className={classes.department}>
								<div className={classes.department__title}>{cur}</div>
								<div className={classes.department__currencies}>
									{Object.keys(currencySum[cur]).map(sum => {
										return (
											<div key={sum} className={classes.department__currency}>
												{currencySum[cur][sum]} {sum}
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
			</div>
		</Card>
	);
};

export default DepartmentSummary;
