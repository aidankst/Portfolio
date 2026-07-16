import { experience } from '../../content/portfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { Tags } from '../ui/Tags'

export function ExperienceSection() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Research rigor, grounded in real data."
          description="A path from operational analysis to machine-learning research—always centered on clearer decisions and more reliable systems."
        />

        <ol className="timeline">
          {experience.map((item, index) => (
            <li key={`${item.organization}-${item.period}`} className="timeline-item">
              <div className="timeline-item__index">{String(index + 1).padStart(2, '0')}</div>
              <div className="timeline-item__when">
                <span>{item.period}</span>
                <span>{item.location}</span>
              </div>
              <div className="timeline-item__content">
                <div className="timeline-item__role">
                  <h3>{item.role}</h3>
                  <span>{item.type}</span>
                </div>
                <p className="timeline-item__organization">{item.organization}</p>
                <p>{item.summary}</p>
                <Tags values={item.skills} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
