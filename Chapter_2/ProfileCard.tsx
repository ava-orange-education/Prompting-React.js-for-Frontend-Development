type ProfileCardProps = {
  name: string;
  role: string;
  avatarUrl: string;
  children?: React.ReactNode;
};

export function ProfileCard({ name, role, avatarUrl, children }: ProfileCardProps) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "1rem",
      width: "250px",
    }}>
      <img
        src={avatarUrl}
        alt={`${name}'s avatar`}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h2>{name}</h2>
      <h4>{role}</h4>
      <div>{children}</div>
    </div>
  );
}
