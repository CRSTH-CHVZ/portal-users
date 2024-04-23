"use client";
import React, {useEffect, useState} from 'react'
import {UseSelectedAlbumStore} from "@/app/store/store";
import {getAlbumImages} from "@/app/services/services";

const page = () => {
    const selectedAlbum = UseSelectedAlbumStore((state: any) => state.selectedAlbum);
    const { title, id, userId } = selectedAlbum;
    const [albumImages, setAlbumImages] = useState([]);
    useEffect(() => {
        getAlbumImages(id)
            .then((res: any) => {
                setAlbumImages(res);
            })
    }, []);
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      Album { title }
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                albumImages.map((image: any) => (
                    <div key={image.id}>
                        <img src={image.url} alt={image.title}/>
                        <div>{image.title}</div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default page
