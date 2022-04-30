import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Mrp() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState(new Date());
  const parsedDate = `${date.getFullYear()}-${date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`}-${date.getDate()}`;

  const getPicturesFromAPI = (parsedDate) => {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?&api_key=b2OLZO0xuQlVEmSc1g2E9Wzv1k8zSypsYZUfkkc8&earth_date=${parsedDate}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getPicturesFromAPI(parsedDate)
  }, []);

  return (
    <div className="content">
    <Link to="/">ACCEUIL</Link> 
      <h1>Chercher des photos par date</h1>
      <form>
        <label>
          Date :
          <input type="date" value={parsedDate} onChange={(e) => setDate(new Date(e.target.value))} />
          <button
            value="valider"
            onClick={(e) => {
              e.preventDefault()
              getPicturesFromAPI(parsedDate)
            }}
          >
            Rechercher
          </button>
        </label>
      </form>
      {data?.photos?.map(data =>
        <img src={data.img_src} alt="" />
      )}
    </div>
  );
}

export default Mrp;
