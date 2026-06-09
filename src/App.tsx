import { useReveal } from "./hooks/useReveal";
import { Home } from "./pages/Home";

export default function App() {
  useReveal();
  return <Home />;
}
