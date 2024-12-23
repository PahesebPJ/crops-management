import './css/card-container.css';
import Card from './components/Card';
import Navbar from './components/Navbar';

export default function Home() {
    return (
        <div className="container max-w-full h-screen p-4 grid grid-rows-[auto_1fr]">
            <Navbar></Navbar>
            {/* Card´s container */}
            <section className="card-container p-4">
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        </div>
    );
}
