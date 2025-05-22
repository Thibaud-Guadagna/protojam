import { useState, useEffect } from "react";

const AlgobotWithSpeech = () => {
	const [showBubble, setShowBubble] = useState(false);

	const handleClick = () => {
		setShowBubble(true);
	};

	useEffect(() => {
		let timer: ReturnType<typeof setTimeout>;
		if (showBubble) {
			timer = setTimeout(() => {
				setShowBubble(false);
			}, 2000); // 2 secondes
		}
		return () => clearTimeout(timer);
	}, [showBubble]);

	return (
		<div className="relative flex justify-center mt-15 md:mt-30">
			{showBubble && (
				<div className="absolute -top-16 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-800 max-w-[220px] text-center z-10 animate-fade-in">
					<p>👋 Salut, tu viens jouer avec moi&nbsp;?</p>
				</div>
			)}

			<button
				type="button"
				onClick={handleClick}
				onKeyDown={(e) => e.key === "Enter" && handleClick()}
				className="w-40 h-40 lg:w-80 lg:h-80 p-0 border-none bg-transparent cursor-pointer  transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-6"
				aria-label="Algobot"
			>
				<img
					src="/Algobot.png"
					alt="Algobot"
					className="w-full h-full pointer-events-none"
				/>
			</button>
		</div>
	);
};

export default AlgobotWithSpeech;
