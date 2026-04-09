/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENABLE_ANALYTICS: string | undefined
  readonly VITE_ENABLE_WEGLOT: string | undefined
  readonly VITE_GTM_IDS: string | undefined
  readonly VITE_WEGLOT_API_KEY: string | undefined
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
