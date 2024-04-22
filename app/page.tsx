"use client";
import {useEffect, useState} from "react";
import {getAllUsers} from "@/app/services/services";
import {useUsersStore} from "@/app/store/store";

export default function Home() {
    const users = useUsersStore((state: any) => state.users);
    useEffect(() => {
        getAllUsers()
            .then((res: any) => {
                console.log(">>", res)
                useUsersStore.setState({users: res});
            })
    }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     {/*   todo add navbar*/}
     {/*   todo add state manager*/}
     <div>Portal</div>
    </main>
  );
}
