import { useState } from 'react'
import ciscoLogo from '../../assets/logos/cisco-logo.svg'
import googleLogo from '../../assets/logos/google-logo.svg'
import ibmLogo from '../../assets/logos/ibm-logo.svg'
import { credentials } from '../../content/portfolio'
import { ArrowIcon } from '../icons/ArrowIcon'
import { ExternalLink } from '../ui/ExternalLink'
import { SectionHeading } from '../ui/SectionHeading'
import { Tags } from '../ui/Tags'

const issuerLogos = {
  Google: googleLogo,
  IBM: ibmLogo,
  Cisco: ciscoLogo,
} as const

export function CredentialsSection() {
  const [showAll, setShowAll] = useState(false)
  const visibleCredentials = showAll ? credentials : credentials.filter((credential) => credential.featured)

  return (
    <section id="credentials" className="section credentials">
      <div className="container">
        <SectionHeading
          index="05"
          eyebrow="Continued learning"
          title="Credentials that extend the research toolkit."
          description="Focused training across analytics, machine learning, software engineering, visualization, and cybersecurity."
        />

        <div id="credential-grid" className="credential-grid">
          {visibleCredentials.map((credential) => (
            <article key={credential.id} className="credential-card">
              <div className={`credential-card__issuer credential-card__issuer--${credential.issuer.toLowerCase()}`}>
                <img src={issuerLogos[credential.issuer]} alt="" aria-hidden="true" />
              </div>
              <div className="credential-card__content">
                <div className="credential-card__meta">
                  <span>{credential.issuer}</span>
                  <span>{credential.issued}</span>
                </div>
                <h3>{credential.title}</h3>
                <p>Credential {credential.id}</p>
                <Tags values={credential.tags} />
                <ExternalLink href={credential.href} className="credential-card__link">
                  Verify credential <ArrowIcon />
                </ExternalLink>
              </div>
            </article>
          ))}
        </div>

        <div className="section-action">
          <button
            type="button"
            className="button button--outline"
            aria-expanded={showAll}
            aria-controls="credential-grid"
            onClick={() => setShowAll((current) => !current)}
          >
            {showAll ? 'Show highlighted credentials' : 'View all eleven credentials'}
            <span aria-hidden="true">{showAll ? '−' : '+'}</span>
          </button>
        </div>
      </div>
    </section>
  )
}
