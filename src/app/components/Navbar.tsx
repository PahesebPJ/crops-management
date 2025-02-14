"use client";
import Image from 'next/image';

//Styles
import '../css/navbar.css';
import { logout } from '../login/actions';

export default function Navbar({name = ""}: {name: string}) {
    return (
        <nav className="navbar__container">
            <div className="flex items-center">
                <Image
                    src="/profile-picture-default.png"
                    alt="Profile pic"
                    width={40}
                    height={40}
                />
                <h1 className="text-2xl font-bold">Welcome, {name}</h1>
            </div>
            <button className="logout__button shiny-text" onClick={() => logout()}>Logout</button>
        </nav>
    );
}
