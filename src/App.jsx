import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section/Section";

function App() {
  const [amount, setAmount] = useState(0);
  const [amount1, setAmount1] = useState(0);

  return (
    <>
      <Header title="Tesla config" />
      <Section
        subtitle="Sélectionnez votre véhicule"
        setAmount={setAmount}
        price1={90700}
        price2={106700}
        description1="Grande autonomie"
        description2="Performance"
      />
      <Section
        subtitle="Sélectionnez la couleur"
        setAmount={setAmount1}
        price1={0}
        price2={1000}
        description1="Blanc nacré multicouches"
        description2="Noir uni"
      />
      <section className="container total">
        <p>{amount + amount1} €</p>
        <button
          onClick={() => {
            alert("Thanks for clicking !");
          }}
        >
          Buy !
        </button>
      </section>
    </>
  );
}

export default App;
