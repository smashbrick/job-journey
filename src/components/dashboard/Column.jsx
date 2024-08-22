import Board from "./Board";

const Column = () => {
	return (
		<>
			<div className="column-container">
				<div className="column">
					<Board />
				</div>
				<div className="column"> </div>
				<div className="column"> </div>
				<div className="column"> </div>
			</div>
		</>
	);
};
export default Column;
