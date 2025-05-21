interface AnimatedTitleProps {
	text: string;
}

const AnimatedTitle = ({ text }: AnimatedTitleProps) => {
	return (
		<h1 className="flex justify-center gap-[2px] text-[#fc752c] text-3xl font-bold mt-10 md:mt-20">
			{[...text].map((char, i) => {
				const key = `${char}-${i}`; // Combine char + index for a more stable key
				return (
					<span
						key={key}
						className="inline-block transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:rotate-3"
					>
						{char === " " ? "\u00A0" : char}
					</span>
				);
			})}
		</h1>
	);
};

export default AnimatedTitle;
