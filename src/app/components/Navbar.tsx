import Image from 'next/image';

//Styles
import '../css/navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar__container">
            <Image
                src="/profile-picture-default.png"
                alt="Profile pic"
                width={40}
                height={40}
            />
            <h1 className="text-2xl font-bold">Welcome, User</h1>
        </nav>
    );
}
