import React, {useEffect} from 'react'
import Link from "next/link";
import {LinkProps} from "@/app/interfaces/interface";
import style from "./ActiveLink.module.css";
import {usePathname, useRouter} from "next/navigation";
import { useSelectedAlbumStore} from "@/app/store/store";

const ActiveLink = ({text, path, album} : LinkProps) => {
    const pathName = usePathname();
    const selectedAlbum = useSelectedAlbumStore((state: any) => state.selectedAlbum);
    const router = useRouter();
    const handleClick = () => {
        useSelectedAlbumStore.setState({selectedAlbum: album});
        router.push('/view-album')
    }
    return (
        <button
            className={ `${style.link} ${ (pathName === path) && style['active-link'] }` }
            onClick={ () => { handleClick() } }
        >
            { text }
        </button>
    )
}

export default ActiveLink