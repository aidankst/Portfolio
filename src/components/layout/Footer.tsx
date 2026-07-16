import { profile } from '../../content/portfolio'
import { ArrowIcon } from '../icons/ArrowIcon'
import { GithubIcon } from '../icons/GithubIcon'
import { LinkedinIcon } from '../icons/LinkedinIcon'
import { ExternalLink } from '../ui/ExternalLink'

export function Footer() {
  return (
    <footer id="connect" className="footer">
      <div className="container footer__grid">
        <div className="footer__intro">
          <p className="eyebrow">Open to research and collaboration</p>
          <h2>Let&apos;s make intelligent systems more reliable.</h2>
        </div>
        <div className="footer__links">
          <ExternalLink href={profile.linkedin}>
            <LinkedinIcon /> LinkedIn <ArrowIcon />
          </ExternalLink>
          <ExternalLink href={profile.github}>
            <GithubIcon /> GitHub <ArrowIcon />
          </ExternalLink>
        </div>
        <div className="footer__base">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Designed for clarity. Built for the open web.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
