import './App.css'
import Home from "./components/Home"
import Receta1 from "./components/Receta1"
import Receta2 from "./components/Receta2"
import Receta3 from "./components/Receta3"

function App() {
	return (
		<>
			<Home />
			<h1 className='texto navbar'>Recetas</h1>
			<div>
				<Receta1 />
				<Receta2 />
				<Receta3 />
			</div>
		</>
	)
}

export default App
