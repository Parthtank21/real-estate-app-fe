"use client";

import React from "react";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import Navbar from "@/components/navbar";
import { useGetAuthUserQuery } from "@/state/api";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: authUser } = useGetAuthUserQuery();

  return (
    <div className="h-full w-full">
      <Navbar />
      <main
        className={`h-full w-full flex flex-col`}
        style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
      >
        {children}
      </main>
    </div>
  );
}
