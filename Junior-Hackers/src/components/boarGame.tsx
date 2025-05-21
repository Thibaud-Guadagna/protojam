const BoardGame = () => {
	return (
		<div className="relative w-[600px] h-[600px] bg-orange-100 rounded-3xl border-2 border-black mx-auto mt-10">
			{/* Algobot au centre */}
			<div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-xl bg-yellow-100 border border-black flex items-center justify-center text-center text-xs font-bold">
				<img src="/Algobot.png" alt="Algobot" className="w-16 h-16 mb-1" />
				<span>Arrivée</span>
			</div>

			{/* Cases */}
			<div className="absolute top-[48%] left-[5%] w-16 h-10 bg-purple-400 text-white rounded-md flex items-center justify-center font-bold border border-black">
				Départ
			</div>
			<div className="absolute top-[16%] left-[22%] w-10 h-10 bg-yellow-200 rotate-45 flex items-center justify-center font-bold border border-black">
				I
			</div>
			<div className="absolute top-[10%] left-[42%] w-16 h-10 bg-pink-200 rounded-xl flex items-center justify-center font-bold border border-black">
				II
			</div>
			<div className="absolute top-[24%] right-[18%] w-12 h-12 bg-green-200 rotate-45 flex items-center justify-center font-bold border border-black">
				III
			</div>
			<div className="absolute top-[43%] right-[7%] w-16 h-10 bg-purple-300 rounded-md flex items-center justify-center font-bold border border-black">
				IV
			</div>
			<div className="absolute bottom-[20%] right-[18%] w-16 h-10 bg-green-300 rounded-full flex items-center justify-center font-bold border border-black">
				V
			</div>
			<div className="absolute bottom-[10%] left-[20%] w-10 h-10 bg-yellow-200 rotate-45 flex items-center justify-center font-bold border border-black">
				VI
			</div>
			<div className="absolute bottom-[32%] left-[10%] w-16 h-10 bg-purple-400 rounded-md flex items-center justify-center font-bold border border-black">
				VII
			</div>
			<div className="absolute top-[32%] left-[28%] w-12 h-12 bg-pink-300 rotate-45 flex items-center justify-center font-bold border border-black">
				VIII
			</div>
			<div className="absolute top-[40%] right-[22%] w-14 h-10 bg-green-300 rounded-md flex items-center justify-center font-bold border border-black">
				IX
			</div>
			<div className="absolute bottom-[25%] right-[28%] w-16 h-10 bg-purple-300 rounded-md flex items-center justify-center font-bold border border-black">
				X
			</div>
		</div>
	);
};

export default BoardGame;
