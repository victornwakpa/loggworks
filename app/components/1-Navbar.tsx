"use client";
import TopNav from "./TopNav";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

export default function AllNav() {

    return (
        <div className="fixed top-0 left-0 right-0 w-full z-10">
            <TopNav />
            <Navbar />
        </div>
    );
}