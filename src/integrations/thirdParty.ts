/**
 * Deferred third-party loaders (GTM, Weglot) — mirrors the reference portal’s
 * requestIdleCallback / setTimeout pattern. Enable only via VITE_* env vars.
 */

declare global {
  interface Window {
    dataLayer?: unknown[]
    Weglot?: {
      initialize: (opts: Record<string, unknown>) => void
    }
  }
}

function loadGtm(): void {
  const raw = import.meta.env.VITE_GTM_IDS?.trim()
  if (!raw) return

  const ids = raw
    .split(',')
    .map((id) => id.trim())
    .filter(Boolean)
  if (ids.length === 0) return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  })

  const firstScript = document.getElementsByTagName('script')[0]
  ids.forEach((id) => {
    const j = document.createElement('script')
    j.async = true
    j.src = `https://www.googletagmanager.com/gtm.js?id=${id}`
    firstScript?.parentNode?.insertBefore(j, firstScript)
  })
}

function loadWeglot(): void {
  const apiKey = import.meta.env.VITE_WEGLOT_API_KEY?.trim()
  if (!apiKey) return

  const s = document.createElement('script')
  s.src = 'https://cdn.weglot.com/weglot.min.js'
  s.onload = () => {
    window.Weglot?.initialize({
      api_key: apiKey,
      wait_transition: true,
      cache: true,
      hide_switcher: true,
    })
  }
  document.head.appendChild(s)
}

function run(): void {
  if (import.meta.env.VITE_ENABLE_ANALYTICS === 'true') {
    loadGtm()
  }
  if (import.meta.env.VITE_ENABLE_WEGLOT === 'true') {
    loadWeglot()
  }
}

export function scheduleThirdPartyIntegrations(): void {
  if (typeof window === 'undefined') return

  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => run(), { timeout: 3500 })
  } else {
    setTimeout(run, 2000)
  }
}
