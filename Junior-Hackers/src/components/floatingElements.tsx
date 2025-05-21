const FloatingElements = () => {
	return (
		<>
			<span className="hidden md:block absolute left-10 top-10 text-4xl text-orange-400 animate-bounce-slow pointer-events-none select-none">
				{"<>"}
			</span>
			<span className="hidden md:block absolute right-16 top-24 text-3xl text-blue-400 animate-float pointer-events-none select-none">
				{"{ }"}
			</span>
			<span className="hidden md:block absolute left-24 bottom-16 text-4xl text-green-400 animate-wiggle pointer-events-none select-none">
				{"</>"}
			</span>
			<span className="hidden md:block absolute right-10 bottom-10 text-2xl text-purple-400 animate-pulse pointer-events-none select-none">
				function()
			</span>

			<span className="hidden md:block absolute top-1/2 left-4 text-3xl text-pink-500 animate-float pointer-events-none select-none">
				while(true)
			</span>
			<span className="hidden md:block absolute bottom-1/2 right-6 text-4xl text-yellow-500 animate-wiggle pointer-events-none select-none">
				return
			</span>
			<span className="hidden md:block absolute top-10 left-1/2 text-2xl text-red-500 animate-ping pointer-events-none select-none">
				{"&&"}
			</span>
			<span className="hidden md:block absolute bottom-8 left-1/3 text-3xl text-indigo-500 animate-bounce-slow pointer-events-none select-none">
				{"!=="}
			</span>
			<span className="hidden md:block absolute top-16 right-1/4 text-3xl text-emerald-500 animate-float pointer-events-none select-none">
				{"let"}
			</span>
			<span className="hidden md:block absolute bottom-24 right-1/2 text-4xl text-cyan-500 animate-wiggle pointer-events-none select-none">
				console.log()
			</span>
		</>
	);
};

export default FloatingElements;
