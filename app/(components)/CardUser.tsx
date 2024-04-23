import React from 'react'
import {Users} from "@/app/interfaces/interface";
import {useAlbumsStore} from "@/app/store/store";
import ActiveLink from "@/app/(components)/active-link/ActiveLink";

const CardUser = ({name, email, id, company, phone}: Users) => {
    const albums = useAlbumsStore((state: any) => state.albums);
    return (
        <div className="grid grid-cols-5 md:grid-cols-1 gap-1 ">
            <div className="bg-white rounded-lg p-4">
                <div className="text-black text-xl font-bold mb-2 flex justify-center">{name}</div>
                <div className="text-black text-lg flex justify-center">{email}</div>
                <div className="text-black text-lg flex justify-center">{company.name}</div>
                <div className="text-black text-lg flex justify-center">{phone}</div>

                <div className="text-black text-lg font-bold">Albumes disponibles:</div>
                {
                    albums.map((album: any) => {
                        if( album.userId === id) {
                            return <ActiveLink text={ album.title } path={`/album/${album.id}`} key={album.id} album={ album }/>
                        }
                    })
                }


            </div>
        </div>
    )
}

export default CardUser
