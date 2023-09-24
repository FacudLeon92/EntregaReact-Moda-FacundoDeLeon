import {
  Facebook,
  Twitter,
  Instagram,
  MailOutline,
  Phone,
  Room,
} from '@material-ui/icons';

// objects footer

export const e = [
  {
    id: 21,
    route: '/products/camisas',
    name: 'Camisas',
  },
  {
    id: 22,
    route: '/cart',
    name: 'Mi Carrito',
  },

  {
    id: 23,
    route: '/products/abrigos',
    name: 'Abrigos',
  },
  {
    id: 24,
    route: '/',
    name: 'Mi cuenta',
  },
  {
    id: 25,
    route: '/products/chaquetas',
    name: 'Chaquetas',
  },
  {
    id: 26,
    route: '/',
    name: 'política de privacidad',
  },

  {
    id: 27,
    route: '/',
    name: 'Inicio',
  },
  {
    id: 28,
    route: '/',
    name: 'Términos',
  },
];

export const social = [
  {
    id: 31,
    icon: <Facebook />,
    platform: 'Facebook',
    color: '3B5999',
    link: 'https://www.facebook.com',
  },
  {
    id: 32,
    icon: <Twitter />,
    platform: 'Tiwtter',
    color: '55ACEE',
    link: 'https://www.twitter.com',
  },
  {
    id: 33,
    icon: <Instagram />,
    platform: 'Instagram',
    color: 'E4405F',
    link: 'https://www.instagram.com',
  },
];

export const contact = [
  {
    id: 331,
    icon: <Room style={{ marginRight: '10px' }} />,
    text: 'Montevideo, Uruguay',
  },
  {
    id: 332,
    icon: <Phone style={{ marginRight: '10px' }} />,
    text: '+598 92 803 418',
  },
  {
    id: 333,
    icon: <MailOutline style={{ marginRight: '10px' }} />,
    text: 'tiendar@gmail.com',
    url: 'https://www.google.com/intl/es/gmail/about/',
  },
];
