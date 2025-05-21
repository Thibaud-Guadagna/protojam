import { useState } from "react";
import type { CaseId } from "../components/questionnaire";
import {
	getRandomQuestionFromCase,
	validateAnswer,
} from "../components/questionnaire";

interface QuestionBubbleProps {
	caseId: CaseId;
	onClose: () => void;
}

const QuestionBubble: React.FC<QuestionBubbleProps> = ({ caseId, onClose }) => {
	const [question] = useState(() => getRandomQuestionFromCase(caseId));
	const [selected, setSelected] = useState<string | null>(null);
	const [feedback, setFeedback] = useState<string | null>(null);
	const [explanation, setExplanation] = useState<string | null>(null);

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
		<div className="relative max-w-2xl mx-auto mt-10 p-6 bg-white border rounded-xl shadow-lg flex flex-col md:flex-row gap-6 animate-fade-in">
			{/* Image Algobot */}
			<img
				src="/Algobot_parle.png"
				alt="Algobot"
				className="w-28 h-28 object-contain self-center md:self-start"
			/>

			{/* Bulle question */}
			<div className="flex-1">
				<h2 className="text-lg font-semibold mb-4">{question.question}</h2>
				<div className="grid grid-cols-1 gap-2">
					{question.options.map((option: string) => (
						<button
							key={option}
							type="button"
							className={`w-full px-4 py-2 border rounded-lg text-left transition duration-200
                ${selected === option ? "bg-blue-200" : "hover:bg-gray-100"}`}
							onClick={() => handleAnswer(option)}
						>
							{option}
						</button>
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
							onClick={onClose}
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
