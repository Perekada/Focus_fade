import { ServiceItem, BarberItem, GalleryItem } from '../types';

export const ASSETS = {
  logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuf-GLZkn9K5F6-GgH3zZm-OhjJo3joee9gat_xJlBoToAHrj740Kw2AQP5462V6mSJ-ZDS121oA4yt72sjdTFo-00mA6hxjvUtYaERXJXWwJnQfZKGHn3w80sSeAwfHLmVMYj_GmgrbvedfRMSW1piDfLdXNyAWYYgASVSHJauVXeSHFmwnISpcADPDR_UugeByCgdoT3ORyuqpEXDzKVY6gXr2MsTJiUs24bIgXICeVI7iEhkmZy',
  heroBanner: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAI8FCQNwfYD1rjJrvinsn0mTRRfY7Qt76CpRX1cC2wapzrRaEYEpvpzCsig9MQHB-dDTDFIaPXw4TcBrG7T2daevsZ82GWEa_2bck0XmKf_o8eo677tN9frdsPkBn443ER-vQjFrco403LtUYebHbcGRnMM_BHV1-FYzACDmia62MUeQSmPTLy6AGw8YemrP1ia2V_0dpyhgZSC7NsWsTo1flL7hdkApMuEOepC_lU3cAw9Q0A2zlh',
  galleryMain: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJGl_xA_hpZTfOlHAQ_kXi9gBP2Za9fj-sKXU9hxCMHLbv45iKaoFrTJHdc1lUVjMce3VA1WgZMSxUxIJozx0oezdBKMtG6SL-aFOtf1P9-iefSCK3BHm-RCZZrJjtSqxLDkVwYSmzd8OJanbYPBQ6AJu-MRXlkIhSdBpExiAPAJAq7DhBX83MJS2qgcJ23JmmGaI0Ok2J3lvdbr1GmH6SmzWbIhE0LL9IddTbtO_EuRePXRjk4W5h',
  loungeInterior: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANSQtldfX5q3vmQHvwL3z1LnudT7O1-H44rRyxru4DaKD6A7cGmuwnQzQN8Kd4JnXAo4lOX2AWzyZEL_HfrxElH3uaEGTUcoUjF7pXeu4JNzyvp7lBdzNHWIxGJrOBTdICxeW5xjwb6Rjge_Zgq9nx3r09i5mA77koaoWRO_r9FZmY229tao4jeTxiwq1zPK5QiucCFnoka6h1qxX1ymd6AuDhMnezLGhmmF6InGNjF4YyJZvxZ9Jz',
  barberFemi: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLzalBTn6H-PGP-sY8oj_Qrwgtsrq5GrHXVmxsn8PbI3ugeXTtHg2MavTOR7s51YiOaDuezdAbw-lscxps_FZyHtYU1CSeMkTF8A34yNZ4wWrMQqC_OugMlESPH5oHX0sZSEj3_iuSQvF5VHunHRuU1L0akLuuFXN6mhwWUVObbFDcDgiLBXrSkdCOZ6u6dm7sLs7w3qEN2IVpYJX3SfMrbULmxjbHzrNmTuj0a21hWSF0v3gGzO3E',
  barberDavid: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYo6LtDK1iStFpgpGo4sPWXWWUpcc3Oj8W7IzHzrGgks6bty6NcjZZJ56ZNORufNz8rNb7gco9BI0zoXqSPVMQM5pBA5p9kSZ0DCwMzJB4FQObYzlYdwRc2hCQDLKlG_HZ66kxiYwpcYzY9MjEpKc6AjvVjr8lK-h3W57H4OxqMidohi0bIVrnn_QRkuPooLC8Yf4SGf-p8e1MzvwpHu6PxnBE9OlHo-PU-UqanxZcozPmiPv3wjkl',
};

export const SERVICES_MENU: ServiceItem[] = [
  {
    id: 'adults',
    name: 'Adults',
    subtitle: 'Precision cut & style',
    price: 2000,
    formattedPrice: '₦2000',
    duration: '45 mins',
    description: 'Custom tailored consultation, precision fade or taper, razor line-up, styling with premium pomade.',
    category: 'hair',
  },
  {
    id: 'teenagers-children',
    name: 'Teenagers/Children',
    subtitle: 'Ages 16 & under',
    price: 1500,
    formattedPrice: '₦1500',
    duration: '35 mins',
    description: 'Clean modern cuts for youth with razor detailing and kid-friendly styling care.',
    category: 'hair',
  },
  {
    id: 'shaving',
    name: 'Shaving',
    subtitle: 'Classic straight razor',
    price: 2000,
    formattedPrice: '₦2000',
    duration: '30 mins',
    description: 'Hot towel pre-treatment, rich lather application, precision straight-blade shave & soothing balm.',
    category: 'shave',
  },
  {
    id: 'dyeing',
    name: 'Dyeing',
    subtitle: 'Full color or highlights',
    price: 4000,
    formattedPrice: '₦4000',
    duration: '50 mins',
    description: 'Beard enhancement, jet black coverage, blonde highlights or custom pigmentation treatments.',
    category: 'color',
  },
  {
    id: 'washing',
    name: 'Washing/deep cleaning',
    subtitle: 'Scalp detox & conditioning',
    price: 2500,
    formattedPrice: '₦2500',
    duration: '25 mins',
    description: 'Invigorating tea tree scalp wash, deep conditioning massage, hot rinse and blow-dry finish.',
    category: 'special',
  },
  {
    id: 'home-service',
    name: 'home service',
    subtitle: 'VIP on-location session',
    price: 10000,
    formattedPrice: '₦10000',
    duration: '90 mins',
    description: 'Private master barber experience delivered directly to your residence, hotel, or private office.',
    category: 'special',
  },
];

export const VIP_SERVICES: ServiceItem[] = [
  {
    id: 'adult-trim-vip',
    name: 'Adult Trim',
    subtitle: 'Precision cut & style',
    price: 15000,
    formattedPrice: '₦15,000',
    duration: '45 mins',
    description: 'Signature session with hot towel wrap, razor outline, shampoo, scalp massage, and bespoke styling.',
  },
  {
    id: 'teen-child-vip',
    name: 'Teen/Child Cut',
    subtitle: 'Ages 16 & under',
    price: 10000,
    formattedPrice: '₦10,000',
    duration: '35 mins',
    description: 'Tailored sharp cut, textured finish, line-up, and styling product for young gentlemen.',
  },
  {
    id: 'hot-towel-shave-vip',
    name: 'Hot Towel Shave',
    subtitle: 'Classic straight razor',
    price: 8000,
    formattedPrice: '₦8,000',
    duration: '30 mins',
    description: 'Essential oils hot steam towel, badger brush lather, precision straight razor shave, and aftershave splash.',
  },
  {
    id: 'hair-dyeing-vip',
    name: 'Hair Dyeing',
    subtitle: 'Full color or highlights',
    price: 25000,
    formattedPrice: '₦25,000',
    duration: '60 mins',
    description: 'Organic pigment application, grey coverage, custom bleached streaks or beard texturing.',
  },
];

export const BARBERS: BarberItem[] = [
  {
    id: 'femi',
    name: 'Femi',
    role: 'Master',
    experience: '12+ Years Experience',
    avatarUrl: ASSETS.barberFemi,
    bio: 'Specialist in geometric skin fades, razor edge precision, and editorial hair architecture.',
    specialty: 'Skin Fades & Beard Sculpting',
  },
  {
    id: 'david',
    name: 'David',
    role: 'Senior',
    experience: '8 Years Experience',
    avatarUrl: ASSETS.barberDavid,
    bio: 'Master of classic shear work, textured crops, hot towel straight shaves, and hair coloring.',
    specialty: 'Classic Scissor Cuts & Hot Shaves',
  },
  {
    id: 'any',
    name: 'Any Available',
    role: 'Any Available',
    experience: 'Next Available Craftsman',
    avatarUrl: '',
    bio: 'Book the first available master or senior craftsman for minimal wait time.',
    specialty: 'All Precision Services',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Low Drop Fade & Textured Crop',
    category: 'Skin Fade',
    imageUrl: ASSETS.galleryMain,
    barber: 'Marcus (Master)',
  },
  {
    id: 'gal-2',
    title: 'High Top Taper & Sharp Beard Line',
    category: 'Taper Fade',
    imageUrl: ASSETS.heroBanner,
    barber: 'David (Senior)',
  },
  {
    id: 'gal-3',
    title: 'Lounge Atmosphere & Master Station',
    category: 'Studio Atmosphere',
    imageUrl: ASSETS.loungeInterior,
    barber: 'Focus-Fade Studio',
  },
];

export const AVAILABLE_TIME_SLOTS = [
  { time: '10:00 AM', value: '10:00', available: true },
  { time: '11:30 AM', value: '11:30', available: true },
  { time: '1:00 PM', value: '13:00', available: false }, // Booked slot matching mock
  { time: '2:30 PM', value: '14:30', available: true },
  { time: '3:00 PM', value: '15:00', available: true },
  { time: '4:30 PM', value: '16:30', available: true },
  { time: '6:00 PM', value: '18:00', available: true },
];
