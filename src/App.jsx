import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section/Section";

function App() {
  const [total, setTotal] = useState(0);

  const sum = () => {
    useState(total + 2);
  };
  return (
    <>
      <Header title="Tesla config" />
      <Section
        subtitle="Sélectionnez votre véhicule"
        number={total}
        calcul={sum}
      />
      <section className="container">{total}</section>
    </>
  );
}

export default App;
