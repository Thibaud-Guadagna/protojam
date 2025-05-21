import { useState } from "react";
import Button from "./ui/button";

interface ModalProps {
	title: string;
	children: React.ReactNode;
	onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, children, onClose }) => (
	<div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
		<div className="bg-[#ffd8a8] rounded shadow-lg max-w-md w-full p-6">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-xl font-semibold">{title}</h2>
				<button
					type="button"
					onClick={onClose}
					className="text-gray-500 hover:text-gray-700"
				>
					&times;
				</button>
			</div>
			<div className="mb-4">{children}</div>
			<div className="text-right">
				<Button type="button" variant="primary" onClick={onClose}>
					Fermer
				</Button>
			</div>
		</div>
	</div>
);

const ModalExample: React.FC = () => {
	const [isModalAOpen, setModalAOpen] = useState(false);
	const [isModalBOpen, setModalBOpen] = useState(false);

	return (
		<div className="flex justify-around p-4 space-x-2 mt-20 md: mt-30">
			<Button
				type="button"
				variant="primary"
				onClick={() => setModalAOpen(true)}
			>
				Regles du jeu
			</Button>
			<Button
				type="button"
				variant="primary"
				onClick={() => setModalBOpen(true)}
			>
				A propos
			</Button>

			{isModalAOpen && (
				<Modal title="Règles du jeu" onClose={() => setModalAOpen(false)}>
					<p>
						🚀 Depuis la <strong>ligne de départ</strong>, tu devras répondre à
						des questions sur
						<strong> l'informatique </strong> et <strong> le code</strong>. Plus
						tu avances, plus les questions deviennent <strong>coriaces</strong>{" "}
						!
					</p>

					<p>
						✅ Chaque <strong>bonne réponse</strong> te fait avancer d’
						<strong>une case</strong>. ❌ Deux{" "}
						<strong>mauvaises réponses</strong> d'affilée, et tu{" "}
						<strong>recule</strong> d’une case.
					</p>

					<p>
						🎯 Ton objectif ? Rejoindre <strong>Algobot</strong>, le petit robot
						rigolo au <strong>centre du plateau</strong>. C’est lui, le{" "}
						<strong>boss final</strong> du jeu !
					</p>

					<p>
						👥 Tu peux aussi <strong>défier un ami</strong> ou un membre de ta
						famille : le plus rapide à rejoindre <strong>Algobot</strong>{" "}
						remporte la partie ! 🏆
					</p>
				</Modal>
			)}

			{isModalBOpen && (
				<Modal title="À propos" onClose={() => setModalBOpen(false)}>
					<p>
						🎮 <strong>Junior Hackers</strong> est un petit jeu d’initiation au
						code, imaginé lors d’un <strong>protojam</strong> (un hackathon
						créatif) par une équipe de joyeux apprenants de la{" "}
						<strong>Wild Code School</strong> :
					</p>

					<ul className="list-disc list-inside pl-4">
						<li>Thibaud</li>
						<li>Bamba</li>
						<li>Eulalie</li>
						<li>David</li>
					</ul>

					<p>
						💡 <strong>L’idée</strong> ? Créer un jeu ludique pour faire
						découvrir les bases de la programmation, en s’amusant.
					</p>

					<p>
						🛠️ Ce projet a été réalisé avec <strong>React</strong>,{" "}
						<strong>TypeScript</strong> et <strong>Tailwind CSS</strong>.
					</p>

					<p>
						On espère que vous prendrez autant de plaisir à y jouer qu’on en a
						eu à le créer !
					</p>
				</Modal>
			)}
		</div>
	);
};

export default ModalExample;
