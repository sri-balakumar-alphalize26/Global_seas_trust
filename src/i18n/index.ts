// ============================================
// Global Seas Trust — locale helpers
//
// English is the default and lives at the site root (/about/).
// Arabic lives under /ar/ (/ar/about/). The language is passed down
// explicitly as a `lang` prop from each page, so nothing depends on
// request-time state and every page builds statically.
// ============================================

import { ui, type Ui } from './ui';

export type Lang = 'en' | 'ar';

export const defaultLang: Lang = 'en';
export const langs: Lang[] = ['en', 'ar'];

/** The string table for a language. */
export const t = (lang: Lang): Ui => ui[lang];

/** Writing direction for the <html dir> attribute. */
export const dir = (lang: Lang) => (lang === 'ar' ? 'rtl' : 'ltr');

/** BCP-47 tag for <html lang>, hreflang and Intl formatting. */
export const htmlLang = (lang: Lang) => (lang === 'ar' ? 'ar' : 'en');

/** Open Graph locale. */
export const ogLocale = (lang: Lang) => (lang === 'ar' ? 'ar_OM' : 'en_US');

/** Prefix a root-relative path for the given language: /about/ → /ar/about/ */
export function localePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === '/' ? '/ar/' : `/ar${clean}`;
}

/** Remove the /ar prefix: /ar/about/ → /about/ */
export function stripLocale(pathname: string): string {
  const out = pathname.replace(/^\/ar(?=\/|$)/, '');
  return out === '' ? '/' : out;
}

/** Which language a pathname belongs to. */
export function langFromPath(pathname: string): Lang {
  return /^\/ar(\/|$)/.test(pathname) ? 'ar' : 'en';
}

/** The same page in the other language — powers the header toggle. */
export function otherLangPath(pathname: string, lang: Lang): string {
  return lang === 'ar' ? stripLocale(pathname) : localePath(pathname, 'ar');
}

/**
 * Read a data field in the requested language.
 * `pick(item, 'name', 'ar')` returns `item.nameAr` when present, else `item.name`.
 */
export function pick<T extends Record<string, unknown>>(obj: T, key: string, lang: Lang): string {
  if (lang === 'ar') {
    const arabic = obj[`${key}Ar`];
    if (typeof arabic === 'string' && arabic.length) return arabic;
  }
  return String(obj[key] ?? '');
}
