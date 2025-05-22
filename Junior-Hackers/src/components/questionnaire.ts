import questionsData from "../data/question2.json";

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

export interface Question {
	id: string; // ✅ Ajoute cette ligne
	question: string;
	options: string[];
	answer: string;
	explanation: string;
}

export function getRandomQuestionFromCase(
	caseId: CaseId,
	excludeIds: string[] = [],
): Question | null {
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
		console.error(`Catégorie "${category}" introuvable`);
		return null;
	}

	// ✅ Exclure les questions déjà posées
	const filteredQuestions = categoryBlock.questions.filter(
		(q) => !excludeIds.includes(q.id),
	);

	if (filteredQuestions.length === 0) {
		console.warn(
			`Toutes les questions de la catégorie "${category}" ont déjà été posées.`,
		);
		return null;
	}

	const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
	return filteredQuestions[randomIndex];
}
export function validateAnswer(question: Question, selectedAnswer: string) {
	const isCorrect = question.answer === selectedAnswer;
	return {
		isCorrect,
		explanation: isCorrect ? null : question.explanation,
	};
}
