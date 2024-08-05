import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";



function Home() {
  return (
    <>
      <Header
        titulo="¡Pizzería Mamma Mía!"
        descripcion="¡Tenemos las mejores pizzas que podrás encontrar!"
      />
      <main className="pizzas">
      <CardPizza
        img= "https://images.stockcake.com/public/a/3/e/a3e24ca5-8453-4855-b5a6-68f52efdec21_large/delicious-pepperoni-pizza-stockcake.jpg"
        nombre="Pepperoni"
        precio={6950}
        ingredientes= {["mozarella ", "aceitunas ", "morrones" ]}
      />
      <CardPizza
        img= "https://images.stockcake.com/public/2/e/3/2e3e5370-f8db-40eb-9148-31389f0d55aa_large/margherita-pizza-feast-stockcake.jpg"
        nombre="Margarita"
        precio={5350}
        ingredientes= {["Albahaca ", "Mozarella ", "Tomate" ]}
      />
      <CardPizza
        img= "https://images.stockcake.com/public/a/4/3/a4300db7-4756-49a6-b684-5315813d2ca8_large/smoked-salmon-pizza-stockcake.jpg"
        nombre="Salmón Ahumado"
        precio={7500}
        ingredientes= {["Salmón", "Queso", "Hierbas" ]}
      
      />
      
      
      </main>
    </>
  );
}

export default Home;
