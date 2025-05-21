import questionsData from "../data/question.json";

export type CaseId =
	| "Départ"
	| "I"
	| "II"
	| "III"
	| "IV"
	| "V"
	| "VI"
	| "VII"
	| "VIII"
	| "IX"
	| "X"
	| "Arrivée";

interface Question {
	question: string;
	options: string[];
	answer: string;
	explanation: string;
}

export function getRandomQuestionFromCase(caseId: CaseId): Question | null {
	let category = "";

	if (caseId === "Départ" || caseId === "I") category = "Informatique";
	else if (["II", "III"].includes(caseId)) category = "HTML";
	else if (["IV", "V"].includes(caseId)) category = "CSS";
	else if (["VI", "VII", "VIII"].includes(caseId)) category = "JavaScript";
	else if (["IX", "X", "Arrivée"].includes(caseId)) category = "SQL";

	const categoryBlock = questionsData.categories.find(
		(cat) => cat.name === category,
	);

	if (!categoryBlock) {
		console.error(`Catégorie \"${category}\" introuvable`);
		return null;
	}

	const randomIndex = Math.floor(
		Math.random() * categoryBlock.questions.length,
	);
	return categoryBlock.questions[randomIndex];
}

export function validateAnswer(question: Question, selectedAnswer: string) {
	const isCorrect = question.answer === selectedAnswer;
	return {
		isCorrect,
		explanation: isCorrect ? null : question.explanation,
	};
}
