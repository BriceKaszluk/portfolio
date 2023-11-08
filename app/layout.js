import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        <title>
          Brice - Développeur Full Stack Spécialisé en React | Portfolio
        </title>
        <meta
          name="description"
          content="Découvrez le portfolio de Brice, développeur Full Stack spécialisé en React, Node.js, et technologies modernes du web. Passionné et prêt à relever de nouveaux défis."
        />
        <meta
          name="keywords"
          content="Brice, Développeur Full Stack, React, Next.js, Node.js, Supabase, PostgreSQL, Firebase, Material UI, Tailwind CSS, AWS, Développement Web, Portfolio"
        />
        <link rel="canonical" href="https://votre-domaine.com" />
        <meta
          property="og:title"
          content="Brice - Développeur Full Stack Spécialisé en React | Portfolio"
        />
        <meta
          property="og:description"
          content="Un développeur animé par une passion pour le web et la création d'expériences utilisateurs captivantes. Découvrez mon parcours et mes projets."
        />
        <meta property="og:image" content="https://portfolio-og.png" />
        <meta property="og:url" content="https://votre-domaine.com" />
        <meta property="og:site_name" content="Portfolio de Brice" />
        {/* Ajoutez le fichier favicon.ico dans le dossier public */}
        <link rel="icon" href="/favicon.ico" />
        {/* Si vous avez un compte LinkedIn, vous pouvez ajouter le lien ici */}
        <link rel="me" href="https://www.linkedin.com/in/bricekaszluk" />
        <meta name="author" content="Brice, kaszlukb@gmail.com" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
