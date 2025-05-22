import ModalExample from "../components/modal";
import AnimatedTitle from "../components/animatedTitle";
import AlgobotWithSpeech from "../components/AlgobotWhiteSpeech";
import FloatingElements from "../components/floatingElements";
import { useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();
	return (
		<main className="min-h-screen flex flex-col  justify-center text-center px-4">
			<FloatingElements />

			<header>
				<div>
					<AnimatedTitle text="Junior Hackers" />
				</div>
				<div>
					<AlgobotWithSpeech />
				</div>
			</header>
			<section className="flex justify-around gap-4 mt-10 md:mt-20">
				<button
					type="button"
					onClick={() => navigate("/Game")}
					className="border-2 border-gray-800 text-gray-800 font-semibold rounded-sm px-4 py-2
             transition-transform duration-150 ease-in-out
             hover:-translate-y-1 hover:shadow-md hover:border-gray-900 hover:text-gray-900
             active:scale-95"
				>
					Jouer Seul
				</button>

				<button
					type="button"
					className="border-2 border-gray-800 text-gray-800 font-semibold rounded-sm px-4 py-2
             transition-transform duration-150 ease-in-out
             hover:-translate-y-1 hover:shadow-md hover:border-gray-900 hover:text-gray-900
             active:scale-95"
				>
					Jouer à 2
				</button>
			</section>

			<section>
				<ModalExample />
			</section>

			<footer className="flex flex-col justify-center mb-5">
				<p className="text-center text-sm text-gray-500 mt-4 md:mt-8">
					© {new Date().getFullYear()} Junior Hackers – Tous droits réservés ·{" "}
				</p>
				<p>
					<a href="/contact" className="text-blue-500 hover:underline">
						Contact
					</a>
				</p>
			</footer>
		</main>
	);
}

export default Home;
