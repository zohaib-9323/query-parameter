import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export interface SidebarItem {
  title: string;
  path: string;
  icon: JSX.Element;
  cName: string;
}

export const SidebarData: SidebarItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text',
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
  },
];

export const text = {
  home: 'Home Page',
  homeText: 'Welcome to the Home Page',
  reports: 'Reports',
  support: 'Support',
  team: 'Team',
  product: 'Products',
  message: 'Messages',
};

export const path = {
  home: '/',
  reports: '/reports',
  support: '/support',
  team: '/team',
  message: '/messages',
  product: '/products',
  any: '*',
};

export const className = {
  navbar: 'navbar',
  menuBars: 'menu-bars',
  navMenu: 'nav-menu',
  active: 'active',
};
