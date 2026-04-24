function MatchCard({ match }) {
  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'finished':
        return 'status-finished'
      case 'live':
        return 'status-live'
      case 'scheduled':
        return 'status-scheduled'
      default:
        return 'status-default'
    }
  }

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">
          {match.homeTeam} vs {match.awayTeam}
        </h3>
      </div>
      <div className="card-body">
        {match.score && (
          <p className="card-info">
            <span className="label">Score:</span> {match.score}
          </p>
        )}
        <p className="card-info">
          <span className="label">Status:</span>
          <span className={`status-badge ${getStatusClass(match.status)}`}>
            {match.status}
          </span>
        </p>
      </div>
    </div>
  )
}

export default MatchCard