/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  experimental: { appDir: true },
  pageExtensions: ["tsx", "ts", "jsx", "js"],

  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/madhura-borkar.github.io/' : '',
  basePath: isProd ? '/madhura-borkar.github.io' : '',
  // output: 'export',
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },
          },
        },
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;
    

    return config;
  },
  // async headers() {
  //   return [
  //     {
  //       source: '@/assets/images/',
  //       locale: false,
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=9999999999, must-revalidate',
  //         }
  //       ],
  //     },
  //   ]
  // }

};

export default nextConfig;
