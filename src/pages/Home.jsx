import Header from "../componentes/Header";
/*import {pizzas} from "../pizzas"*/
import CardPizza from "../componentes/CardPizza";
import { useEffect, useState } from "react";

function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error("Error fetching pizza data:", error);
      alert(`Error fetching pizza data: ${error.message}`)
    }
  };
  return (
    <>
      <Header
        titulo="¡Pizzería Mamma Mía!"
        descripcion="¡Tenemos las mejores pizzas que podrás encontrar!"
      />
      <main className="pizzas">
        {pizzas.map((pizza) => (
          <div key={pizza.id}>
            <CardPizza
              imagen={pizza.img}
              nombre={pizza.name}
              ingredientes={pizza.ingredients}
              precio={pizza.price}
            />
          </div>
        ))}
      </main>
    </>
  );
}

export default Home;
