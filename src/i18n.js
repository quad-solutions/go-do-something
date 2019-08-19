import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      /**
       * Activity translations
       */
      "skating": "Skating",
      "bouldering": "Bouldering",
      "hiking": "Hiking",
      'cinema': 'Cinema',
      'barefoot park': 'Barefoot Park',
      'outdoor pool': 'Outdoor Pool',
      'indoor pool': 'Indoor Pool',
      'donate blood': 'Donate Blood',
      'board game': 'Board Game',
      'theater': 'Theater',
      'look at stars': 'Look at Stars at Night',
      'blacklight minigolf': 'Blacklight Minigolf',
      'concert': 'Concert',
      'cocktail bar': 'Cocktail Bar',
      'poetry slam': 'Visit a Poetry Slam',
      'skydiving': 'Skydiving',
      'escape room': 'Escape Room',
      'beach club': 'Beach Club',
      'bike tour': 'Bike Tour',
      'cooking': 'Cooking',
      'restaurant': 'Restaurant',
      'picknick': 'Picknick',
      'barbeque': 'Barbeque',

      /**
       * All available activity groups (those on top)
       */

      'friends': "Friends",
      'single': 'Single',
      'couple': 'Couple',
      'date': 'Date',
      'meet': 'Meet people',
      'group': 'In a group',

      /**
       * All available activity types (those on bottom)
       */
      'indoor': 'Indoor',
      'outdoor': 'Outdoor',
      'entertainment': 'Entertainment',
      'nature': 'Nature',
      'eat': 'Eat',
      'drinks': 'Drinks',
      'sport': 'Sports',

      /**
       * General texts
       */
      'new-activity-button': 'Another one!',
      'where-button': 'Where can I do this?',
      'currently-open': 'This place is currently open',
      'currently-closed': 'This place is currently closed',
      'visit-on-maps': "Visit on maps",

      'activity-type': 'Activity Type',
      'group-settings': 'Group Settings'
    }
  },
  de: {
    translation: {
      "skating": "Skate gehen",
      "bouldering": "Bouldern gehen",
      "hiking": "Wandern gehen",
      'cinema': 'Ins Kino gehen',
      'barefoot park': 'Barfußpark',
      'outdoor pool': 'Freibad',
      'indoor pool': 'Hallenbad',
      'donate blood': 'Blut spenden',
      'board game': 'Gesellschaftsspiele',
      'theater': 'Theater',
      'look at stars': 'Sterne gucken bei Nacht',
      'blacklight minigolf': 'Schwarzlicht Minigolf',
      'concert': 'Konzert besuchen',
      'cocktail bar': 'Cocktail Bar',
      'poetry slam': 'Poetry Slam',
      'skydiving': 'Fallschirmspringen',
      'escape room': 'Escape Room',
      'beach club': 'Beach Club',
      'bike tour': 'Fahrradtour machen',
      'cooking': 'Kochen',
      'restaurant': 'Restaurant',
      'picknick': 'Picknick',
      'barbeque': 'Grillen',
      
      
      'friends': "Freunde",
      'single': 'Single',
      'couple': 'Pärchen',
      'date': 'Date',
      'meet': 'Leute kennen lernen',
      'group': 'Gruppenaktivität',

      'indoor': 'Drinnen',
      'outdoor': 'Draußen',
      'entertainment': 'Unterhaltung',
      'nature': 'Natur',
      'eat': 'Essen',
      'drinks': 'Trinken',
      'sport': 'Sport',

      'new-activity-button': 'Noch eine!',
      'where-button': 'Wo geht das?',
      'currently-open': 'Dieser Ort ist gerade geöffnet',
      'currently-closed': 'Dieser Ort hat gerade geschlossen',
      'visit-on-maps': "Auf Maps angucken",

      'activity-type': 'Aktivitäts Art',
      'group-settings': 'Gruppen Einstellungen'
    }
  }
};

const detectorOptions = {
  // order and from where user language should be detected
  order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

  // keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: 'myDomain',

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    detection: detectorOptions,
    resources,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;