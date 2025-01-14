import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {

      const apiUrl = `/api/people`;

      try {
        const response = await fetch(apiUrl);
        // console.log(response);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="App">
      <h1>Backend Data</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App
