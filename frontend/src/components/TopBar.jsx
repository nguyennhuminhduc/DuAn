export default function TopBar({ match }) {
  return (
    <div className="top-bar">
      <span className="comp-label">
        {match?.league?.name} · {match?.league?.round}
      </span>

      <div className="score-block">
        {/* HOME */}
        <div className="team-s">
          <span className="crest">🔴</span>{" "}
          {match?.teams?.home?.name || "Loading..."}
        </div>

        {/* SCORE */}
        <div className="score-nums">
          {match?.goals?.home ?? "-"} – {match?.goals?.away ?? "-"}
        </div>

        {/* AWAY */}
        <div className="team-s">
          {match?.teams?.away?.name || "Loading..."}{" "}
          <span className="crest">🔴</span>
        </div>

        {/* STATUS */}
        <span className="ft-tag">
          {match?.fixture?.status?.short || "..."}
        </span>
      </div>
    </div>
  );
}