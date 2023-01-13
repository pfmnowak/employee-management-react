import { useRef } from 'react';
import { Employee } from '../../types/types';
import Card from '../layout/Card';
import classes from './NewEmployeeForm.module.scss';

type NewEmployeeFormProps = {
	onFormSubmit: (employee: Employee) => void;
	departments: string[];
	currencies: string[];
};

const NewEmployeeForm = (props: NewEmployeeFormProps) => {
	const firstNameRef = useRef<HTMLInputElement>(null);
	const lastNameRef = useRef<HTMLInputElement>(null);
	const departmentRef = useRef<HTMLSelectElement>(null);
	const salaryRef = useRef<HTMLInputElement>(null);
	const currencyRef = useRef<HTMLSelectElement>(null);

	const submitFormHandler = (event: React.FormEvent) => {
		event.preventDefault();

		props.onFormSubmit({
			firstName: firstNameRef.current?.value ?? '',
			lastName: lastNameRef.current?.value ?? '',
			department: departmentRef.current?.value ?? '',
			salary: {
				amount: +(salaryRef.current?.value ?? 1000),
				currency: currencyRef.current?.value ?? 'EUR',
			},
		});
		if (firstNameRef.current) firstNameRef.current.value = '';
		if (lastNameRef.current) lastNameRef.current.value = '';
		if (salaryRef.current) salaryRef.current.value = '';
	};

	return (
		<div className={classes.form__container}>
			<Card header='New employee form'>
				<form className={classes.form} onSubmit={submitFormHandler}>
					<div className={classes.form__field}>
						<input
							type='text'
							className={classes.form__field__input}
							ref={firstNameRef}
							name='firstName'
							id='firstName'
							placeholder=' '
							pattern='[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]{2,30}'
							required
							autoFocus
						/>
						<label htmlFor='firstName' className={classes.form__field__label}>
							First Name
						</label>
						<p className={classes.form__field__error}>Is your First Name correct?</p>
					</div>
					<div className={classes.form__field}>
						<input
							type='text'
							className={classes.form__field__input}
							ref={lastNameRef}
							name='lastName'
							id='lastName'
							placeholder=' '
							pattern='[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]{2,30}'
							required
						/>
						<label htmlFor='lastName' className={classes.form__field__label}>
							Last Name
						</label>
						<p className={classes.form__field__error}>Is your Last Name correct?</p>
					</div>
					<div className={classes.form__field}>
						<select
							className={classes.form__field__input}
							ref={departmentRef}
							name='department'
							id='department'
							required
						>
							{props.departments
								.sort((a, b) => {
									return ('' + a).localeCompare(b);
								})
								.map(option => (
									<option key={option} value={option} label={option} />
								))}
						</select>
						<label htmlFor='department' className={classes.form__field__label}>
							Department
						</label>
					</div>
					<div className={classes['form__currency-box']}>
						<div className={classes.form__field}>
							<input
								type='number'
								className={classes.form__field__input}
								ref={salaryRef}
								name='salary'
								id='salary'
								placeholder=' '
								min={1000}
								max={200000}
								required
							/>
							<label htmlFor='salary' className={classes.form__field__label}>
								Salary
							</label>
							<p className={classes.form__field__error}>Is your Salary correct? (1k - 200k)</p>
						</div>
						<select
							className={`${classes.form__field__input} ${classes['form__field__input--short']}`}
							ref={currencyRef}
							name='currency'
							id='currency'
							required
						>
							{props.currencies
								.sort((a, b) => {
									return ('' + a).localeCompare(b);
								})
								.map(option => (
									<option key={option} value={option} label={option} />
								))}
						</select>
					</div>
					<br />
					<button className={classes.form__button} type='submit' id='submit-button'>
						Add new user
					</button>
				</form>
			</Card>
		</div>
	);
};

export default NewEmployeeForm;
