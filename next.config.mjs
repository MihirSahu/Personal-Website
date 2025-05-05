import createMDX from '@next/mdx'

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};
 
const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})
 
export default withMDX(nextConfig)