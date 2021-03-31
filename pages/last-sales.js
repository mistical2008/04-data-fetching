import {useState} from "react";
import {useEffect} from "react";

function SalesPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [sales, setSales] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://nextjs-test-c75bc-default-rtdb.europe-west1.firebasedatabase.app/sales.json")
      .then(response => response.json())
      .then(data => {
        const transformedData = [];
        for (let key in data) {
          transformedData.push({
            id: key,
            username: data[key].name,
            volume: data[key].volume,
          })
        }
        setIsLoading(false);
        setSales(transformedData);
        console.log(transformedData);
      })
  }, [])

  if (isLoading) return <p>Loading...</p>;

  if (!sales) return <p>Product not set</p>;

  return (
    <>
      {
        sales.map(sale => (
          <li key={sale.id}>{sale.username} - ${sale.volume}</li>
        ))
      }
    </>
  )
}

export default SalesPage;
