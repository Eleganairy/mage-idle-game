import { createRoot } from "react-dom/client";
import "./fonts.css";
import "./index.css";
import App from "./App.tsx";
import { GameLoopProvider } from "./features/gameloop/gameloop.provider.tsx";

createRoot(document.getElementById("root")!).render(
  <GameLoopProvider>
    <App />
  </GameLoopProvider>
);
