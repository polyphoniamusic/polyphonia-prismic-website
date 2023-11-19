import { PrismicNextLink } from '@prismicio/next';
import Image from 'next/image';
import LangIconWhite from '@/public/assets/images/icons/lang-icon-white.svg';
import { useState } from 'react';

interface LanguageSwitcherProps {
  locales: {
    lang: string;
    lang_name: string;
    url: string;
  }[];
}

const localeLabels = {
  'en-us': 'EN',
  'fr-fr': 'FR',
};

export const LanguageSwitcher = ({ locales }: LanguageSwitcherProps) => {
  return (
    <div className="header-lang-container">
      <div className="header-lang-block">
        {locales.map((locale) => (
          <ul key={locale.lang}>
            <li>
              <a
                className="header-lang-block-item"
                href={locale.url}
                aria-label={`Change language to ${locale.lang_name}`}
              >
                {localeLabels[locale.lang as keyof typeof localeLabels] || locale.lang}
              </a>
            </li>
          </ul>
        ))}
      </div>
      <div className="header-lang-button">
        <Image src={LangIconWhite} alt="Lang Icon White"/>
      </div>
    </div>
  );
};
