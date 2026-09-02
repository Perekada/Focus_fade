export interface ServiceItem {
  id: string;
  name: string;
  subtitle?: string;
  price: number;
  formattedPrice: string;
  duration?: string;
  description?: string;
  category?: 'hair' | 'shave' | 'color' | 'special';
}

export interface BarberItem {
  id: string;
  name: string;
  role: 'Master' | 'Senior' | 'Lead Stylist' | 'Any Available';
  experience?: string;
  avatarUrl?: string;
  bio?: string;
  specialty?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  barber?: string;
}

export interface BookingData {
  id?: string;
  serviceId: string;
  serviceName: string;
  servicePrice: number;
  barberId: string;
  barberName: string;
  date: string;
  time: string;
  fullName: string;
  email: string;
  phone: string;
  notes?: string;
  createdAt: string;
  status: 'Confirmed' | 'Pending' | 'Completed';
}
