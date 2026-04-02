'use client';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// en
import enCommon from '@i18n/locales/en/common';
import enHome from '@i18n/locales/en/home';
import enCars from '@i18n/locales/en/cars';
import enAbout from '@i18n/locales/en/about';
import enContact from '@i18n/locales/en/contact';
// de
import deCommon from '@i18n/locales/de/common';
import deHome from '@i18n/locales/de/home';
import deCars from '@i18n/locales/de/cars';
import deAbout from '@i18n/locales/de/about';
import deContact from '@i18n/locales/de/contact';
// ru
import ruCommon from '@i18n/locales/ru/common';
import ruHome from '@i18n/locales/ru/home';
import ruCars from '@i18n/locales/ru/cars';
import ruAbout from '@i18n/locales/ru/about';
import ruContact from '@i18n/locales/ru/contact';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      sr: {common: {}, home: {}, cars: {}, about: {}, contact: {}},
      en: {common: enCommon, home: enHome, cars: enCars, about: enAbout, contact: enContact},
      de: {common: deCommon, home: deHome, cars: deCars, about: deAbout, contact: deContact},
      ru: {common: ruCommon, home: ruHome, cars: ruCars, about: ruAbout, contact: ruContact},
    },
    fallbackLng: 'sr',
    supportedLngs: ['sr', 'en', 'de', 'ru'],
    missingKeyNoValueFallbackToKey: true,
    defaultNS: 'common',
    ns: ['common'],
    interpolation: {escapeValue: false},
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
