import React, {useState} from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Cards from "./Cards";
import HogFilter from "./HogFilter";


function App() {
	const [filteredHogs, setFilteredHogs] = useState('All')
	
	const hogsToDisplay = hogs.filter(hog => String(hog.greased) == filteredHogs)


	
	return (
		<div className="App">
			<Nav> 
				<HogFilter setFilteredHogs={setFilteredHogs} filteredHogs={filteredHogs}/>
			</Nav>
			<Cards hogs={filteredHogs == 'All' ? hogs : hogsToDisplay}/>
		</div>
	);
}

export default App;
