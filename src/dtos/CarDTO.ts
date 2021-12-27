interface Accessory {
  type: string;
  name: string;
  id: string;
}

export interface Photo {
  id: string;
  photo: string;
}

export interface CarDTO {
  id: string;
  brand: string;
  name: string;
  about: string;
  period: string;
  price: number;
  fuel_type: string;
  thumbnail: string;
  accessories: Accessory[];
  photos: Photo[];
}
