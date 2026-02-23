'use client'

import { ApiReferenceReact } from '@scalar/api-reference-react'
import '@scalar/api-reference-react/style.css'
import { useEffect, useState } from 'react'

interface ScalarReferenceProps {
  specUrl: string
  onError?: (error: string) => void
}

export default function ScalarReference({ specUrl, onError }: ScalarReferenceProps) {
  const [key, setKey] = useState(0)

  useEffect(() => {
    if (specUrl && onError) {
      fetch(specUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to load: ${response.status} ${response.statusText}`)
          }
        })
        .catch((error) => {
          onError(error.message)
        })
    }
    setKey((prev) => prev + 1)
  }, [specUrl, onError])

  return (
    <ApiReferenceReact
      key={key}
      configuration={{
        url: specUrl,
        theme: 'deepSpace',
      }}
    />
  )
}
