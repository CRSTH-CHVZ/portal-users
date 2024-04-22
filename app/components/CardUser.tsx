import React, {useEffect} from 'react'
import {Users} from "@/app/interfaces/interface";
import {useAlbumsStore} from "@/app/store/store";
import Link from "next/link";
import ActiveLink from "@/app/components/active-link/ActiveLink";

const CardUser = ({name, email, id}: Users) => {
    const albums = useAlbumsStore((state: any) => state.albums);
    useEffect(() => {
        console.log(albums)
    }, [albums]);
    return (
        <div className="grid grid-cols-5 md:grid-cols-1 gap-1">
            <div className="bg-white rounded-lg p-4">
                <div className="text-black text-xl font-bold mb-2">{name}</div>
                <div className="text-black text-lg">{email}</div>

                <div className="text-black text-lg">Albúmes disponibles:</div>
                {
                    albums.map((album: any) => {
                        if( album.userId === id) {
                            return <ActiveLink text={ album.title } pathName={`/album/${album.id}`} key={album.id}/>
                        }
                    })
                }


            </div>
        </div>
    )
}

export default CardUser
