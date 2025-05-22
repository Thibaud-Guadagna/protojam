import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Button from "../components/ui/button";

function Contact() {
	const formRef = useRef<HTMLFormElement>(null);
	const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!formRef.current) return;

		emailjs
			.sendForm(
				"service_2n3sed2",
				"template_5wqvdza",
				formRef.current,
				"jCPoF2633VmzeJZ9_",
			)
			.then(() => {
				setStatus("success");
				formRef.current?.reset();

				// 🔁 Redirection après 3 secondes
				setTimeout(() => {
					navigate("/");
				}, 3000);
			})
			.catch((error: unknown) => {
				setStatus("error");
				console.error(error);
			});
	};

	return (
		<main className="min-h-screen flex items-center justify-center bg-[#d0bfff]">
			<form
				ref={formRef}
				onSubmit={handleSubmit}
				className="bg-[#ffedbb] p-8 rounded-2xl shadow-md w-full max-w-md space-y-6"
			>
				<h2 className="text-2xl font-bold text-center text-gray-800">
					Contactez-nous
				</h2>

				<input
					name="firstname"
					type="text"
					placeholder="Votre prénom"
					className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
					required
				/>
				<input
					name="name"
					type="text"
					placeholder="Votre nom"
					className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
					required
				/>
				<input
					name="email"
					type="email"
					placeholder="Votre email"
					className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
					required
				/>
				<textarea
					name="message"
					placeholder="Votre message"
					rows={5}
					className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
					required
				/>

				{status === "success" && (
					<p className="text-green-600 text-center">✅ Message envoyé !</p>
				)}
				{status === "error" && (
					<p className="text-red-600 text-center">❌ Erreur lors de l’envoi.</p>
				)}

				<Button
					variant="primary"
					type="submit"
					className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition"
				>
					Envoyer
				</Button>
			</form>
		</main>
	);
}

export default Contact;
