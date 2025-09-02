export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  comment: string;
  rating: number;
}

export interface Vehicle {
  type: 'berline' | 'minivan';
  name: string;
  capacity: string;
  description: string;
}

export interface Destination {
  name: string;
  berlinePrice: number;
  minivanPrice: number;
  duration: string;
}