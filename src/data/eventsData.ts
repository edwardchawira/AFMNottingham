import { Event } from '../types/types';

const eventsData: Event[] = [
  {
    id: '1',
    title: 'Sunday Worship Service',
    date: 'Every Sunday',
    time: '11:30 AM - 2:00 PM',
    location: 'Beechdale Community Centre',
    description: 'Join us for worship, prayer, and a powerful message from our lead pastor.',
    image: 'https://images.pexels.com/photos/2774548/pexels-photo-2774548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '2',
    title: 'Youth Night',
    date: 'Every Friday',
    time: '7:00 PM - 9:00 PM',
    location: 'Beechdale Community Centre',
    description: 'A night of fun, games, worship, and teaching for young people ages 13-18.',
    image: '/events-youth-night.png',
    registrationLink: '/contact',
  },
  {
    id: '3',
    title: 'Prayer & Intercession',
    date: 'Every Wednesday',
    time: '6:30 PM - 8:00 PM',
    location: 'Church Whatsup Group',
    description: 'A time dedicated to corporate prayer for our church, city, and nation.',
    image: '/events-prayer-intercession.jpg',
  },
  {
    id: '4',
    title: 'Annual Church Conference',
    date: 'August 12-14, 2025',
    time: 'Various Times',
    location: 'Main Sanctuary & Conference Hall',
    description: 'Our annual three-day conference featuring guest speakers, worship, and workshops.',
    image: 'https://images.pexels.com/photos/8101480/pexels-photo-8101480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    registrationLink: '/contact',
  },
  {
    id: '5',
    title: 'Women\'s Fellowship',
    date: 'First Saturday of Every Month',
    time: '10:00 AM - 12:00 PM',
    location: 'Fellowship Hall',
    description: 'A monthly gathering for women to connect, share, and grow together in faith.',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    registrationLink: '/contact',
  },
  {
    id: '6',
    title: 'Men\'s Breakfast',
    date: 'Last Saturday of Every Month',
    time: '8:00 AM - 10:00 AM',
    location: 'Fellowship Hall',
    description: 'A time for men to gather for breakfast, fellowship, and spiritual encouragement.',
    image: 'https://images.pexels.com/photos/6102081/pexels-photo-6102081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    registrationLink: '/contact',
  },
];

export default eventsData;
