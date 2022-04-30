
import './App.css';
import { Link } from "react-router-dom";

function App() {


  return (
    <div className='content'>
      <h1>NASA API</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/APOD">Astronomy picture of the day</Link> |{"  "}
        <Link to="/MRP">Mars Rover Photos</Link>
      </nav>
    </div>
  )};
export default App


