import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
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
      <div className="flex h-full flex-col md:flex-row min-h-screen">
        {/* Colonne de gauche */}
        <div className="md:w-1/4 p-4 flex flex-col justify-around text-center">
          <h1 className="mb-2 border-b-0 border border-gray-500 p-4 rounded-t-xl">
            Développeur Full Stack spécialisé en React
          </h1>

          <div>
            <Image
              src="/profil-ronde.png"
              alt="ma photo de profil"
              width={192}
              height={192}
              className="mx-auto rounded-full mb-4 border border-gray-500 shadow-md"
            />
            <div className="text-center mt-6">
              <a
                href="https://www.linkedin.com/in/bricekaszluk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-xl text-white font-bold py-2 px-4 rounded inline-flex items-center space-x-2"
              >
                Contact
                <Image
                  src="/linkedin.png"
                  alt="Logo LinkedIn"
                  width={32}
                  height={32}
                  className="rounded-full ml-2 cursor-pointer transition-transform transform-gpu hover:scale-110 active:scale-95"
                />
              </a>
            </div>
          </div>
          <div className="border border-gray-500 p-4 shadow-md border-t-0 rounded-b-xl">
            <h2 className="mb-4">A propos</h2>
            <div>
              <p>
                Un développeur animé par une passion débordante pour le monde du
                web et ses possibilités infinies.
              </p>
              <p>
                Mon parcours est jalonné par des projets qui reflètent non
                seulement mon savoir-faire technique, mais surtout mon
                engagement à créer des expériences utilisateur captivantes et
                significatives.
              </p>
              <p>
                Que ce soit en collaborant étroitement avec des startups ou en
                menant des projets personnels, je mets mon cœur à l&apos;ouvrage
                pour que chaque interaction sur le web soit plus intuitive,
                sécurisée et agréable.
              </p>
              <p>
                Ma vision du développement est simple : il s&apos;agit de tisser
                des liens entre les gens et l&apos;information, avec créativité
                et humanité.
              </p>
            </div>
          </div>
        </div>

        {/* Colonne centrale */}
        <div className="md:w-2/4 p-4 relative">
          <div className="absolute w-full h-full md:bg-[#1c212d]/40"></div>
          <div className="w-full h-[50vh] md:h-screen relative">
            <Image
              src="/background-portfolio.png"
              alt="un développeur travaillant sur son ordinateur"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          {/* Contenu de la colonne centrale */}
        </div>

        {/* Colonne de droite */}
        <div className="md:w-1/4 p-4">
          <div className="relative flex justify-center">
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="rounded-full shadow-lg animate-ping slow-ping bg-amber-300 opacity-75 w-44 h-44"></div>
            </div>
            <div className="relative z-10 w-80 h-80 mb-4 overflow-hidden rounded-full">
              <Image
                src="/ampoule.png"
                alt="une ampoule à l'intérieur d'un éclair"
                layout="fill"
                objectFit="contain"
                className="rounded-full"
              />
            </div>
          </div>

          <div className="p-5 w-full mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-4">
              <h3 className="w-full text-center text-2xl font-bold mb-4">
                Compétences Techniques
              </h3>
              <span className="bg-blue-500 text-black px-4 py-1 rounded-full shadow-lg">
                React / Next.js
              </span>
              <span className="bg-green-500 text-black px-4 py-1 rounded-full shadow-lg">
                Node.js
              </span>
              <span className="bg-purple-500 text-black px-4 py-1 rounded-full shadow-lg">
                Supabase
              </span>
              <span className="bg-red-500 text-black px-4 py-1 rounded-full shadow-lg">
                PostgreSQL
              </span>
              <span className="bg-orange-500 text-black px-4 py-1 rounded-full shadow-lg">
                GCP
              </span>
              <span className="bg-yellow-500 text-black px-4 py-1 rounded-full shadow-lg">
                Firebase
              </span>
              <span className="bg-teal-500 text-black px-4 py-1 rounded-full shadow-lg">
                Material UI
              </span>
              <span className="bg-indigo-500 text-black px-4 py-1 rounded-full shadow-lg">
                Tailwind CSS
              </span>

              <h3 className="w-full text-center text-2xl font-bold mt-6 mb-4">
                Soft Skills
              </h3>
              <span className="bg-pink-500 text-black px-4 py-1 rounded-full shadow-lg">
                Créativité
              </span>
              <span className="bg-gray-500 text-black px-4 py-1 rounded-full shadow-lg">
                Communication
              </span>
              <span className="bg-yellow-300 text-black px-4 py-1 rounded-full shadow-lg">
                Esprit d&apos;équipe
              </span>
              <span className="bg-green-300 text-black px-4 py-1 rounded-full shadow-lg">
                Proactivité
              </span>
            </div>
          </div>
          <div className="text-center mt-6">
            <a
              href="https://www.linkedin.com/in/bricekaszluk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-xl text-white font-bold py-2 px-4 rounded inline-flex items-center space-x-2"
            >
              Ces compétences m&apos;intéressent !
            </a>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex flex-col justify-evenly items-center text-white bg-[#1c212d] px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <blockquote className="italic text-gray-400 text-lg border-b border-gray-600 pb-4">
              &quot;I highly recommend Brice for any development project. I had
              the pleasure of working closely with him on both the backend
              (particularly involving AWS Lambda, microservices and TypeScript)
              and frontend (React) aspects of a project, and I must say that his
              dedication and motivation were truly exceptional. Brice actively
              participated in design discussions, providing valuable insights
              and contributing to the team&apos;s success.&quot;
            </blockquote>
            <div className="pt-4">
              <p className="font-bold">Xavier Chemla</p>
              <p className="text-sm text-gray-500">
                Senior Full Stack Engineer at Cisco Meraki
              </p>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">
              Mes Envies Futures et Objectifs
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Rejoindre une équipe dynamique où je pourrais m&apos;épanouir
                professionnellement.
              </li>
              <li>
                Acquérir des compétences approfondies sur AWS pour renforcer mon
                profil backend.
              </li>
              <li>
                Développer des solutions innovantes contribuant à des projets à
                impact positif.
              </li>
              <li>
                Participer à des projets open-source pour enrichir la communauté
                de développeurs.
              </li>
              <li>
                Continuer mon développement personnel en suivant les dernières
                tendances technologiques.
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12 w-full">
          <p className="text-2xl font-bold text-white mb-2 text-center">
            Découvrez mes projets ci-dessous
          </p>
          <div className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mx-auto text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className=" mx-auto px-4 py-8 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-4">
          {/* Projet 1 */}
          <div className="block shadow-lg md:min-h-screen border border-gray-500">
            <div className="relative w-full md:h-1/2">
              {/* Image container */}
              <Image
                src="/weneedlove-picture.png"
                alt="WeNeedLove"
                layout="responsive"
                width={100}
                height={50}
                objectFit="contain"
                quality={100}
              />
            </div>

            {/* Project Information */}
            <div className="p-4 h-1/2 flex flex-col justify-between">
              <h3 className="font-bold text-white">WeNeedLove</h3>
              <p className="text-white mt-2">
                WeNeedLove est une application dédiée à la création de liens par
                le partage d&apos;histoires personnelles touchantes, favorisant
                le soutien mutuel et l&apos;expression des émotions au sein
                d&apos;une communauté bienveillante.
              </p>
              <ul className="list-disc pl-5 mt-2 text-white">
                <li className="mt-4">
                  Conception d&apos;une plateforme de soutien permettant de
                  partager des histoires et d&apos;offrir/recevoir du soutien.
                </li>
                <li className="mt-4">
                  Authentification des utilisateurs et gestion des données
                  réalisées avec Supabase.
                </li>
                <li className="mt-4">
                  Développement d&apos;une interface utilisateur conviviale et
                  rassurante pour encourager la participation.
                </li>
                <li className="mt-4">
                  Implémentation d&apos;un système de notifications pour tenir
                  les utilisateurs informés des dernières interactions.
                </li>
              </ul>
              <div className="mt-4">
                <span className="font-semibold text-white">
                  Compétences clés :
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    Vercel
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    Supabase
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    Tailwind CSS
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    GitHub
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    Next.js
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    React.js
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    JavaScript
                  </span>
                </div>
              </div>

              {/* Project Access Button */}
              <Link
                href="https://www.weneedlove.fr/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="mt-4 py-2 px-4 bg-blue-500 text-white font-bold text-center rounded hover:bg-blue-600 transition duration-300">
                  Voir le projet
                </div>
              </Link>
            </div>
          </div>

          {/* Projet 2 */}
          <div className="block shadow-lg md:min-h-screen border border-gray-500">
          <div className="relative w-full md:h-1/2">
              {/* Image container */}
              <Image
                src="/phishing-detector-picture.png"
                alt="phishing-detector"
                layout="responsive"
                width={100}
                height={50}
                objectFit="contain"
                quality={100}
              />
            </div>
            <div className="p-4 h-1/2 flex flex-col justify-between">
              <h3 className="font-bold">Phishing Detection App</h3>
              <p className="text-white mt-2">
                Une solution innovante d&apos;analyse de phishing qui permet aux
                utilisateurs de scanner et d&apos;obtenir un score de sécurité
                pour chaque e-mail, assurant une protection avancée contre les
                cybermenaces.
              </p>
              <ul className="list-disc pl-5 mt-2 text-white">
                <li className="mt-4">
                  Développement d&apos;un algorithme personnalisé pour
                  l&apos;analyse des e-mails et la détection des tentatives de
                  phishing.
                </li>
                <li className="mt-4">
                  Authentification sécurisée via le compte Google de
                  l&apos;utilisateur.
                </li>
                <li className="mt-4">
                  Importation et analyse des e-mails de l&apos;utilisateur avec
                  l&apos;API Gmail, sans conservation des données pour une
                  confidentialité totale.
                </li>
                <li className="mt-4">
                  Conception d&apos;une base de données robuste avec Supabase
                  pour gérer le traitement des e-mails.
                </li>
              </ul>
              <div className="mt-4">
                <span className="font-semibold">Compétences clés :</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    TypeScript
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    Vercel
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    Material-UI
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    Supabase
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    Tailwind CSS
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    GitHub
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    Next.js
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    Sens de l’organisation
                  </span>
                </div>
              </div>
              <Link
                href="https://www.phishing-detector.fr/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="mt-4 py-2 px-4 bg-blue-500 text-white font-bold text-center rounded hover:bg-blue-600 transition duration-300">
                  Voir le projet
                </div>
              </Link>
            </div>
          </div>

          {/* Projet 3 */}
          <div className="block shadow-lg md:min-h-screen border border-gray-500">
          <div className="relative w-full md:h-1/2">
              {/* Image container */}
              <Image
                src="/webvista-picture.png"
                alt="webvista"
                layout="responsive"
                width={100}
                height={50}
                objectFit="contain"
                quality={100}
              />
            </div>
            <div className="p-4 h-1/2 flex flex-col justify-between">
              <h3 className="font-bold">Mon Site Webvista</h3>
              <p className="text-white mt-2">
                Mon site personnel conçu pour mettre en avant mon expertise et
                atteindre la première position sur le mot clé
                &quot;Webvista&quot; dans les résultats de recherche, grâce à
                une stratégie SEO pointue.
              </p>
              <ul className="list-disc pl-5 mt-2 text-white">
                <li className="mt-4">
                  Développement du site axé sur l&apos;augmentation de la
                  visibilité en ligne personnelle.
                </li>
                <li className="mt-4">
                  Atteinte de la première position dans les résultats de
                  recherche Google pour "Webvista".
                </li>
                <li className="mt-4">
                  Application des meilleures pratiques SEO pour un référencement
                  optimal.
                </li>
                <li className="mt-4">
                  Création d&apos;une interface utilisateur claire et attrayante
                  pour une expérience visiteur améliorée.
                </li>
              </ul>
              <div className="mt-4">
                <span className="font-semibold">Compétences clés :</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    SEO
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    Vercel
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    Tailwind CSS
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    GitHub
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    Next.js
                  </span>
                </div>
              </div>
              <Link
                href="https://www.webvista.fr/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="mt-4 py-2 px-4 bg-blue-500 text-white font-bold text-center rounded hover:bg-blue-600 transition duration-300">
                  Voir le projet
                </div>
              </Link>
            </div>
          </div>

          {/* Projet 4 */}
          <div className="block shadow-lg md:min-h-screen border border-gray-500">
          <div className="relative w-full md:h-1/2">
              {/* Image container */}
              <Image
                src="/christian-picture.png"
                alt="christian photograpahie"
                layout="responsive"
                width={100}
                height={50}
                objectFit="contain"
                quality={100}
              />
            </div>
            <div className="p-4 h-1/2 flex flex-col justify-between">
              <h3 className="font-bold">Site Vitrine pour Photographe</h3>
              <p className="text-white mt-2">
                Un site élégant et interactif permettant au photographe de
                présenter son travail à travers un carousel personnalisable, de
                gérer ses albums et ses tarifs grâce à un tableau de bord
                sécurisé.
              </p>
              <ul className="list-disc pl-5 mt-2 text-white">
                <li className="mt-4">
                  Mise en place d&apos;un espace administrateur pour la gestion
                  des contenus et des tarifs en toute autonomie.
                </li>
                <li className="mt-4">
                  Authentification sécurisée pour accéder au tableau de bord du
                  photographe.
                </li>
                <li className="mt-4">
                  Intégration de fonctionnalités pour la création et gestion des
                  albums photo.
                </li>
                <li className="mt-4">
                  Analyse de la fréquentation du site grâce à des outils
                  analytics avancés.
                </li>
              </ul>
              <div className="mt-4">
                <span className="font-semibold">Compétences clés :</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    Vercel
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    Next.js
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    TypeScript
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    Tailwind CSS
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    Supabase
                  </span>
                </div>
              </div>
              <Link
                href="https://christian-free-nextjs.vercel.app/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="mt-4 py-2 px-4 bg-blue-500 text-white font-bold text-center rounded hover:bg-blue-600 transition duration-300">
                  Voir le projet
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-[#1c212d] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Vous avez besoin d&apos;un développeur passionné ?
          </h2>
          <p className="mb-8 text-center">
            Je suis prêt à apporter mon expertise à votre projet et à relever de
            nouveaux défis. Contactez-moi pour commencer une collaboration
            fructueuse.
          </p>
          <div className="text-center mt-6">
            <a
              href="https://www.linkedin.com/in/bricekaszluk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-xl text-white font-bold py-2 px-4 rounded inline-flex items-center space-x-2"
            >
              Contactez-moi
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center p-4">
        <div className="flex justify-center items-center">
          <p className="text-sm">© 2023 Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
