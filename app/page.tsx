"use client";

import {useEffect, useState} from "react";
import {getAllUsers} from "@/app/services/services";

export default function Home() {
    const [allUsers, setAllUsers] = useState([]);
    useEffect(() => {
        getAllUsers();
    }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     {/*   todo add navbar*/}
     {/*   todo add state manager*/}
     <div>Portal</div>
    </main>
  );
}
