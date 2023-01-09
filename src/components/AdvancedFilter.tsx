import { SearchedEmployee } from '../types/types';
import classes from './pages/NewWorkerForm.module.scss';

type AdvancedFilterProps = {
	departments: string[];
	searchValue: SearchedEmployee;
	handleChangeValue: (event: React.FormEvent) => void;
};

const AdvancedFilter = ({ searchValue, handleChangeValue, departments }: AdvancedFilterProps) => {
	return (
		<form className={classes['filter-container']}>
			<div className={`${classes['form__field']} ${classes['form__field--search']}`}>
				<input
					data-testid='filter-input-person'
					type='search'
					name='person'
					value={searchValue.person}
					onChange={e => handleChangeValue(e)}
					placeholder='Search person'
					className={classes.form__field__input}
					autoFocus
				/>
			</div>
			<div className={`${classes['form__field']} ${classes['form__field--search']}`}>
				<select
					data-testid='filter-input-department'
					className={classes.form__field__input}
					name='department'
					defaultValue={''}
					onChange={e => handleChangeValue(e)}
					placeholder='department'
				>
					<option value=''> -- All departments -- </option>
					{departments
						.sort((a, b) => {
							return ('' + a).localeCompare(b);
						})
						.map(option => (
							<option key={option} value={option} label={option} />
						))}
				</select>
			</div>
			<div className={`${classes['form__field']} ${classes['form__field--search']}`}>
				<input
					data-testid='filter-input-salary-min'
					type='number'
					min='1000'
					max='200000'
					name='salaryMin'
					className={classes.form__field__input}
					placeholder='Min salary'
					value={searchValue.salaryMin}
					onChange={e => handleChangeValue(e)}
				/>
			</div>
			<div className={`${classes['form__field']} ${classes['form__field--search']}`}>
				<input
					data-testid='filter-input-salary-max'
					type='number'
					min='1000'
					max='200000'
					name='salaryMax'
					className={classes.form__field__input}
					placeholder='Max salary'
					value={searchValue.salaryMax}
					onChange={e => handleChangeValue(e)}
				/>
			</div>
		</form>
	);
};

export default AdvancedFilter;
