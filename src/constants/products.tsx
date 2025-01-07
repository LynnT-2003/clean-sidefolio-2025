import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

import mahavertex from "public/images/mahavertex.png";
import mahavertex1 from "public/images/mahavertex1.png";

import prismaforge from "public/images/prismaforge.png";
import prismaforge2 from "public/images/prismaforge2.png";

import cyberpunk from "public/images/cyberpunk.png";
import cyberpunk2 from "public/images/cyberpunk2.png";

import motion from "public/images/motion.png";
import motion2 from "public/images/motion2.png";

import lynnstore from "public/images/lynnstore.png";
import lynnstore2 from "public/images/lynnstore2.png";

import threed from "public/images/threed.png";
import threed2 from "public/images/threed2.png";

import gsap from "public/images/gsap.png";
import gsap2 from "public/images/gsap2.png";

export const products = [
  {
    href: "https://prismaforge.vercel.app/",
    title: "ChristmasForge",
    description:
      "An AI powered web application to generate and transform images using custom-trained Stable Diffusion Models through image uploads.",
    thumbnail: prismaforge,
    images: [prismaforge, prismaforge2],
    stack: ["Nextjs", "Tailwindcss", "Firebase", "MongoDB", "AI"],
    slug: "aceternity",
    content: (
      <div>
        <p>
          Worked as a team of 4 over a quick course of 2 months to come up with
          an MVP product showcasing the potential of generative AI. Adopted an
          agile methodology to ensure improved results are always delivered in
          time.
        </p>
        <p>
          Designed and developed a fully mobile-responsive web application that
          transforms and generates a user&rsquo;s portrait into a Cartoon-Styled
          Christmas theme through a Gacha system. The project featuered 4
          models, turning users into either an Elf, Reindeer, Santa, or a rare
          &rsquo;Christmas Padoru&rsquo; cartoon character.
        </p>
        <p>
          Designed and built a complete Image Storage Architecture to store
          image history for signed in users featuring Firebase User
          Authentication, Cloudinary Image Storage, and MongoDB Cloud Database
          Storage to ensure a secure, scalable, and seamless experience for
          users.
        </p>
        <p>
          The app was showcased at Baksters Office during the company&rsquo;s
          Christmas Showcase. Overall, users enjoyed the app and provided
          positive feedback, including comments such as “The app is very good”
          and “The AI-generated image looks much better than the real image.”
        </p>
      </div>
    ),
  },
  {
    href: "https://mahavertex.com",
    title: "MahaVertex Realty",
    description:
      "Fully mobile-responsive real estate website for a modern real estate company residing in Thailand, catered to the Burmese community.",
    thumbnail: mahavertex,
    images: [mahavertex, mahavertex1],
    stack: ["Nextjs", "Tailwindcss", "Sanity", "Google Maps API"],
    slug: "mahavertex",
    content: (
      <div>
        <p> </p>
        <p>
          Worked as a team of 3 over a course of 5-6 months, leading the project
          as a lead fontend developer as well as a project manager in order to
          hit deadlines with the highest efficiency. Adopted an agile
          methodology to ensure improved results are always delivered in time,
          and visible progress is made every sprint alongside client validation.{" "}
        </p>
        <p>
          The MVP of this project was the advanced search algorithm I introduced
          to the team and client, successfully building the added feature within
          a limited period of time using NLP and REGEX alongside location based
          queries and additional filter parameters. By leveraging NLP, the
          search functionality could intelligently interpret user queries,
          accommodating variations in phrasing and delivering accurate results.
          For example, queries like &quot;2-bedroom apartment near BTS&quot; or
          &quot;houses under $500K with a garden&quot; were seamlessly
          processed, offering a more natural and intuitive experience for users.{" "}
        </p>
        <p>
          Overall, the clients were thrilled with the results, praising the
          intuitive design, advanced search functionality, and responsiveness of
          the platform. They expressed immense satisfaction with how the
          features effectively addressed their business needs and exceeded their
          expectations.
        </p>
        <p>
          Delivering such impactful results was a testament to the team&rsquo;s
          dedication and strategic approach, as well as the value of agile
          methodologies in adapting to challenges and ensuring continuous
          improvement throughout the project&rsquo;s lifecycle.
        </p>
      </div>
    ),
  },
  {
    href: "https://lynn-profile-2025.vercel.app/",
    title: "Modern ScrollTrigger Template",
    description:
      "A modern scrolltrigger portfolio template, mimicing an awwwards winning website, with a clean developer-friendly code architecture built using GSAP.",
    thumbnail: gsap,
    images: [gsap, gsap2],
    stack: ["Nextjs", "Tailwindcss", "GSAP", "Three.js"],
    slug: "modern-scrolltrigger",
    content: (
      <div>
        <p></p>
      </div>
    ),
  },
  {
    href: "https://lynn-thit-2025.vercel.app/",
    title: "Modern 3D Portfolio Template",
    description:
      "A 3D portfolio template with a clean developer-friendly code architecture built with Three.js and React Three Fiber.",
    thumbnail: threed,
    images: [threed, threed2],
    stack: ["Nextjs", "Tailwindcss", "Three.js", "React Three Fiber"],
    slug: "3Dportfolio",
    content: (
      <div>
        <p></p>
      </div>
    ),
  },

  {
    href: "https://ecommerce-sanity-stripe-lynnt-2003.vercel.app/",
    title: "LynnStore Ecommerce",
    description:
      "Fully functional ecommerce website built with Next.js, Tailwind CSS, Sanity and Stripe.",
    thumbnail: lynnstore,
    images: [lynnstore, lynnstore2],
    stack: ["Nextjs", "Tailwindcss", "Sanity", "Stripe"],
    slug: "cyberpunk",
    content: (
      <div>
        <p></p>
      </div>
    ),
  },
  {
    href: "https://cyberpunk-edgerunners.vercel.app/",
    title: "Cyberpunk Edgerunners: Showcase",
    description:
      "A Cyberpunk 2077 inspired website built with Next.js and Tailwind CSS.",
    thumbnail: cyberpunk,
    images: [cyberpunk, cyberpunk2],
    stack: ["Nextjs", "Tailwindcss", "ShadCN"],
    slug: "cyberpunk",
    content: (
      <div>
        <p></p>
      </div>
    ),
  },
  {
    href: "https://plynnko-fun.vercel.app/Game",
    title: "React Gesture Controlled Game App",
    description:
      "A gesture controlled game app built with Tensorflow and Handpose Model.",
    thumbnail: motion,
    images: [motion, motion2],
    stack: ["Nextjs", "Tailwindcss", "Tensorflow", "Handpose Model"],
    slug: "react-gesture",
    content: (
      <div>
        <p></p>
      </div>
    ),
  },
];
