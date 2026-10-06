import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Components/App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CharacterComponent from "./Components/CharacterComponent.tsx";

const router = createBrowserRouter(
	[
		{
			index: true,
			Component: App,
		},
		{
			path: "/characters/:characterId",
			loader: ({ params }) => {
				const characterId = params.characterId;
				return { characterId: characterId };
			},
			Component: CharacterComponent,
		},
	],
	{ basename: import.meta.env.BASE_URL },
);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
