import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const Download = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <span
      className="ml-2 cursor-pointer hover:font-bold"
    >
    {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
        <a href="/CV - Muhammad Syahid bin Nor Azman (Dark).pdf" download>Download</a>
    ) : (
        <a href="/CV - Muhammad Syahid bin Nor Azman.pdf" download>Download</a>
    )}
    </span>
  )
}

export default Download
