interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  children?: React.ReactNode;
}

export function Card({ title, description, imageUrl, children }: CardProps) {
  return (
    <article className="card">
      {imageUrl && (
        <figure>
          <img src={imageUrl} alt={title} />
          <figcaption>{title}</figcaption>
        </figure>
      )}
      <header>
        <h3>{title}</h3>
      </header>
      {description && <p>{description}</p>}
      {children && <div>{children}</div>}
    </article>
  );
}
