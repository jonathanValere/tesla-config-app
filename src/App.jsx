import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section/Section";

function App() {
  return (
    <>
      <Header title="Tesla config" />
      <Section
        subtitle="Sélectionnez votre véhicule"
        description="Grande autonomie"
        price="90 700"
      />
    </>
  );
}

export default App;
