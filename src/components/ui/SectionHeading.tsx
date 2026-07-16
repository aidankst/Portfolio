interface SectionHeadingProps {
  index: string
  eyebrow: string
  title: string
  description?: string
  light?: boolean
}

export function SectionHeading({ index, eyebrow, title, description, light = false }: SectionHeadingProps) {
  return (
    <div className={`section-heading${light ? ' section-heading--light' : ''}`}>
      <div className="section-heading__marker">
        <span>{index}</span>
        <i aria-hidden="true" />
      </div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {description ? <p className="section-heading__description">{description}</p> : null}
      </div>
    </div>
  )
}
