interface TagsProps {
  values: string[]
}

export function Tags({ values }: TagsProps) {
  return (
    <ul className="tags" aria-label="Topics">
      {values.map((value) => (
        <li key={value}>{value}</li>
      ))}
    </ul>
  )
}
