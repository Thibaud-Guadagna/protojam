import { useState, useEffect } from "react";
import type { CaseId } from "../components/questionnaire";
import {
	getRandomQuestionFromCase,
	validateAnswer,
} from "../components/questionnaire";
import Button from "./ui/button";
import PlayerName from "../pages/PlayerName";

interface QuestionBubbleProps {
	caseId: CaseId;
	onClose: (wasCorrect: boolean) => void;
	onResult?: (isCorrect: boolean) => void;
	playerName?: string;
	excludeIds?: string[];
	onQuestionUsed?: (id: string) => void;
	isClosing?: boolean;
}

const name1 = localStorage.getItem("player1") ?? "Joueur 1";
const name2 = localStorage.getItem("player2") ?? "Joueur 2";

const QuestionBubble: React.FC<QuestionBubbleProps> = ({
	caseId,
	onClose,
	onResult,
	playerName,
	excludeIds,
	onQuestionUsed,
	isClosing,
}) => {
	const [question] = useState(() => {
		const q = getRandomQuestionFromCase(caseId, excludeIds);
		if (q && onQuestionUsed) {
			onQuestionUsed(q.id); // ✅ enregistre dès le tirage
		}
		return q;
	});
	const activeName = playerName === "player1" ? name1 : name2;
	const [selected, setSelected] = useState<string | null>(null);
	const [feedback, setFeedback] = useState<string | null>(null);
	const [explanation, setExplanation] = useState<string | null>(null);
	const [wasCorrect] = useState<boolean | null>(null);
	const [appear, setAppear] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setAppear(true);
		}, 10); // trigger après le premier render
		return () => clearTimeout(timeout);
	}, []);

	if (!question) return <p>Question introuvable.</p>;

	const handleAnswer = (option: string): void => {
		if (selected) return;
		setSelected(option);
		const result = validateAnswer(question, option);
		if (result.isCorrect) {
			setFeedback("🎉 Bravo, bonne réponse !");
		} else {
			setFeedback("❌ Mauvaise réponse...");
			setExplanation(result.explanation);
		}
	};

	return (
		<div
			className={`relative max-w-2xl mx-auto mt-10 p-6 bg-[#ffd8a8] border rounded-xl shadow-lg flex flex-col md:flex-row gap-6 transition-all duration-500 ease-out transform
${appear && !isClosing ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
		>
			<div>
				{/* Image Algobot */}
				<img
					src="/Algobot_parle.png"
					alt="Algobot"
					className="w-28 h-28 object-contain self-center md:self-start ml-11 mb-10"
				/>
				<p className="text-xl text-center font-semibold mt-2">
					{activeName}, à toi de jouer !
				</p>
			</div>

			{/* Bulle question */}
			<div className="flex-1 ">
				<h2 className="text-lg font-semibold mb-4">{question.question}</h2>
				<div className="grid grid-cols-1 gap-2">
					{question.options.map((option: string) => (
						<Button
							key={option}
							type="button"
							variant="secondary"
							className={`w-full px-4 py-2 border rounded-lg text-left transition duration-200
                ${selected === option ? "bg-blue-200" : "hover:bg-gray-100"}`}
							onClick={() => handleAnswer(option)}
						>
							{option}
						</Button>
					))}
				</div>

				{feedback && (
					<div className="mt-4">
						<p className="font-semibold text-lg">{feedback}</p>
						{explanation && (
							<p className="mt-2 text-sm text-gray-600">💡 {explanation}</p>
						)}

						<button
							type="button"
							className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
							onClick={() => {
								if (wasCorrect !== null && onResult) {
									onResult(wasCorrect); // ✅ déclenche le traitement réel
								}
								onClose(feedback?.includes("Bravo") ?? false); // fermeture de la bulle
							}}
						>
							Continuer
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default QuestionBubble;
