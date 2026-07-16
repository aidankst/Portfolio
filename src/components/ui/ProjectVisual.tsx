interface ProjectVisualProps {
  index: number
}

export function ProjectVisual({ index }: ProjectVisualProps) {
  return (
    <div className={`project-visual project-visual--${index + 1}`} aria-hidden="true">
      <span className="project-visual__axis" />
      <span className="project-visual__signal" />
      <span className="project-visual__node project-visual__node--one" />
      <span className="project-visual__node project-visual__node--two" />
      <strong>{String(index + 1).padStart(2, '0')}</strong>
    </div>
  )
}
