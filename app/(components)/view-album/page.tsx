"use client";
import React, {useEffect, useState} from 'react'
import {useSelectedAlbumStore} from "@/app/store/store";
import {getAlbumImages} from "@/app/services/services";

const page = () => {
    const selectedAlbum = useSelectedAlbumStore((state: any) => state.selectedAlbum);
    const { title, id, userId } = selectedAlbum;
    const [albumImages, setAlbumImages] = useState([]);
    useEffect(() => {
        getAlbumImages(id)
            .then((res: any) => {
                setAlbumImages(res);
            })
    }, []);
  return (
    <div>
      Album { title }
        {
            albumImages.map((image: any) => (
                <div key={image.id}>
                    <img src={image.url} alt={image.title}/>
                    <div>{image.title}</div>
                </div>
            ))
        }
    </div>
  )
}

export default page
