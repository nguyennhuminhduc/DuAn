import { useState } from "react";

export default function PlayerStats({ players = [], match }) {
  const [curTeam, setCurTeam] = useState("all");
  const [sortCol, setSortCol] = useState("rating");
  const [sortDir, setSortDir] = useState(-1);

  // ===== UI HELPERS =====
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

  // ===== MAP DATA TỪ API =====
  const mappedPlayers = (players || []).map((p) => {
    const stats = p.statistics?.[0];

    return {
      name: p.player?.name || "Unknown",

      team:
        stats?.team?.id === match?.teams?.home?.id
          ? "home"
          : "away",

      goals: stats?.goals?.total || 0,
      assists: stats?.goals?.assists || 0,
      tackles: stats?.tackles?.total || 0,

      pass: stats?.passes?.total || 0,
      passN: stats?.passes?.accuracy || 0,

      duels: stats?.duels?.total || 0,
      dWon: stats?.duels?.won || 0,

      gd: stats?.duels?.total || 0,
      gdWon: stats?.duels?.won || 0,

      ad: stats?.duels?.total || 0,
      adWon: stats?.duels?.won || 0,

      mins: stats?.games?.minutes || 0,
      pos: stats?.games?.position || "-",

      rating: stats?.games?.rating
        ? parseFloat(stats.games.rating)
        : 0,
    };
  });

  // ===== FILTER + SORT =====
  const filteredAndSorted = mappedPlayers
    .filter((p) => curTeam === "all" || p.team === curTeam)
    .sort((a, b) => {
      const valA = a[sortCol] || 0;
      const valB = b[sortCol] || 0;

      return sortDir * (valA > valB ? 1 : valA < valB ? -1 : 0);
    });

  return (
    <>
      {/* FILTER */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <button onClick={() => setCurTeam("all")}>All</button>
        <button onClick={() => setCurTeam("home")}>Home</button>
        <button onClick={() => setCurTeam("away")}>Away</button>
      </div>

      {/* TABLE */}
      <div className="tbl-wrap">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th onClick={() => handleSort("goals")}>Goals</th>
              <th onClick={() => handleSort("assists")}>Assists</th>
              <th onClick={() => handleSort("tackles")}>Tackles</th>
              <th onClick={() => handleSort("passN")}>Pass %</th>
              <th onClick={() => handleSort("duels")}>Duels</th>
              <th onClick={() => handleSort("mins")}>Minutes</th>
              <th>Pos</th>
              <th onClick={() => handleSort("rating")}>Rating</th>
            </tr>
          </thead>

          <tbody>
            {filteredAndSorted.map((player, idx) => (
              <tr key={idx}>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: getTeamColor(player.team),
                      }}
                    ></div>
                    {player.name}
                  </div>
                </td>

                <td>{player.goals}</td>
                <td>{player.assists}</td>
                <td>{player.tackles}</td>
                <td>{player.passN}%</td>
                <td>{player.duels}</td>
                <td>{player.mins}</td>
                <td>{player.pos}</td>
                <td>
                  <span className={`chip ${getChipClass(player.rating)}`}>
                    {player.rating.toFixed(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}