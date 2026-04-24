function Navbar({ currentPage, onNavigate }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'players', label: 'Players' },
    { id: 'matches', label: 'Matches' }
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">⚽ Football App</div>
        <ul className="navbar-menu">
          {navItems.map(item => (
            <li key={item.id}>
              <button
                className={`navbar-link ${currentPage === item.id ? 'active' : ''}`}
                onClick={() => onNavigate(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar