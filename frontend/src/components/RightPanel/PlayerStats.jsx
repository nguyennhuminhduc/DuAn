import { useState } from "react";

export default function PlayerStats({ players = [] }) {
  console.log("DATA FROM API:", players);

  const [curTeam, setCurTeam] = useState("all");
  const [sortCol, setSortCol] = useState("rating");
  const [sortDir, setSortDir] = useState(-1);

  const getChipClass = (rating) => {
    return rating >= 9
      ? "c-great"
      : rating >= 7.5
      ? "c-good"
      : rating >= 7
      ? "c-ok"
      : "c-avg";
  };

  const getTeamColor = (team) => {
    return team === "home" ? "#ef0107" : "#C8102E";
  };

  const handleSort = (col) => {
    if (sortCol === col) {
      setSortDir(sortDir * -1);
    } else {
      setSortCol(col);
      setSortDir(-1);
    }
  };

  const mappedPlayers = players.map((p) => {
    const stats = p.statistics?.[0];

    return {
      name: p.player?.name || "Unknown",
      team: stats?.team?.id === 42 ? "home" : "away",
      goals: stats?.goals?.total || 0,
      assists: stats?.goals?.assists || 0,
      tackles: stats?.tackles?.total || 0,
      passN: stats?.passes?.accuracy || 0,
      duels: stats?.duels?.total || 0,
      mins: stats?.games?.minutes || 0,
      pos: stats?.games?.position || "-",
      rating: parseFloat(stats?.games?.rating) || 0,
    };
  });

  const filteredAndSorted = mappedPlayers
    .filter((p) => curTeam === "all" || p.team === curTeam)
    .sort((a, b) => sortDir * ((a[sortCol] || 0) - (b[sortCol] || 0)));

  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => setCurTeam("all")}>All</button>
        <button onClick={() => setCurTeam("home")}>Home</button>
        <button onClick={() => setCurTeam("away")}>Away</button>
      </div>

      <table>
        <tbody>
          {filteredAndSorted.map((p, i) => (
            <tr key={i}>
              <td>{p.name}</td>
              <td>{p.goals}</td>
              <td>{p.rating.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}