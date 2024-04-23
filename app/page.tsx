"use client";
import {useEffect,} from "react";
import {getAlbums, getAllComments, getAllUsers} from "@/app/services/services";
import {UseAlbumsStore, UseCommentsStorage, UseUsersStore} from "@/app/store/store";
import CardUser from "@/app/(components)/CardUser";
import {exportExcel} from "@/app/(components)/exportExcel";
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter();
    const users = UseUsersStore((state: any) => state.users);
    const albums = UseAlbumsStore((state: any) => state.albums);
    const comments = UseCommentsStorage((state: any) => state.comments);
    useEffect(() => {
        users.length === 0 && getAllUsers()
            .then((res: any) => {
                UseUsersStore.setState({users: res});
            })
        albums.length === 0 && getAlbums()
            .then((res: any) => {
                UseAlbumsStore.setState({albums: res});
            })
        comments.length === 0 && getAllComments()
            .then((res: any) => {
                UseCommentsStorage.setState({comments: res});
            })
    }, []);
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="flex justify-between items-center mb-10">
              <button
                  className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-8"
                  onClick={ () => { exportExcel(users) }}
              >
                  Exportar Excel de usuarios
              </button>
              <div className="flex-grow">
              </div>
              <button
                  className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {router.push('/posts-by-users')}}
              >
                  Ver estadísticas de post por usuario
              </button>
          </div>
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
