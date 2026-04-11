export default function TopBar() {
  return (
    <div className="top-bar">
      <span className="comp-label">UEFA Champions League · Round of 16</span>
      <div className="score-block">
        <div className="team-s">
          <span className="crest">🔴</span> Arsenal
        </div>
        <div className="score-nums">3 – 0</div>
        <div className="team-s">
          AS Monaco <span className="crest">🔴</span>
        </div>
        <span className="ft-tag">FT +3'</span>
      </div>
    </div>
  )
}