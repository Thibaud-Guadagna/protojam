import type { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	/** Variantes de style du bouton */
	variant?: "primary" | "secondary" | "danger";
}

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
	primary: "bg-[#d0bfff] hover:bg-blue-600 border-2 rounded-sm p-2",
	secondary:
		"bg-[#ffedbb] hover:bg-gray-300 text-gray-800 border-2 rounded-sm p-2",
	danger: "bg-red-500 hover:bg-red-600 text-white border-2 rounded-sm p-2",
};

const Button: FC<ButtonProps> = ({
	variant = "primary",
	disabled = false,
	className = "",
	children,
	...props
}) => {
	const baseClasses = "inline-block px-4 py-2 rounded";
	const appliedVariant = variantClasses[variant];
	const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

	return (
		<button
			className={[baseClasses, appliedVariant, disabledClasses, className]
				.filter(Boolean)
				.join(" ")}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
