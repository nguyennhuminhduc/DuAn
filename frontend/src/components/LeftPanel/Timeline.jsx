export default function Timeline() {
  return (
    <div className="card">
      <div className="card-title">Diễn biến trận đấu</div>
      <div className="tl-wrap">
        <div className="tl-item">
          <div className="tl-min">88'</div>
          <div className="tl-icon">⚽</div>
          <div className="tl-body">
            <div className="tl-score">3 – 0 K. Havertz</div>
            <div className="tl-who">
              Kiến tạo: <strong>B. Saka</strong>
            </div>
          </div>
        </div>
        <div className="tl-item">
          <div className="tl-min">78'</div>
          <div className="tl-icon">⚽</div>
          <div className="tl-body">
            <div className="tl-score">2 – 0 B. Saka</div>
          </div>
        </div>
        <div className="sub-item">
          <span className="sub-time">81'</span>
          <span className="sub-icon">↔</span>
          <span>Ra: Vanderson · Vào: J. Teze</span>
        </div>
        <div className="sub-item">
          <span className="sub-time">81'</span>
          <span className="sub-icon">↔</span>
          <span>Ra: B. Embolo · Vào: G. Ilenikhena</span>
        </div>
        <div className="sub-item">
          <span className="sub-time">81'</span>
          <span className="sub-icon">↔</span>
          <span>Ra: L. Camara · Vào: E. Matazo</span>
        </div>
        <div className="sub-item">
          <span className="sub-time">79'</span>
          <span className="sub-icon">↔</span>
          <span>Vào: E. Nwaneri · Ra: M. Ødegaard</span>
        </div>
      </div>
    </div>
  )
}