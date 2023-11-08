import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Brice - Développeur Full Stack Spécialisé en React | Portfolio',
  description: 'Découvrez le portfolio de Brice, développeur Full Stack spécialisé en React, Node.js, et technologies modernes du web. Passionné et prêt à relever de nouveaux défis.',
  openGraph: {
    title: 'Brice - Développeur Full Stack Spécialisé en React | Portfolio',
    description: 'Un développeur animé par une passion pour le web et la création d\'expériences utilisateurs captivantes. Découvrez mon parcours et mes projets.',
    images: [
      {
        url: 'https://portfolio-kaszluk-brice.vercel.app/portfolio-og.png',
        width: 1200,
        height: 630,
        alt: 'Brice Kaszluk Portfolio'
      }
    ],
    url: 'https://portfolio-kaszluk-brice.vercel.app',
    site_name: 'Portfolio de Brice',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bricekaszluk',
    title: 'Brice - Développeur Full Stack Spécialisé en React | Portfolio',
    description: 'Découvrez le portfolio de Brice, développeur Full Stack spécialisé en React, Node.js, et technologies modernes du web.',
    image: 'https://portfolio-kaszluk-brice.vercel.app/portfolio-og.png',
    creator: '@bricekaszluk'
  },
  keywords: ['Brice', 'Développeur Full Stack', 'React', 'Next.js', 'Node.js', 'Supabase', 'PostgreSQL', 'Firebase', 'Material UI', 'Tailwind CSS', 'AWS', 'Développement Web', 'Portfolio'],
  author: 'Brice Kaszluk',
  canonical: 'https://portfolio-kaszluk-brice.vercel.app',
  // Add any other metadata fields you need
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
