export default function HandicapCard() {
  return (
    <div className="card">
      <div className="hc-header">
        Asian handicap
        <span className="bet-logo">1XBET</span>
      </div>
      <div className="handicap-row">
        <div className="hc-side">
          <div className="hc-label">(-1.5) Arsenal</div>
          <div className="hc-odds">1.91</div>
          <div className="hc-trend trend-up">▲ 1.91</div>
        </div>
        <div className="hc-side">
          <div className="hc-label">(1.5) AS Monaco</div>
          <div className="hc-odds">1.91</div>
          <div className="hc-trend trend-dn">▼ 1.91</div>
        </div>
      </div>
      <div className="hc-footer">
        <span>Gamble responsibly 18+</span>
        <span className="add-odds">Additional odds ›</span>
      </div>
    </div>
  )
}