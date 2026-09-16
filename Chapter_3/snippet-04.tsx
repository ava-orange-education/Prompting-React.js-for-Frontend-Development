<div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
  {["All", ...categories].map((cat) => (
    <button
      key={cat}
      onClick={() => setFilterCategory(cat)}
      style={{
        padding: "4px 12px",
        background: filterCategory === cat ? "#007bff" : "#f0f0f0",
        color: filterCategory === cat ? "#fff" : "#333",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      {cat}
    </button>
  ))}
</div>
