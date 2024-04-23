"use client";
import React from 'react'
import Link from "next/link";
import {usePathname} from "next/navigation";
import Image from "next/image";

const Navbar = () => {
    const pathName = usePathname();
  return (
      <nav className="flex bg-gray-100 bg-opacity-30 p-2 m-2 rounded h-12 -mb-16">
          <Link href={'/'} className='flex items-center'>
              <span className="bold">
                  {
                      pathName !== "/" ?
                         "Volver al portal del usuario"
                          :
                          "Bienvenido al portal del usuario"
                  }
              </span>
          </Link>
          <div className='flex flex-1'></div>

      </nav>
  )
}

export default Navbar
