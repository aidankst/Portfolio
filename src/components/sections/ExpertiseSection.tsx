import { useState } from 'react'
import aghLogo from '../../assets/logos/agh-logo.png'
import { education, skillGroups } from '../../content/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

export function ExpertiseSection() {
  const [openGroupIndex, setOpenGroupIndex] = useState<number | null>(0)

  return (
    <section id="expertise" className="section expertise">
      <div className="container">
        <SectionHeading
          index="04"
          eyebrow="Education & expertise"
          title="A technical foundation built for applied research."
          description="Computer science fundamentals, practical analysis, and the research methods needed to evaluate intelligent systems."
        />

        <div className="expertise-layout">
          <article className="education-card">
            <div className="education-card__seal" aria-hidden="true">
              <img src={aghLogo} alt="" />
            </div>
            <p className="eyebrow">Education</p>
            <h3>{education.degree}</h3>
            <p className="education-card__institution">{education.institution}</p>
            <div className="education-card__meta">
              <span>{education.location}</span>
              <span>{education.period}</span>
            </div>
            <p>{education.focus}</p>
            <dl className="education-card__scores">
              <div>
                <dt>GPA</dt>
                <dd>{education.gpa}</dd>
              </div>
              <div>
                <dt>Dissertation grade</dt>
                <dd>{education.dissertationGrade}</dd>
              </div>
            </dl>
            <div className="education-card__dissertation">
              <span>Dissertation</span>
              <strong>{education.dissertation}</strong>
            </div>
          </article>

          <div className="skill-groups">
            {skillGroups.map((group, index) => (
              <details
                key={group.title}
                className="skill-group"
                open={openGroupIndex === index}
                onToggle={(event) => {
                  const isOpen = event.currentTarget.open

                  setOpenGroupIndex((currentIndex) => {
                    if (isOpen) return index
                    return currentIndex === index ? null : currentIndex
                  })
                }}
              >
                <summary>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{group.title}</strong>
                  <i aria-hidden="true">+</i>
                </summary>
                <div className="skill-group__content">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="skill-row">
                      <div>
                        <strong>{skill.name}</strong>
                        <span>{skill.detail}</span>
                      </div>
                      <div className="skill-row__level">
                        <span>{skill.proficiency}%</span>
                        <progress value={skill.proficiency} max="100" aria-label={`${skill.name} proficiency`} />
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
