import { useState } from "react";
import "./App.css";
import quotes from "./db/quotes.json";
import { getElement } from "./utils/random";
import QuoteCard from "./components/QuoteCard";

const backgrounds = ["bg1", "bg2", "bg3", "bg4"];

function App() {
  const [quote, setQuote] = useState(getElement(quotes));
  const [currentBg, setCurrentBg] = useState(getElement(backgrounds));

  const handleChangeQuote = () => {
    setQuote(getElement(quotes))
    setCurrentBg(getElement(backgrounds))
  }

  return (
    <main className={`app ${currentBg}`}>
      <QuoteCard
        quote={quote}
        handleChangeQuote={handleChangeQuote}

      />
    </main>
  );
}

export default App;
