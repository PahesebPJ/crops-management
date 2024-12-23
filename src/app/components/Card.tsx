import { PiPlant, PiBasket } from 'react-icons/pi';
import { GoGraph } from 'react-icons/go';
import Image from 'next/image';

const Card = (/* crops */) => {
    const resolution = 1000;
    const width = resolution;
    const height = resolution;
    return (
        <div className="rounded-xl shadow-lg bg-emerald-700 flex gap-4 text-white">
            <figure className="w-5/12 h-full rounded-l-xl overflow-hidden">
                <Image
                    src="/img/imagen2.jpg"
                    width={width}
                    height={height}
                    alt="Crop image"
                    className="w-full h-full object-cover"
                />
            </figure>

            <div className="p-4 flex flex-col justify-center gap-4 w-7/12 rounded-r-xl">
                <div className="flex items-center gap-4 bg-emerald-900 p-3 rounded-2xl">
                    <PiBasket className="text-4xl" />
                    <h2 className="text-4xl font-bold">Cosecha de Penes</h2>
                </div>

                <div className="flex items-center gap-4 bg-emerald-900 w-full p-3 rounded-2xl">
                    <PiPlant className="text-4xl" />
                    <h2 className="text-4xl font-bold">Penemate</h2>
                </div>

                <div className="flex items-center gap-4 bg-emerald-900 w-full p-3 rounded-2xl">
                    <GoGraph className="text-4xl" />
                    <h2 className="text-4xl font-bold">10% - 20%</h2>
                </div>
            </div>
        </div>
    );
};

export default Card;
