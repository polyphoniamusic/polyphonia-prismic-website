import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

type Params = { uid: string };

export default async function Artistpage({ params }: { params: Params }) {
  const client = createClient();
  const artistpage = await client
    .getByUID("artistpage", params.uid)
    .catch(() => notFound());

  return <SliceZone slices={artistpage.data.slices} components={components} />;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const artistpage = await client
    .getByUID("artistpage", params.uid)
    .catch(() => notFound());

  return {
    title: artistpage.data.meta_title,
    description: artistpage.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("page");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}