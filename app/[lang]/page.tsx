import { Metadata } from 'next';
import { SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';
import { createClient } from '@/prismicio';
import { components } from '@/slices';

// ⬇️ Note the imports of `getLocales` and `LanguageSwitcher`
import { getLocales } from '@/app/utils/getLocales';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  try {
    const client = createClient();
    // ⬇️ Note this line with the `lang` parameter being passed in
    const home = await client.getSingle('homepage', { lang });

    return {
      title: home.data.meta_title,
      description: home.data.meta_description,
      openGraph: {
        title: home.data.meta_title || undefined,
        images: [
          {
            url: home.data.meta_image.url || '',
          },
        ],
      },
    };

  } catch (err) {
    console.log("LANG:", lang);
    throw err;
  }
}


export default async function Index({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const client = createClient();

  // ⬇️ Note this line with the `lang` parameter being passed in
  const home = await client.getSingle('homepage', { lang });

	// ⬇️ Note the fetching of the locales
  const locales = await getLocales(home, client);

	// ⬇️ Note the rendering of the LanguageSwitcher component
  return (
    <>
      <Header lang={lang} locales={locales} />
      <SliceZone slices={home.data.slices} components={components} />
      <Footer lang={lang} locales={locales} />
    </>
  );
}