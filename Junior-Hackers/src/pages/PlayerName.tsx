import { useNavigate } from "react-router-dom";
import Button from "../components/ui/button";

function PlayerName() {
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const player1 = form.player1.value.trim();
		const player2 = form.player2.value.trim();

		if (player1 && player2 && player1 !== player2) {
			// Enregistre les noms dans le localStorage
			localStorage.setItem("player1", player1);
			localStorage.setItem("player2", player2);

			// Redirection vers le jeu
			navigate("/DualGame");
		}
	};

	return (
		<main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br bg-[#d0bfff]">
			<form
				onSubmit={handleSubmit}
				className="bg-[#ffedbb] p-8 rounded-2xl shadow-lg space-y-6 w-full max-w-sm"
			>
				<h2 className="text-2xl font-bold text-center text-gray-800">
					Entrer les noms des joueurs
				</h2>

				<input
					name="player1"
					type="text"
					placeholder="Nom du Joueur 1"
					className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
					required
				/>

				<input
					name="player2"
					type="text"
					placeholder="Nom du Joueur 2"
					className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
					required
				/>

				<Button
					variant="primary"
					type="submit"
					className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition"
				>
					Lancer le jeu
				</Button>
			</form>
		</main>
	);
}
export default PlayerName;
