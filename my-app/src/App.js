import logo from './logo.svg';
import './App.css';
import Box from './components/Box.js';
import Navbar from './components/Navbar.js';
import data from './data.js';

function App() {
  const itemArray = data.map((item) => {
    return (
      <Box 
      title = {item.title}
        location = {item.location}
        googleMapsUrl = {item.googleMapsUrl}
        startDate = {item.startDate}
        endDate = {item.endDate} 
        detail = {item.detail}
        img = {item.img}
        />
    )
  })
  return (
    <div className="App">
      <Navbar/>
      {itemArray}
    </div>
  );
}

export default App;
