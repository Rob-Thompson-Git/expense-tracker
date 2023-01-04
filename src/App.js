import ExpenseItem from "./components/ExpenseItem";

function App() {
	const expenses = [
		{
			id: "e1",
			title: "Toilet Paper",
			amount: 5.12,
			date: new Date(2023, 1, 1),
		},
		{
			id: "e2",
			title: "Car Insurance",
			amount: 94.12,
			date: new Date(2023, 1, 2),
		},
		{
			id: "e3",
			title: "Chic Filla",
			amount: 1000.12,
			date: new Date(2022, 12, 31),
		},
		{
			id: "e4",
			title: "New Mac",
			amount: 2000.12,
			date: new Date(2022, 12, 25),
		},
	];

	return (
		<div>
			<ExpenseItem
				title={expenses[0].title}
				amount={expenses[0].amount}
				date={expenses[0].date}
			/>
			<ExpenseItem
				title={expenses[1].title}
				amount={expenses[1].amount}
				date={expenses[1].date}
			/>
			<ExpenseItem
				title={expenses[2].title}
				amount={expenses[2].amount}
				date={expenses[2].date}
			/>
			<ExpenseItem
				title={expenses[3].title}
				amount={expenses[3].amount}
				date={expenses[3].date}
			/>
		</div>
	);
}

export default App;
