type SolutionCardProps = {
  icon: string
  alt: string
  title: string
  description: string
}

export function SolutionCard({ icon, alt, title, description }: SolutionCardProps) {
  return (
    <div className="card">
      <span>
        <img src={icon} alt={alt} width={64} height={64} />
      </span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <hr />
      </div>
    </div>
  )
}

export default SolutionCard
