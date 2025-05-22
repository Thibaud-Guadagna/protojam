import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router";
import Home from "./pages/home.tsx";
import Game from "./pages/game.tsx";


const router = createBrowserRouter([
	{
		element: <App />,

		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/Game",
				element: <Game />,
			},
		],
	},
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
	throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
