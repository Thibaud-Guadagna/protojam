import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./ui/button";
import QuestionBubble from "./questionBubble";
import type { CaseId } from "./questionnaire";

const BoardDualGame = () => {
	const navigate = useNavigate();

	// État du jeu
	const [positionP1, setPositionP1] = useState(0); // index du pion1
	const [positionP2, setPositionP2] = useState(0); // index du pion2
	const [failCountP1, setFailCountP1] = useState(0); // nbr d'erreur du joueur 1
	const [failCountP2, setFailCountP2] = useState(0); // nbr d'erreur du joueur 2
	const [showQuestion, setShowQuestion] = useState(false); // visibilité question
	const [isClosing, setIsClosing] = useState(false);
	const [currentPlayer, setCurrentPlayer] = useState<1 | 2 | null>(null);
	const [askedQuestions, setAskedQuestions] = useState<string[]>([]);

	const startTurn = () => {
		setCurrentPlayer(1);
		setShowQuestion(true);
	};

	// Gestion fermeture questionnaire
	const handleCloseBubble = (wasCorrect: boolean) => {
		setIsClosing(true);

		setTimeout(() => {
			setShowQuestion(false);
			setIsClosing(false);

			// Appliquer la réponse au bon joueur
			handleAnswer(wasCorrect);

			if (currentPlayer === 1) {
				// Ensuite on lance la question du joueur 2
				setTimeout(() => {
					setCurrentPlayer(2);
					setShowQuestion(true);
				}, 500); // petit délai pour lisibilité
			} else {
				// Fin du tour
				setCurrentPlayer(null);
			}
		}, 300);
	};
	// Sauvegarde dans le localStorage
	useEffect(() => {
		const savedP1 = localStorage.getItem("pionPositionP1");
		const savedP2 = localStorage.getItem("pionPositionP2");

		if (savedP1) setPositionP1(Number(savedP1));
		if (savedP2) setPositionP2(Number(savedP2));
	}, []);

	useEffect(() => {
		localStorage.setItem("pionPositionP1", positionP1.toString());
		localStorage.setItem("pionPositionP2", positionP2.toString());
	}, [positionP1, positionP2]);

	// Cases et coordonnées CSS
	const cases: CaseId[] = [
		"Départ",
		"I",
		"II",
		"III",
		"IV",
		"V",
		"VI",
		"VII",
		"VIII",
		"IX",
		"X",
		"Arrivée",
	];

	const casePositions = [
		{ top: "26%", left: "-8%" }, // Départ
		{ top: "-5%", left: "4%" }, // I
		{ top: "-15%", left: "34%" }, // II
		{ top: "-3%", left: "67%" }, // III
		{ top: "20%", left: "76%" }, // IV
		{ top: "60%", left: "61%" }, // V
		{ top: "62%", left: "7%" }, // VI
		{ top: "43%", left: "-3%" }, // VII
		{ top: "10%", left: "15.5%" }, // VIII
		{ top: "15%", left: "59.5%" }, // IX
		{ top: "45%", left: "56%" }, // X
		{ top: "30%", left: "32%" }, // Arrivée
	];

	// Gestion de la réponse
	const handleAnswer = (isCorrect: boolean) => {
		if (currentPlayer === 1) {
			let newPos = positionP1;

			if (isCorrect) {
				newPos = Math.min(positionP1 + 1, LAST_CASE);
				setFailCountP1(0);
			} else {
				if (failCountP1 === 0) {
					setFailCountP1(1);
				} else {
					newPos = Math.max(positionP1 - 1, 0);
					setFailCountP1(0);
				}
			}

			setPositionP1(newPos);
			if (newPos === LAST_CASE) setGameOver(true);
		} else {
			let newPos = positionP2;

			if (isCorrect) {
				newPos = Math.min(positionP2 + 1, LAST_CASE);
				setFailCountP2(0);
			} else {
				if (failCountP2 === 0) {
					setFailCountP2(1);
				} else {
					newPos = Math.max(positionP2 - 1, 0);
					setFailCountP2(0);
				}
			}

			setPositionP2(newPos);
			if (newPos === LAST_CASE) {
				setGameOver(true);
				return; // ⛔ stop ici aussi
			}
		}

		// Change de joueur
		setCurrentPlayer((prev) => (prev === 1 ? 2 : 1));
	};

	// Gestion fin de partie
	const LAST_CASE = 11; // ou casePositions.length - 1

	const [gameOver, setGameOver] = useState(false);

	return (
		<section className="flex flex-col items-center justify-center min-h-screen">
			<h1>DUAL GAME</h1>
			<div className="p-8">
				{/* Plateau */}
				<div className="relative w-[90vw] max-w-[600px] xl:w-[90vw] xl:max-w-[900px] aspect-square bg-orange-100 rounded-3xl border-2 border-black">
					{/* Pion dynamique */}
					<img
						src="/pionYavuz.png"
						alt="Pion"
						className="absolute w-[40%] h-[40%] transition-all duration-500 z-10"
						style={casePositions[positionP1]}
					/>
					<img
						src="/pionNicolas.png"
						alt="Pion"
						className="absolute w-[40%] h-[40%] transition-all duration-500 z-10"
						style={{
							...casePositions[positionP2],
							top: `calc(${casePositions[positionP2].top} - 4%)`,
							left: `calc(${casePositions[positionP2].left} - 8%)`,
						}}
					/>

					{/* Arrivée */}
					<div className="absolute top-[50%] left-[50%] w-[20%] h-[20%] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-yellow-100 border border-black flex flex-col items-center justify-center text-center text-xs font-bold">
						<img
							src="/Algobot.png"
							alt="Algobot"
							className="w-[40%] h-[40%] mb-1"
						/>
						<span>Arrivée</span>
					</div>

					{/* Lignes entre les cases */}

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
					{/* Cases fixes */}
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

				{/* Boutons */}
				<div className="mt-6 flex justify-center gap-6">
					<Button
						onClick={() => {
							navigate("/");
							localStorage.clear();
						}}
						variant="primary"
					>
						Accueil
					</Button>
					<Button onClick={startTurn} variant="primary" disabled={gameOver}>
						Début du tour
					</Button>
				</div>

				{/* Question (affichée quand showQuestion = true) */}
				{showQuestion && currentPlayer && (
					<div
						className={`fixed inset-0 bg-black/80 flex items-center justify-center z-50
	transition-all duration-500 ease-in-out transform
	${showQuestion && currentPlayer ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-10 pointer-events-none"}`}
					>
						<QuestionBubble
							caseId={
								currentPlayer === 1 ? cases[positionP1] : cases[positionP2]
							}
							onClose={handleCloseBubble}
							onResult={handleAnswer}
							playerName={currentPlayer === 1 ? "player1" : "player 2"}
							excludeIds={askedQuestions}
							isClosing={isClosing}
							onQuestionUsed={(id) =>
								setAskedQuestions((prev) => [...prev, id])
							}
						/>
					</div>
				)}

				{gameOver && (
					<div className="mt-8 text-center text-2xl font-bold text-green-600 animate-pulse">
						🎉 Félicitations ! Tu as terminé le jeu !
						<br />
						<button
							type="button"
							onClick={() => {
								setFailCountP1(0);
								setFailCountP2(0);
								setPositionP1(0);
								setPositionP2(0);
								setGameOver(false);
								localStorage.removeItem("pionPositionP1");
								localStorage.removeItem("pionPositionP2");
							}}
							className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
						>
							Rejouer
						</button>
					</div>
				)}
			</div>
		</section>
	);
};

export default BoardDualGame;
