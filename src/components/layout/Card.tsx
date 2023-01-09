import { ReactNode } from 'react';
import classes from './Card.module.scss';

type CardProps = {
	children?: ReactNode;
	header: string;
};

const Card = (props: CardProps) => {
	return (
		<div className={classes.card}>
			<h1 className={classes.card__header}>{props.header}</h1>
			<div className={classes.card__content}>{props.children}</div>
		</div>
	);
};

export default Card;
