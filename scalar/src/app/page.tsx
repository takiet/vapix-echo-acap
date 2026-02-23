'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'

const ScalarReference = dynamic(() => import('./ScalarReference'), {
  ssr: false,
  loading: () => <p className="p-8 text-white">Loading...</p>,
})

const ASSET_PREFIX = (process.env.NEXT_PUBLIC_ASSET_PREFIX || '').replace(/\/$/, '')
const DEFAULT_URL = `${ASSET_PREFIX}/spec/openapi.yaml`

export default function ApiTester() {
  const [specUrl, setSpecUrl] = useState(DEFAULT_URL)
  const [inputUrl, setInputUrl] = useState('')
  const [showSettings, setShowSettings] = useState(false)
  const [loadError, setLoadError] = useState<string | null>(null)

  const handleLoadSpec = () => {
    if (inputUrl.trim()) {
      setSpecUrl(inputUrl.trim())
      setLoadError(null)
      setShowSettings(false)
    }
  }

  const handleError = (error: string) => {
    setLoadError(error)
  }

  return (
    <div className="min-h-screen bg-zinc-900">
      <div className="border-b border-zinc-700 bg-zinc-800 p-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-title)' }}>
            VAPIX Tester
          </h1>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-white"
            title="Settings"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>
        </div>
        {showSettings && (
          <div className="mx-auto mt-4 max-w-7xl">
            <div className="flex gap-2">
              <input
                type="url"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLoadSpec()}
                placeholder="OpenAPI Spec URL (e.g., https://example.com/openapi.yaml)"
                className="flex-1 rounded-lg border border-zinc-600 bg-zinc-700 px-4 py-2 text-white placeholder-zinc-400 focus:border-blue-500 focus:outline-none"
              />
              <button
                onClick={handleLoadSpec}
                className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700"
              >
                Load
              </button>
            </div>
          </div>
        )}
      </div>
      {loadError && (
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="rounded-lg border border-red-700 bg-red-900/50 px-4 py-3 text-red-200">
            <p className="font-medium">Error loading OpenAPI spec</p>
            <p className="text-sm">{loadError}</p>
            <p className="mt-2 text-sm">Click the settings icon to load from a URL.</p>
          </div>
        </div>
      )}
      <ScalarReference specUrl={specUrl} onError={handleError} />
    </div>
  )
}
