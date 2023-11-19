import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import { getLocales } from '@/app/utils/getLocales';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

type Params = { uid: string; lang: string };

export default async function Articlepage({ params }: { params: Params }) {
  const client = createClient();
  const articlepage = await client
    .getByUID("articlepage", params.uid, { lang: params.lang })
    .catch(() => notFound());

    const locales = await getLocales(articlepage, client);

  return (
    <>
      <Header lang={params.lang} locales={locales} />
      <SliceZone slices={articlepage.data.slices} components={components} />
      <Footer lang={params.lang} locales={locales} />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const articlepage = await client
    .getByUID("articlepage", params.uid)
    .catch(() => notFound());

  return {
    title: articlepage.data.meta_title,
    description: articlepage.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("page");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}