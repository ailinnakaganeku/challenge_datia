import React from 'react';
import { Helmet } from 'react-helmet';

import defaultImage from '../../assets/images/icon.png';

const defaultSeo = {
  title: 'Ailin Nakaganeku | Datia Movie Challenge',
  description: 'Datia Challenge consuming The Movie Database (TMDb) API',
  imageURL: defaultImage,
  publicURL: 'https://datiamovie.herokuapp.com/',
  type: 'website',
};

const Seo = ({ seo = defaultSeo }) => {
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <title>{seo.title}</title>
      <link rel='icon' href='./images/favicon.ico' type='image/x-icon' />
      <meta name='Description' content={seo.description} />
      <meta name='title' property='og:title' content={seo.title} />
      <meta property='og:type' content={seo?.type} />
      <meta
        name='image'
        itemProp='image'
        property='og:image'
        content={seo?.imageURL || defaultSeo.imageURL}
      />
      <meta
        name='description'
        property='og:description'
        content={seo.description}
      />
      <meta
        property='og:url'
        content={seo?.publicURL || defaultSeo.publicURL}
      />
    </Helmet>
  );
};

export default Seo;
