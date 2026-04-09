export type Language = {
  code: string
  flagCode: string
  name: string
  dir: 'ltr' | 'rtl'
}

export const LANGUAGES: Language[] = [
  { code: 'en', flagCode: 'gb', name: 'English', dir: 'ltr' },
  { code: 'fr', flagCode: 'fr', name: 'Français', dir: 'ltr' },
  { code: 'de', flagCode: 'de', name: 'Deutsch', dir: 'ltr' },
  { code: 'it', flagCode: 'it', name: 'Italiano', dir: 'ltr' },
  { code: 'es', flagCode: 'es', name: 'Español', dir: 'ltr' },
  { code: 'pl', flagCode: 'pl', name: 'Polski', dir: 'ltr' },
  { code: 'sv', flagCode: 'sv', name: 'Svenska', dir: 'ltr' },
  { code: 'he', flagCode: 'il', name: 'עברית', dir: 'rtl' },
  { code: 'ko', flagCode: 'kr', name: '한국어', dir: 'ltr' },
  { code: 'pt', flagCode: 'pt', name: 'Português', dir: 'ltr' },
  { code: 'ar', flagCode: 'sa', name: 'العربية', dir: 'rtl' },
  { code: 'nl', flagCode: 'nl', name: 'Dutch', dir: 'ltr' },
]

export const DEFAULT_LANGUAGE = LANGUAGES[0]

export function flagEmoji(code: string): string {
  if (!code || code.length !== 2) return ''
  const points = code
    .toUpperCase()
    .split('')
    .map((c) => 127397 + c.charCodeAt(0))
  return String.fromCodePoint(...points)
}
