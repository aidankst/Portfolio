import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('portfolio', () => {
  it('renders the research positioning and core navigation', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /building perception systems that see faster/i,
      }),
    ).toBeInTheDocument()

    const navigation = screen.getByRole('navigation', { name: 'Primary navigation' })
    for (const label of ['Research', 'Experience', 'Projects', 'Expertise', 'Credentials', 'Connect']) {
      expect(within(navigation).getByRole('link', { name: label })).toBeInTheDocument()
    }

    const homeLink = screen.getByRole('link', { name: /kaung sithu, back to top/i })
    expect(homeLink.querySelector('img')?.getAttribute('src')).toMatch(/\/favicon\.svg$/)
  })

  it('renders the complete five-publication record', () => {
    render(<App />)

    const publicationHeading = screen.getByRole('heading', {
      name: 'Five contributions, one research direction.',
    })
    const publicationIndex = publicationHeading.closest('.publication-index') as HTMLElement

    expect(publicationIndex).not.toBeNull()
    expect(within(publicationIndex).getAllByRole('listitem')).toHaveLength(5)
    expect(
      within(publicationIndex).getByRole('link', {
        name: /interfuserdvs: event-enhanced sensor fusion/i,
      }),
    ).toHaveAttribute('href', 'https://arxiv.org/abs/2605.04355')
    expect(
      within(publicationIndex).getByRole('link', {
        name: /microseconds matter: temporal and perceptual metrics/i,
      }),
    ).toHaveAttribute('href', 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6442903')
  })

  it('opens and closes the mobile navigation accessibly', async () => {
    const user = userEvent.setup()
    render(<App />)

    const menuButton = screen.getByRole('button', { name: 'Open navigation' })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(menuButton)
    expect(screen.getByRole('button', { name: 'Close navigation' })).toHaveAttribute('aria-expanded', 'true')

    await user.click(screen.getByRole('link', { name: 'Research' }))
    expect(screen.getByRole('button', { name: 'Open navigation' })).toHaveAttribute('aria-expanded', 'false')
  })

  it('reveals all five projects on request', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(screen.queryByRole('heading', { name: 'School Management System' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'View all five projects' }))

    expect(screen.getByRole('heading', { name: 'School Management System' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'QR Code Attendance System' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Show selected projects' })).toHaveAttribute('aria-expanded', 'true')
  })

  it('reveals every credential and keeps verification links external', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(screen.queryByRole('heading', { name: 'Data Analysis with R Programming' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'View all eleven credentials' }))

    expect(screen.getByRole('heading', { name: 'Data Analysis with R Programming' })).toBeInTheDocument()
    const credentialLink = screen.getAllByRole('link', { name: 'Verify credential' })[0]
    expect(credentialLink).toHaveAttribute('target', '_blank')
    expect(credentialLink).toHaveAttribute('rel', 'noreferrer')
  })

  it('keeps only one expertise group open at a time', async () => {
    const user = userEvent.setup()
    render(<App />)

    const programmingGroup = screen.getByText('Programming & Technical').closest('details')
    const dataAnalysisSummary = screen.getByText('Data Analysis & Visualization').closest('summary')
    const dataAnalysisGroup = dataAnalysisSummary?.closest('details')

    expect(programmingGroup).toHaveAttribute('open')
    expect(dataAnalysisSummary).not.toBeNull()
    expect(dataAnalysisGroup).not.toHaveAttribute('open')

    await user.click(dataAnalysisSummary!)

    expect(programmingGroup).not.toHaveAttribute('open')
    expect(dataAnalysisGroup).toHaveAttribute('open')
  })

  it('uses safe external attributes for public profiles', () => {
    render(<App />)

    const githubLinks = screen.getAllByRole('link', { name: /github/i })
    const linkedinLinks = screen.getAllByRole('link', { name: /linkedin/i })

    for (const link of [...githubLinks, ...linkedinLinks]) {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')
    }
  })
})
