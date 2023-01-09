export type Employee = {
	firstName: string;
	lastName: string;
	department: string;
	salary: {
		amount: number;
		currency: string;
	};
};

export type CurrencySum = {
	[key: string]: {
		[key: string]: number;
	};
};

export type SearchedEmployee = {
	[key: string]: string;
};
