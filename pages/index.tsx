import type { NextPage } from 'next'
import Logo from '../components/Logo'
import { NextSeo } from 'next-seo'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Ashraf Latif | full-stack developer from Penang, Malaysia"
        description="Web application developer who codes in Javascript, TypeScript, React, Next.js, Node.js, Express, GraphQL, MongoDB, MySQL, PostgreSQL, and more."
      />
      <div className="container space-y-8 p-4 md:max-w-4xl md:space-y-16 md:px-32 md:pt-28">
        <div className="text-white">
          <Logo />
        </div>

        <div className="space-y-8">
          <p className="text-2xl">
            <span className="font-bold">Ceghap</span> is a full-stack developer
            based in Penang, Malaysia. He love building app and exploring newer
            technology in his spare time.
          </p>
          <p className="text-2xl">
            He is currently in love with{' '}
            <span className="border-b-2 border-black font-bold">Node.js</span>{' '}
            and{' '}
            <span className="border-b-2 border-black font-bold">React.js</span>{' '}
            .
          </p>
          <p className="text-2xl">
            This website is proof of his existence. Kind of.
          </p>
        </div>

        <div className="flex space-x-8">
          <a href="https://twitter.com/ceghap">
            <img
              className="w-10"
              alt="Twitter"
              src="/images/logo-twitter.svg"
            />
          </a>
          <a href="https://github.com/ceghap">
            <img className="w-10" alt="Github" src="/images/logo-github.svg" />
          </a>
          <a href="https://dribbble.com/ceghap">
            <img
              className="w-10"
              alt="dribbble"
              src="/images/logo-dribbble.svg"
            />
          </a>
        </div>
        <p className="fixed bottom-4 text-xs text-gray-400 ">
          © {new Date().getFullYear()} Ceghap
        </p>
      </div>
    </>
  )
}

export default Home
