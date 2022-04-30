import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Apod() {

    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('https://api.nasa.gov/planetary/apod?api_key=b2OLZO0xuQlVEmSc1g2E9Wzv1k8zSypsYZUfkkc8')
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    return (
      <div className='content'>
          <Link to="/">ACCEUIL</Link>
          <h1>NASA</h1>
          <h2>Astronomy Picture of the Day</h2>
          {data.title}
          <img src={data.url} className="img" alt="APOD"/> 
          <p>{data.explanation}</p>
          <span>{data.date}</span>
          {data.copyright}
      </div>
    );
}

export default Apod