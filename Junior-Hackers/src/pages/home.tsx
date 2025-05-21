

function Home() {
	return (
		<>
			<section>
				<div>
					<h1 className="flex justify-center text-[#fc752c] text-3xl">
						Junior Hackers
					</h1>
				</div>
				<div className="flex justify-center">
					<img className="w-40 h-40" src="/Algobot.png" alt="Algobot" />
				</div>
			</section>
			<section className="flex justify-around gap-4">
				<button className="border-2 rounded-sm p-2" type="button">
					Jouer Seul
				</button>
				<button className="border-2 rounded-sm p-2" type="button">
					Jouer à 2
				</button>
			</section>

		<section>


		</section>
		</>
	);
}

export default Home;
