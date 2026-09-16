interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

export function Card({ title, description, imageUrl }: CardProps) {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
