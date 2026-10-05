import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'paintings',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Paintings',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: '72c0e86c-b1ae-5017-a60e-32986c29c774',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: '8750b2ef-ed27-560f-a5b8-9740d8ab180c',
    dynasty: {
      item: '35dafca1-8ab1-5d22-8ffd-d39248a402df',
      name: 'Abbasids',
    },
    timeline: {
      code: 'it',
      id: 'ita',
      country: 'Italy',
    },
    partner: {
      id: '0861be47-3ebb-54de-98c6-63d82061a5f8',
      name: 'Topkapı Palace Museum',
      city: 'Istanbul',
      country: 'Türkiye',
      objects: 3,
    },
  },
})
