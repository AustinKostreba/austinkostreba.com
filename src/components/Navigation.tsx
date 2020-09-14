import {
  UilBracketsCurly,
  UilGithubAlt,
  UilLinkedinAlt,
  UilMapMarkerAlt,
  UilTwitterAlt,
} from '@iconscout/react-unicons'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import Burger from './Burger'
// import { useState } from 'react'

type NavigationLinkProps = {
  href: string
  name: string
  active: boolean
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
  href,
  name,
  active,
}: NavigationLinkProps) => (
  <>
    <Link href={href}>
      <a className={active ? 'text-gray-900' : 'text-gray-400'}>{name}</a>
    </Link>
  </>
)

const Navigation: React.FC = () => {
  const router = useRouter()
  // const [active, setActive] = useState(false)

  return (
    <>
      <ul className="flex items-start justify-between pb-16">
        <li className="flex gap-x-8 items-center">
          <Link href="/">
            <img
              className="h-52 w-52 rounded-full cursor-pointer"
              src="images/austinkostreba.png"
              alt="Austin Kostreba"
            />
          </Link>
          <div className="flex flex-col">
            <Link href="/">
              <span className="text-5xl font-suezOne cursor-pointer leading-12">
                Austin Kostreba
              </span>
            </Link>
            <div className="flex gap-x-2 items-center pt-1">
              <UilBracketsCurly size="1.5rem" color="#4b5563" />
              <span className="text-xl text-gray-600 font-mono">
                Software Engineer
              </span>
            </div>
            <div className="flex gap-x-2 items-center">
              <UilMapMarkerAlt size="1.5rem" color="#4b5563" />
              <span className="text-xl text-gray-600 font-mono">
                Minneapolis, MN
              </span>
            </div>
            <div className="pt-4 flex items-center justify-start gap-x-8">
              <a href="https://github.com/austinkostreba">
                <UilGithubAlt size="2rem" />
              </a>
              <a href="https://twitter.com/austinkostreba">
                <UilTwitterAlt size="2rem" />
              </a>
              <a href="https://linkedin.com/in/austinkostreba">
                <UilLinkedinAlt size="2rem" />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </>
  )
}

export default Navigation
