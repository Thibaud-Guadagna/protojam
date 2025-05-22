import Home from "./pages/home";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<section>
				<Outlet />
			</section>
		</>
	);
}

export default App;
