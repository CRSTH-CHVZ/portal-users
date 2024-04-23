import React, {useEffect} from 'react'
import Link from "next/link";
import {LinkProps} from "@/app/interfaces/interface";
import style from "./ActiveLink.module.css";
import {usePathname, useRouter} from "next/navigation";
import { useSelectedAlbumStore} from "@/app/store/store";

const ActiveLink = ({text, path, album} : LinkProps) => {
    const pathName = usePathname();
    const router = useRouter();
    const handleClick = () => {
        useSelectedAlbumStore.setState({selectedAlbum: album});
        router.push('/view-album')
    }
    return (
        <div className="ml-4 flex justify-start">
            <button
                className={`${style.link} ${(pathName === path) && style['active-link']} text-start`}
                onClick={() => {
                    handleClick()
                }}
            >
                {text}
            </button>
        </div>
    )
}

export default ActiveLink