import { OpeningHours } from './opening-hours.models';

interface CulturalPlace {
  id: number;
  name: string;
  description: string;
  address: string;
  opening_hours: OpeningHours;
  image: string | null;
  active: boolean;
}

export { CulturalPlace }
