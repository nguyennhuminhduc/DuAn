import { useEffect, useState } from "react";
import { searchPlayers } from "../lib/api";

const TopBar = ({ setSelectedPlayer }) => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const delay = setTimeout(async () => {
      if (!keyword) return setResults([]);

      const data = await searchPlayers(keyword);
      setResults(data?.response || []);
    }, 400);

    return () => clearTimeout(delay);
  }, [keyword]);

  return (
    <div style={{ position: "relative", padding: "20px" }}>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search player..."
        style={{ padding: "10px", width: "300px" }}
      />

      {/* DROPDOWN */}
      {results.length > 0 && (
        <div
          style={{
            position: "absolute",
            background: "#fff",
            width: "300px",
            border: "1px solid #ccc",
            marginTop: "5px",
            zIndex: 10,
          }}
        >
          {results.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedPlayer(item);
                setKeyword("");
                setResults([]);
              }}
              style={{
                padding: "10px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img src={item.player.photo} width="30" />
              <span>{item.player.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopBar;