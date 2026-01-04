
export type BailMatterService = {
  id: string;
  name: string;
  description: string;
};

export const bailMatterServices: BailMatterService[] = [
  {
    id: 'anticipatory-bail',
    name: 'Anticipatory Bail',
    description: 'Legal protection to prevent arrest in anticipation of an FIR or criminal complaint.'
  },
  {
    id: 'bail-cases',
    name: 'Bail Cases',
    description: 'Comprehensive support for all types of bail matters, including regular and interim bail.'
  },
  {
    id: 'bail-under-criminal-law',
    name: 'Bail Under Criminal Law',
    description: 'Specialized assistance for securing bail in various criminal offenses.'
  },
  {
    id: 'regular-bail',
    name: 'Regular Bail',
    description: 'Securing release from custody after an arrest has been made in a criminal case.'
  },
];
