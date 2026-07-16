import avatarUrl from '../../assets/kaung-sithu-avatar.webp'
import { metrics, profile } from '../../content/portfolio'
import { ArrowIcon } from '../icons/ArrowIcon'
import { GithubIcon } from '../icons/GithubIcon'
import { ExternalLink } from '../ui/ExternalLink'

export function HeroSection() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero__grid container">
        <div className="hero__copy">
          <div className="hero__availability">
            <span aria-hidden="true" />
            Based in {profile.location}
          </div>
          <p className="eyebrow hero__eyebrow">{profile.eyebrow}</p>
          <h1 id="hero-title">{profile.headline}</h1>
          <p className="hero__introduction">{profile.introduction}</p>
          <div className="hero__actions">
            <ExternalLink href={profile.linkedin} className="button button--primary">
              LinkedIn <ArrowIcon />
            </ExternalLink>
            <ExternalLink href={profile.github} className="button button--text">
              <GithubIcon /> GitHub
            </ExternalLink>
          </div>
        </div>

        <div className="hero__portrait-wrap">
          <div className="hero__portrait-number" aria-hidden="true">01</div>
          <div className="hero__portrait-frame">
            <img
              src={avatarUrl}
              alt="Editorial illustration of Kaung Sithu in a dark overshirt against forest-green and amber shapes"
              width="1122"
              height="1402"
              fetchPriority="high"
            />
          </div>
          <div className="hero__portrait-caption">
            <span>{profile.name}</span>
            <span>{profile.role}</span>
          </div>
        </div>
      </div>

      <div className="metric-strip" aria-label="Selected facts">
        <dl className="container metric-strip__grid">
          {metrics.map((metric) => (
            <div key={metric.label} className="metric">
              <dt>{metric.label}</dt>
              <dd>{metric.value}</dd>
              <dd className="metric__note">{metric.note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
