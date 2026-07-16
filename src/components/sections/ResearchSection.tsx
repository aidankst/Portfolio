import { publications, research } from '../../content/portfolio'
import { ArrowIcon } from '../icons/ArrowIcon'
import { ExternalLink } from '../ui/ExternalLink'
import { SectionHeading } from '../ui/SectionHeading'
import { Tags } from '../ui/Tags'

export function ResearchSection() {
  return (
    <section id="research" className="research section">
      <div className="container">
        <SectionHeading
          index="01"
          eyebrow="Selected research"
          title="From sensing to evidence."
          description="Research focused on the reliability, latency, and security of perception systems for autonomous environments."
          light
        />

        <div className="research-grid">
          {research.map((item, index) => (
            <article key={item.title} className="research-card">
              <div className="research-card__topline">
                <span>{item.type}</span>
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <Tags values={item.tags} />
              <div className="research-card__footer">
                <span>{item.venue} · {item.year}</span>
                {item.href ? (
                  <ExternalLink href={item.href} label={`${item.linkLabel}: ${item.title}`}>
                    {item.linkLabel} <ArrowIcon />
                  </ExternalLink>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="publication-index" aria-labelledby="publication-title">
          <div className="publication-index__intro">
            <p className="eyebrow">Publication record</p>
            <h3 id="publication-title">Five contributions, one research direction.</h3>
          </div>
          <ol className="publication-list">
            {publications.map((publication, index) => (
              <li key={publication.title}>
                <span className="publication-list__number">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <ExternalLink href={publication.href} className="publication-list__title">
                    {publication.title} <ArrowIcon />
                  </ExternalLink>
                  <p>{publication.authors}</p>
                  <span>{publication.venue}</span>
                </div>
                <time>{publication.year}</time>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
