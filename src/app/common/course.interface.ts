import { Time } from '@angular/common';

export interface Course {
  id?: number;
  name: string;
  description: string;
  startDate: string;
  startTime: string;
  price: number;
  onlineUr?: string;
  imageUrl?: string;
  location?: Location;
}

export interface Location {
  address: string;
  city: string;
  country: string;
}
