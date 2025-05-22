import BoardGame from "../components/boardGame";
import FloatingElements from "../components/floatingElements";

export default function Game() {
	return (
		<>
		<FloatingElements />
		<div className="min-h-screen flex flex-col items-center justify-center bg-cyan-100">
			<BoardGame />
		</div>
		</>
	);
}
