function HomePage() {
  return (
    <div className="page-container">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to Football App</h1>
        <p className="hero-subtitle">
          Your destination for football players and matches information
        </p>
      </div>
      
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">👤</div>
          <h3>Players</h3>
          <p>Search and explore football players from various leagues</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⚽</div>
          <h3>Matches</h3>
          <p>View upcoming and recent matches with live scores</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Statistics</h3>
          <p>Access comprehensive football statistics and data</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage