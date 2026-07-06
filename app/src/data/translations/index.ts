import { en } from './en';
import { yo } from './yo';

export type Language = 'en' | 'yo';

export type Translations = typeof en;

export const translations: Record<Language, Translations> = {
  en,
  yo
};

export { en, yo };
