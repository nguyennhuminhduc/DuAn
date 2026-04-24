function PlayerCard({ player }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{player.name}</h3>
      </div>
      <div className="card-body">
        <p className="card-info">
          <span className="label">Age:</span> {player.age}
        </p>
        <p className="card-info">
          <span className="label">Nationality:</span> {player.nationality}
        </p>
      </div>
    </div>
  )
}

export default PlayerCard