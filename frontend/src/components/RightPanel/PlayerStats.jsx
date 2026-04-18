const PlayerStats = ({ player }) => {
  if (!player) return <p>Search a player...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{player.player.name}</h2>

      <img src={player.player.photo} width="120" />

      <p>Age: {player.player.age}</p>
      <p>Nationality: {player.player.nationality}</p>

      <h3>Club</h3>
      <p>{player.statistics[0].team.name}</p>

      <h3>Stats</h3>
      <p>Games: {player.statistics[0].games.appearences}</p>
      <p>Goals: {player.statistics[0].goals.total}</p>
      <p>Assists: {player.statistics[0].goals.assists}</p>
    </div>
  );
};

export default PlayerStats;