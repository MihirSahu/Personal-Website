import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};
 
const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})
 
export default withMDX(nextConfig)