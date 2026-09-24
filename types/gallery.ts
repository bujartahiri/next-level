export type ServiceCategory =
  | "Außenreinigung"
  | "Innenraumreinigung"
  | "Lackaufbereitung"
  | "Keramikversiegelung"
  | "Sonderaufbereitung";

export interface GalleryProject {
  id: string;
  carModel: string;
  serviceCategory: ServiceCategory;
  description: string;
  beforeImage: string;
  afterImage: string;
  visible: boolean;
  featured?: boolean;
  duration?: string;
  protection?: string;
  tags?: string[];
  createdAt: string;
}

export interface BookingInquiry {
  carModel: string;
  serviceCategory: ServiceCategory;
  name: string;
  phone: string;
  email?: string;
  preferredDate?: string;
  notes?: string;
}
