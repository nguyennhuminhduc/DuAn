import { useState } from 'react'
import { players } from '../data/playersData'

export default function PlayerStats() {
  const [curTeam, setCurTeam] = useState('all')
  const [sortCol, setSortCol] = useState('rating')
  const [sortDir, setSortDir] = useState(-1)

  const getChipClass = (rating) => {
    return rating >= 9 ? 'c-great' : rating >= 7.5 ? 'c-good' : rating >= 7 ? 'c-ok' : 'c-avg'
  }

  const getTeamColor = (team) => {
    return team === 'arsenal' ? '#ef0107' : '#C8102E'
  }

  const handleSort = (col) => {
    if (sortCol === col) {
      setSortDir(sortDir * -1)
    } else {
      setSortCol(col)
      setSortDir(-1)
    }
  }

  const filteredAndSorted = [...players]
    .filter(p => curTeam === 'all' || p.team === curTeam)
    .sort((a, b) => sortDir * (a[sortCol] > b[sortCol] ? 1 : a[sortCol] < b[sortCol] ? -1 : 0))

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
        <div className="sub-tabs" style={{ margin: 0 }}>
          <button 
            className={`sub-tab ${curTeam === 'all' ? 'active' : ''}`}
            onClick={() => setCurTeam('all')}
          >
            Cả hai đội
          </button>
          <button 
            className={`sub-tab ${curTeam === 'arsenal' ? 'active' : ''}`}
            onClick={() => setCurTeam('arsenal')}
          >
            Arsenal
          </button>
          <button 
            className={`sub-tab ${curTeam === 'monaco' ? 'active' : ''}`}
            onClick={() => setCurTeam('monaco')}
          >
            AS Monaco
          </button>
        </div>
      </div>

      <div className="sub-tabs">
        <button className="sub-tab active" data-stat="summary">Summary</button>
        <button className="sub-tab" data-stat="attack">Attack</button>
        <button className="sub-tab" data-stat="defence">Defence</button>
        <button className="sub-tab" data-stat="passing">Passing</button>
        <button className="sub-tab" data-stat="duels">Duels</button>
        <button className="sub-tab" data-stat="goalkeeper">Goalkeeper</button>
      </div>

      <div className="tbl-wrap">
        <table id="stats-table">
          <thead>
            <tr>
              <th style={{ width: '175px' }}>
                <div className="th-crests">🔴<span style={{ color: '#ccc', fontSize: '12px' }}>+</span>🔴 &nbsp; 🔴 &nbsp; 🔴</div>
              </th>
              <th className="sortable" onClick={() => handleSort('goals')}>
                Goals<br /><span className="sort-arrow">{sortCol === 'goals' ? (sortDir === -1 ? '▼' : '▲') : '▼'}</span>
              </th>
              <th className="sortable" onClick={() => handleSort('assists')}>
                Assists<br /><span className="sort-arrow">{sortCol === 'assists' ? (sortDir === -1 ? '▼' : '▲') : '▼'}</span>
              </th>
              <th className="sortable" onClick={() => handleSort('tackles')}>
                Total<br />tackles<br /><span className="sort-arrow">{sortCol === 'tackles' ? (sortDir === -1 ? '▼' : '▲') : '▼'}</span>
              </th>
              <th className="sortable" onClick={() => handleSort('passN')}>
                Accurate<br />passes<br /><span className="sort-arrow">{sortCol === 'passN' ? (sortDir === -1 ? '▼' : '▲') : '▼'}</span>
              </th>
              <th className="sortable" onClick={() => handleSort('duels')}>
                Duels<br />(won)<br /><span className="sort-arrow">{sortCol === 'duels' ? (sortDir === -1 ? '▼' : '▲') : '▼'}</span>
              </th>
              <th className="sortable" onClick={() => handleSort('gdWon')}>
                Ground<br />duels (won)<br /><span className="sort-arrow">{sortCol === 'gdWon' ? (sortDir === -1 ? '▼' : '▲') : '▼'}</span>
              </th>
              <th className="sortable" onClick={() => handleSort('adWon')}>
                Aerial<br />duels (won)<br /><span className="sort-arrow">{sortCol === 'adWon' ? (sortDir === -1 ? '▼' : '▲') : '▼'}</span>
              </th>
              <th className="sortable" onClick={() => handleSort('mins')}>
                Minutes<br />played<br /><span className="sort-arrow">{sortCol === 'mins' ? (sortDir === -1 ? '▼' : '▲') : '▼'}</span>
              </th>
              <th>
                Position<br /><span className="sort-arrow">▼</span>
              </th>
              <th className={`sortable ${sortCol === 'rating' ? 'sort-active' : ''}`} onClick={() => handleSort('rating')}>
                Sofascore<br />Rating<br /><span className="sort-arrow" style={{ color: sortCol === 'rating' ? '#1a56db' : '#888' }}>
                  {sortCol === 'rating' ? (sortDir === -1 ? '▼' : '▲') : '▼'}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSorted.map((player, idx) => (
              <tr key={idx}>
                <td>
                  <div className="pcell">
                    <div className="pdot" style={{ background: getTeamColor(player.team) }}></div>
                    <span className="pname">{player.name}</span>
                  </div>
                </td>
                <td className={player.goals > 0 ? 'val' : 'zero'}>{player.goals > 0 ? player.goals : '0'}</td>
                <td className={player.assists > 0 ? 'val' : 'zero'}>{player.assists > 0 ? player.assists : '0'}</td>
                <td className={player.tackles > 0 ? 'val' : 'zero'}>{player.tackles > 0 ? player.tackles : '0'}</td>
                <td>{player.pass} <span style={{ color: '#aaa' }}>({player.passN}%)</span></td>
                <td>{player.duels} <span style={{ color: '#aaa' }}>({player.dWon})</span></td>
                <td>{player.gd} <span style={{ color: '#aaa' }}>({player.gdWon})</span></td>
                <td>{player.ad} <span style={{ color: '#aaa' }}>({player.adWon})</span></td>
                <td>{player.mins}'</td>
                <td><span className="pos-chip">{player.pos}</span></td>
                <td><span className={`chip ${getChipClass(player.rating)}`}>{player.rating.toFixed(1)}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}