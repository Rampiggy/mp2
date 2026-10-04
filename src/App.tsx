import { BrowserRouter } from "react-router-dom";
import axios from "axios";

const response = await axios.get(
	"https://jsonplaceholder.typicode.com/posts/1",
);

const testResponse: TestResponse = response.data;
console.log(testResponse);

export default function App() {
	return (
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<h1>One Piece Characters &lt;strawhat svg&gt;</h1>
			<ul>
				<li>{testResponse.userId}</li>
				<li>{testResponse.title}</li>
				<li>{testResponse.body}</li>
			</ul>
		</BrowserRouter>
	);
}

interface TestResponse {
	userId: number;
	title: string;
	body: string;
}
