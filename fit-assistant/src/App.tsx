import { useEffect, useState } from "react";
import "./App.css";
import AppRouter from "./router/Router";

function App() {
  useEffect(() => {
    document.title = "FitAssistant";
  }, []);
  return <AppRouter />;
}

export default App;
