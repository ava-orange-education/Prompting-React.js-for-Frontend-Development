<select
  value={selectedCategory}
  onChange={(e) => setSelectedCategory(e.target.value)}
  style={{ padding: "8px", fontSize: "16px" }}
>
  {categories.map((cat) => (
    <option key={cat} value={cat}>{cat}</option>
  ))}
</select>
