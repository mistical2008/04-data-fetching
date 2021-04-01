import {useState} from "react";
import {useEffect} from "react";
import useSWR from 'swr';

function SalesPage() {
  // const [isLoading, setIsLoading] = useState(false);
  const [sales, setSales] = useState([]);
  const {data, error} = useSWR("https://nextjs-test-c75bc-default-rtdb.europe-west1.firebasedatabase.app/sales.json");

  useEffect(() => {
    const transformedData = [];
    for (let key in data) {
      transformedData.push({
        id: key,
        username: data[key].name,
        volume: data[key].volume,
      })
    }
    setSales(transformedData);
  }, [data])

  if (error) return <p>{error}</p>;

  if (!data || !sales) return <p>Loading...</p>;

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
