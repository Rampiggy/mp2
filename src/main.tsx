import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Components/App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterComponent from "./Components/CharacterComponent.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<Routes>
				<Route index element={<App />} />
				<Route
					path="/characters/:characterId"
					element={<CharacterComponent characterId={"yo"} />}
				/>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
