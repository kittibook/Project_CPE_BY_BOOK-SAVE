"use client"
import { useState } from "react";
import { Poppins } from 'next/font/google';
import NavBar from "@/app/Components/UI/admin/Navbar";

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export default function adminPage() {
    return (
        <div className={`flex flex-col h-full ${poppins.className} `}>
            <NavBar />
            <div className="w-64 h-screen bg-gray-200">

            </div>
        </div>
    )
}