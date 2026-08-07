"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
interface link {
    name: string,
    path: string
}
const links = [
    {
        name: "Home",
        path: "/"
    }, 
     {
        name: "About Me",
        path: "/aboutme"
    },
    {
        name: "Blog",
        path: "/blog"
    },
  
    {
        name: "Resume",
        path: "/resume"
    },
    {
        name: "Work",
        path: "/work"
    },
    {
        name: "Contact",
        path: "/contact"
    }
]
const Nav = () => {
    const pathname = usePathname()
    return (
        <nav className='flex gap-6'>
            {links.map((link: link, index) => {
                return (
                    <Link href={link.path}
                        key={index}
                        target={link.path.startsWith('http') ? '_blank' : '_self'}
                        rel={link.path.startsWith('http') ? 'noopener noreferrer' : ''}
                        className={`${link.path == pathname &&
                            " text-orange-300 border-b-4 font-bold  border-orange-800"}
           font-medium  text-slate-900  dark:text-white rounded-md p-2 transition-all hover:bg-orange-600`}>
                        {link.name}

                    </Link>
                )
            })}

        </nav>
    )
}

export default Nav