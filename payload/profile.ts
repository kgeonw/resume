import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/kgeonw.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  image,
  name: {
    title: '김 건 우',
    small: '(Kgeonw)',
  },
  contact: [
    {
      title: 'kgw8919@gmail.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/kgeonw',
      link: 'https://github.com/kgeonw',
      icon: faGithub,
    },
    {
      link: 'https://www.linkedin.com/in/kgeonw',
      icon: faLinkedin,
    },
    {
      title: 'YouTube',
      link: 'https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww',
      // icon: faRss,
      icon: faYoutube,
    },
  ],
  notice: {
    title: 'E-mail, Github를 주로 사용합니다.',
    icon: faBell,
  },
};

export default profile;
