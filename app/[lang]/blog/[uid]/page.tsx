import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

type Params = { uid: string };

export default async function Articlepage({ params }: { params: Params }) {
  const client = createClient();
  const articlepage = await client
    .getByUID("articlepage", params.uid)
    .catch(() => notFound());

  return <SliceZone slices={articlepage.data.slices} components={components} />;
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