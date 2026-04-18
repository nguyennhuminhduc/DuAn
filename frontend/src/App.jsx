import { useState } from "react";
import TopBar from "./components/TopBar";
import PlayerStats from "./components/RightPanel/PlayerStats";

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  return (
    <>
      <TopBar setSelectedPlayer={setSelectedPlayer} />
      <PlayerStats player={selectedPlayer} />
    </>
  );
}

export default App;