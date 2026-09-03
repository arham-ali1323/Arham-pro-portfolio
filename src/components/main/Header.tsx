import Link from 'next/link'
import React from 'react'
import arham_Avatar from "@/../public/arham-avater.png"
import Image from 'next/image'
import Nav from './Nav'
import { Button } from '../ui/button'
import MobileNav from './MobileNav'


const Header = () => {
    return (
        <header className='py-6 xl:py-6 text-zinc-200'>
            <div className=' container mx-auto flex items-center justify-between'>
                {/* adding logo there  */}


                <Link href={"/"}>
                    <div className='font-bold text-3xl flex pl-4' aria-label='Arham Ali home'>
                        <Image src={arham_Avatar} alt='logo' className='h-15 w-16'>
                        </Image>

                        {/* <span className=' pt-4 text-lime-200 text-opacity-50 font-primary '>Muazam Mughal</span>
                       */} <span className='pt-5  text-orange-400'>.</span>
                    </div>
                </Link>
                {/* thier we gona add the  nevbar */}
                <div className=' hidden lg:flex xl:flex items-center pt-2 gap-6'>
                    <Nav />
                    <div className='flex gap-4'>
                        <Link href={"/contact"}>
                            <Button className=' text-lg  rounded-2xl px-5  bg-orange-500  hover:text-white/90  hover:bg-orange-700'>
                                Hire Me
                            </Button>
                        </Link>
                        <Link href="/schedule">
                            <Button className=' text-lg  rounded-2xl px-5  bg-blue-500  hover:text-white/90  hover:bg-blue-700'>
                                Schedule Meeting
                            </Button>
                        </Link>
                    </div>
                </div>
                {/* Now this is for the moobile nev */}
                <div className=' pr-4  lg:hidden xl:hidden'>
                    <MobileNav />
                </div>



            </div>

        </header>
    )
}

export default Header