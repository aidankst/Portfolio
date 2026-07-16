import type { ReactNode } from 'react'

interface ExternalLinkProps {
  href: string
  className?: string
  children: ReactNode
  label?: string
}

export function ExternalLink({ href, className, children, label }: ExternalLinkProps) {
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer" aria-label={label}>
      {children}
    </a>
  )
}
