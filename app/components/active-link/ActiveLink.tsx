import React from 'react'
import Link from "next/link";
import {LinkProps} from "@/app/interfaces/interface";
import style from "./ActiveLink.module.css";
import {usePathname} from "next/navigation";

const ActiveLink = ({text, path} : LinkProps) => {
    const pathName = usePathname();
  return (
      <Link
          className={ `${style.link} ${ (pathName === path) && style['active-link'] }` }
          href={ "" }
      >
          { text }
      </Link>
  )
}

export default ActiveLink
