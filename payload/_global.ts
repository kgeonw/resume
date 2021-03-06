import favicon from '../asset/favicon.ico';
import previewImage from '../asset/kgeonw.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = 'RESUME-NEXTJS Sample Page';
const description = 'This is a simple web resume sample.';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'OpenGraph Image Sample.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'GeonWoo',
        lastName: 'Kim',
        username: 'kgeonw',
        gender: 'male',
      },
    },
  },
};
