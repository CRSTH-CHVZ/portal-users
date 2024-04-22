"use client";
import {useEffect,} from "react";
import {getAlbums, getAllUsers} from "@/app/services/services";
import {useAlbumsStore, useUsersStore} from "@/app/store/store";
import CardUser from "@/app/(components)/CardUser";


export default function Home() {
    const users = useUsersStore((state: any) => state.users);
    const albums = useAlbumsStore((state: any) => state.albums);
    useEffect(() => {
        users.length === 0 && getAllUsers()
            .then((res: any) => {
                useUsersStore.setState({users: res});
            })
        albums.length === 0 && getAlbums()
            .then((res: any) => {
                useAlbumsStore.setState({albums: res});
            })
    }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     {/*   todo add navbar*/}
     {/*   todo add state manager*/}
     <div>Portal</div>
        {
            users?.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {
                        users?.map((user: any) => (
                            <CardUser
                                key={user.id}
                                {...user}
                            />
                        ))
                    }
                </div>
            )
        }
    </main>
  );
}
