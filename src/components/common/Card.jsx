export default function Card({ title, description, icon, children }) {
  return (
    <div className="card">
      {icon && <div className="card-icon">{icon}</div>}
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      {children}
    </div>
  )
}
