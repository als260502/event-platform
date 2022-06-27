import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscripe } from "./pages/Subscripe";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscripe />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
}
