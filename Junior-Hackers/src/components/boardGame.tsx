import { useNavigate } from "react-router-dom";
import  Button from "./ui/button"

const BoardGame = () => {
	const navigate = useNavigate();

	return (
		<section className="flex flex-col items-center justify-center min-h-screen">
			<div className="p-8">
				<div className="relative w-[90vw] max-w-[600px] aspect-square bg-orange-100 rounded-3xl border-2 border-black">
					{/* Centre */}
					<div className="absolute top-[50%] left-[50%] w-[20%] h-[20%] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-yellow-100 border border-black flex flex-col items-center justify-center text-center text-xs font-bold">
						<img
							src="/Algobot.png"
							alt="Algobot"
							className="w-[40%] h-[40%] mb-1"
						/>
						<span>Arrivée</span>
					</div>

					{/* Lignes de liaison entre les cases */}
					<svg
						className="absolute top-0 left-0 w-full h-full pointer-events-none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Chemin du plateau de jeu</title>
						<defs>
							<marker
								id="arrow"
								markerWidth="6"
								markerHeight="6"
								refX="5"
								refY="3"
								orient="auto"
							>
								<path d="M0,0 L0,6 L6,3 Z" fill="black" />
							</marker>
						</defs>
						<line
							x1="10%"
							y1="48%"
							x2="22%"
							y2="16%"
							stroke="black"
							strokeWidth="2"
						/>
						<line
							x1="22%"
							y1="16%"
							x2="42%"
							y2="10%"
							stroke="black"
							strokeWidth="2"
						/>
						<line
							x1="42%"
							y1="10%"
							x2="82%"
							y2="24%"
							stroke="black"
							strokeWidth="2"
						/>
						<line
							x1="82%"
							y1="24%"
							x2="93%"
							y2="43%"
							stroke="black"
							strokeWidth="2"
						/>
						<line
							x1="93%"
							y1="43%"
							x2="85%"
							y2="85%"
							stroke="black"
							strokeWidth="2"
						/>
						<line
							x1="85%"
							y1="85%"
							x2="20%"
							y2="90%"
							stroke="black"
							strokeWidth="2"
						/>
						<line
							x1="20%"
							y1="90%"
							x2="10%"
							y2="68%"
							stroke="black"
							strokeWidth="2"
						/>
						<line
							x1="10%"
							y1="68%"
							x2="28%"
							y2="32%"
							stroke="black"
							strokeWidth="2"
						/>
						<line
							x1="28%"
							y1="32%"
							x2="78%"
							y2="40%"
							stroke="black"
							strokeWidth="2"
						/>
						<line
							x1="78%"
							y1="40%"
							x2="72%"
							y2="75%"
							stroke="black"
							strokeWidth="2"
						/>
						<line
							x1="65%"
							y1="70%"
							x2="50%"
							y2="60%"
							stroke="black"
							strokeWidth="2"
							markerEnd="url(#arrow)"
						/>
					</svg>

					{/* Cases positionnées proportionnellement */}
					<div className="absolute top-[48%] left-[0.5%] w-[15%] h-[8%] bg-purple-400 text-white rounded-md flex items-center justify-center font-bold border border-black">
						Départ
					</div>

					<div className="absolute top-[16%] left-[15%] w-[10%] h-[10%] bg-yellow-200 rotate-45 flex items-center justify-center font-bold border border-black">
						I
					</div>

					<div className="absolute top-[7%] left-[42%] w-[15%] h-[8%] bg-pink-200 rounded-xl flex items-center justify-center font-bold border border-black">
						II
					</div>

					<div className="absolute top-[19%] right-[12%] w-[12%] h-[12%] bg-green-200 rotate-45 flex items-center justify-center font-bold border border-black">
						III
					</div>

					<div className="absolute top-[43%] right-[1%] w-[15%] h-[8%] bg-purple-300 rounded-md flex items-center justify-center font-bold border border-black">
						IV
					</div>

					<div className="absolute bottom-[10%] right-[16%] w-[15%] h-[8%] bg-green-300 rounded-full flex items-center justify-center font-bold border border-black">
						V
					</div>

					<div className="absolute bottom-[6%] left-[18%] w-[10%] h-[10%] bg-yellow-200 rotate-45 flex items-center justify-center font-bold border border-black">
						VI
					</div>

					<div className="absolute bottom-[28%] left-[5%] w-[15%] h-[8%] bg-purple-400 rounded-md flex items-center justify-center font-bold border border-black">
						VII
					</div>

					<div className="absolute top-[30%] left-[25%] w-[12%] h-[12%] bg-pink-300 rotate-45 flex items-center justify-center font-bold border border-black">
						VIII
					</div>

					<div className="absolute top-[36.5%] right-[18%] w-[14%] h-[8%] bg-green-300 rounded-md flex items-center justify-center font-bold border border-black">
						IX
					</div>

					<div className="absolute bottom-[25%] right-[21%] w-[15%] h-[8%] bg-purple-300 rounded-md flex items-center justify-center font-bold border border-black">
						X
					</div>
				</div>

				<div className="mt-6 flex justify-center gap-6">
					<Button
						type="button"
						onClick={() => navigate("/")}
						variant="primary"
					>
						Accueil
					</Button>
					<Button
						type="button"
						variant="primary"
						
					>
						Début du tour
					</Button>
				</div>
			</div>
		</section>
	);
};

export default BoardGame;
