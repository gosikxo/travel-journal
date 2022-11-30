import { Header } from "./components/Header";
import { TravelCard } from "./components/TravelCard";
import data from "./data";


function App () {
  const cards = data.map((el => {
    return <TravelCard
      key={el.id}
      {...el}
    />
  }))
  return (
    <div className="App">
      <Header />
      <div className="cardsList">
        {cards}
      </div>
    </div>
  );
}

export default App;
