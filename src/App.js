import './App.css';
import { Home } from './Pages/Home';
import { Layout } from './Components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddPage } from './Pages/AddPage';
import { UpdatePage } from './Pages/UpdatePage';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="addUser" element={<AddPage />} />
						<Route path="updateUser/:id" element={<UpdatePage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
