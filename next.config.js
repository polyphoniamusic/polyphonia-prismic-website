const prismic = require("@prismicio/client");
const sm = require("./slicemachine.config.json");

/** @type {import('next').NextConfig} */

const nextConfig = async () => {
  const client = prismic.createClient(sm.repositoryName);

  const repository = await client.getRepository();

  return {
    reactStrictMode: true,
  };
};

module.exports = nextConfig