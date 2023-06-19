/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{ appDir: true,},
  reactStrictMode: false,
  images: {
    domains: [
      'eydyfipzeydsfwpfjtjd.supabase.co'
    ]
  }
  
}

module.exports = nextConfig