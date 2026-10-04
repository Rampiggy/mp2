import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

const response = await axios.get(
	"https://jsonplaceholder.typicode.com/posts/1"
);

console.log(response.data);

export default function App() {
	return (
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<h1>One Piece Characters &lt;strawhat svg&gt;</h1>
		</BrowserRouter>
	);
}