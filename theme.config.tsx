import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import Footer from "./components/footer";
const config: DocsThemeConfig = {
  head: () => {
    return <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="charset" content="utf-8" />
      <meta name="color-scheme" content="dark light" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    </>;
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Docs'
    };
  },
  logo: <svg viewBox="0 0 425 200" height={40}>
      <view id="flame" viewBox="0 0 160 200" />
      <view id="name" viewBox="240 78 185 122" />
      <path fill="currentColor" d="M394.5 78v28.8H425v15.6h-30.5V158c0 3.6.1 7.2.5 10.3.8 5.3 4 10.5 8.4 12.5 5.7 2.6 9.7 2.1 21.6 1.7l-2.9 17.2c-.8.4-4 .3-7 .3-7 0-33.4 2.5-38.8-24.7-.9-4.7-.7-9.5-.7-16.9v-35.8H362l.2-15.9h13.4V78zm-51.7 28.7v91.5H324v-91.5zm0-28.7v16.3h-19V78zm-83.6 102.2h48.2l-18 18H240V78h19.2z" />
      <path fill="#00e8ff" d="M40 120l20-60l90 90l-30 50l-40-40h-20" />
      <path fill="#283198" d="M80 160v-80l40-40v80M0 160l40 40l20-40l-20-40h-20" />
      <path fill="#324fff" d="M40 120v-80l40-40v80M120 200v-80l40-40v80M0 160v-80l40 40" />
      <path fill="#0ff" d="M40 200v-80l40 40" />
    </svg>,
  editLink: {
    text: "编辑此页"
  },
  feedback: {
    content: "反馈"
  },
  project: {
    link: 'https://github.com/startracex',
  },
  docsRepositoryBase: 'https://github.com/startracex/lit-docs-chinese/blob/main',
  footer: {
    component: Footer
  },
};

export default config;
