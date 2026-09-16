export function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <ProfileCard
        name="Ada Lovelace"
        role="First Computer Programmer"
        avatarUrl="https://example.com/avatar.png"
      >
        <p>Known for writing the first algorithm intended for a machine.</p>
      </ProfileCard>
    </div>
  );
}
