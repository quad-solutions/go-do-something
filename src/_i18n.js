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

      'kayaking': 'Kayaking',
      'snow boarding': 'Snowboarding',
      'movie marathon': 'Movie Marathon',
      'muesum': 'Museum',
      'photoshoot': 'Take some photos',
      'brunch': 'Brunch',
      'baking': 'Bake something',
      'fucking all day': 'Fun Time in Bed',
      'beach': 'Go to the beach',
      'pizza': 'PIZZA TIME!',
      'go carting': 'Go Carting',
      'zoo': 'Visit the zoo',
      'making memes': 'Create dank memes',
      'listen to music together': 'Listen to music',
      'bowling': 'Bowling',
      'cat cafe': 'Cat Cafe',
      'netflix and chill': 'Nexflix and Chill',
      'coffee': 'Grab a coffee',
      'shopping': 'Go shopping',
      'fancy restaurant': 'Try a fancy restaurant',

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
      'group-settings': 'Group Settings',

      /**
       * Snackbar texts
       */
      'accept-privacy-for-search': "You must accept our privacy policy to search for places to do stuff.",
      'no-location-not-found': 'We were not able to find your location.',
      'no-place-found': "Sorry, we didn't find any place where you can do this. Maybe at home?",
      'no-location-data': 'To show possible places to do this activity, please allow this app to get your location.',

      /**
       * Privacy Policy
       */

      'pp-consent-1': 'This website uses cookies and third party services to function properly.',
      'pp-consent-2': 'For more information, see our ',

      'privacy-policy': 'Privacy Policy',
      'pp-pt1': 'Personal data (usually referred to just as "data" below) will only be processed by us to the extent necessary and for the purpose of providing a functional and user-friendly website, including its contents, and the services offered there.',
      'pp-pt2': 'Per Art. 4 No. 1 of Regulation (EU) 2016/679, i.e. the General Data Protection Regulation (hereinafter referred to as the "GDPR"), "processing" refers to any operation or set of operations such as collection, recording, organization, structuring, storage, adaptation, alteration, retrieval, consultation, use, disclosure by transmission, dissemination, or otherwise making available, alignment, or combination, restriction, erasure, or destruction performed on personal data, whether by automated means or not.',
      'pp-pt3': 'The following privacy policy is intended to inform you in particular about the type, scope, purpose, duration, and legal basis for the processing of such data either under our own control or in conjunction with others. We also inform you below about the third-party components we use to optimize our website and improve the user experience which may result in said third parties also processing data they collect and control.',

      'pp-pt4': 'Information about us',
      'pp-pt5': 'This is only a fun little project we are working on right now and is not commercial in any way.',
      'pp-pt6': 'If you want to write us a message, you can generally contact us via ',


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
      
      'kayaking': 'Kayak fahren',
      'snow boarding': 'Snowboarden',
      'movie marathon': 'Film Marathon',
      'muesum': 'Museum',
      'photoshoot': 'Photos machen',
      'brunch': 'Brunch',
      'baking': 'Backen',
      'fucking all day': 'Spaßigen Tag im Bed ;)',
      'beach': 'Zum Strand gehen',
      'pizza': 'PIZZA TIME!',
      'go carting': 'Go-Cart fahren',
      'zoo': 'Zoobesuch',
      'making memes': 'Dank Memes erstellen',
      'listen to music together': 'Musik hören',
      'bowling': 'Bowling',
      'cat cafe': 'Katzen Cafe',
      'netflix and chill': 'Nexflix and Chill',
      'coffee': 'Kaffee machen',
      'shopping': 'Shoppen',
      'fancy restaurant': 'Ein edles Restaurant ausprobieren',

      
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
      'group-settings': 'Gruppen Einstellungen',


      /**
       * Snackbar texts
       */
      'accept-privacy-for-search': "Du musst unsere Datenschutzbestimmung aktzeptieren, damit du nach Orten suchen kannst.",
      'no-location-not-found': 'Wir konnten dich leider nicht orten.',
      'no-place-found': "Es tut uns Leid, wir konnten keinen Ort für dich finden. Vielleicht Zuhause?",
      'no-location-data': 'Bitte erlaube dieser App auf deinen Standort zuzugreifen, damit wir dir Orte für Aktivitäten vorschlagen können.',

      /**
       * Privacy Policy
       */

      'pp-consent-1': 'Diese Webseite verwendet Cookies und Services von Drittanbietern, um die volle Funktion zu gewährleisten.',
      'pp-consent-2': 'Für mehr Informationen, siehe unsere ',

      'privacy-policy': 'Datenschutzerklärung',
      'pp-pt1': 'Personal data (usually referred to just as "data" below) will only be processed by us to the extent necessary and for the purpose of providing a functional and user-friendly website, including its contents, and the services offered there.',
      'pp-pt2': 'Per Art. 4 No. 1 of Regulation (EU) 2016/679, i.e. the General Data Protection Regulation (hereinafter referred to as the "GDPR"), "processing" refers to any operation or set of operations such as collection, recording, organization, structuring, storage, adaptation, alteration, retrieval, consultation, use, disclosure by transmission, dissemination, or otherwise making available, alignment, or combination, restriction, erasure, or destruction performed on personal data, whether by automated means or not.',
      'pp-pt3': 'The following privacy policy is intended to inform you in particular about the type, scope, purpose, duration, and legal basis for the processing of such data either under our own control or in conjunction with others. We also inform you below about the third-party components we use to optimize our website and improve the user experience which may result in said third parties also processing data they collect and control.',

      'pp-pt4': 'Information about us',
      'pp-pt5': 'This is only a fun little project we are working on right now and is not commercial in any way.',
      'pp-pt6': 'If you want to write us a message, you can generally contact us via ',

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