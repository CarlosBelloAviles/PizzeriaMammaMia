import { pizzaCart } from "../pizzas";
import Cart from "./Cart";
import { useEffect, useState } from "react";

const CartGrilla = () => {
  const [pizzaList, setPizzaList] = useState(pizzaCart);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getTotal();
  }, [pizzaList]);

  const incrementHandle = (i) => {
    setPizzaList(
      pizzaList.map((pizza) =>
        pizza.id === i ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };

  const decrementHandle = (i) => {
    setPizzaList(
      pizzaList
        .map((pizza) =>
          pizza.id === i && pizza.count > 0
            ? { ...pizza, count: pizza.count - 1 }
            : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };
  const getTotal = () => {
    const totalPizza = pizzaList.reduce(
      (acc, pizza) => acc + pizza.price * pizza.count,
      0
    );
    setTotal(totalPizza);
  };

  return (
    <>
      {pizzaList.length === 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "greenyellow",
            height: "100vh",
          }}
        >
          <h1>Carrito de compras</h1>
          <div
            style={{ backgroundColor: "red", textAlign: "center", width: 350 }}
          >
            <p>El Carrito esta Vacío</p>
          </div>
        </div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
              padding: 10,
              backgroundColor: "greenyellow",
            }}
          >
            <h1>Carrito de compras</h1>
            <h2>Total: ${total}</h2>
            <div style={{ display: "flex", gap: 12 }}>
              {pizzaList.map((cartPizza) => (
                <Cart
                  key={cartPizza.id}
                  producto={cartPizza}
                  increment={incrementHandle}
                  decrement={decrementHandle}
                />
              ))}
              ;
            </div>
            <div>
              <button>Comprar</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CartGrilla;
