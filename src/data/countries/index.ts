
// This file exports all country court data

import { saudiArabiaCourts } from './saudiArabia';
import { egyptCourts } from './egypt';
import { qatarCourts } from './qatar';
import { kuwaitCourts } from './kuwait';
import { uaeCourts } from './uae';
import { tunisCourts } from './tunisia';
import { bahrainCourts } from './bahrain';
import { omanCourts } from './oman';

// Export all country courts
export {
  saudiArabiaCourts,
  egyptCourts,
  qatarCourts,
  kuwaitCourts,
  uaeCourts,
  tunisCourts,
  bahrainCourts,
  omanCourts
};

// Export combined courts
export const allCourts = {
  'Saudi Arabia': saudiArabiaCourts,
  'Egypt': egyptCourts,
  'Qatar': qatarCourts,
  'Kuwait': kuwaitCourts,
  'UAE': uaeCourts,
  'Tunisia': tunisCourts,
  'Bahrain': bahrainCourts,
  'Oman': omanCourts
};
