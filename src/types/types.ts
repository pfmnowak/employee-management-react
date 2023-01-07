export type Employee = {
	firstName: string;
	lastName: string;
	department: string;
	salary: {
		amount: number;
		currency: string;
	};
};
