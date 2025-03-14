import { PiPlant, PiBasket } from 'react-icons/pi';
import { GoGraph } from 'react-icons/go';
import Image from 'next/image';
import { CardProps } from '../interface/CardProps';


const Card = ({name, type, watering_frecuence, src}: CardProps) => {
    const resolution = 500;
    const width = resolution;
    const height = resolution;
    return (
        <div className="rounded-xl shadow-lg bg-emerald-700 flex gap-2 max-w-2xl text-white card-custom">
            <figure className="w-5/12 h-full rounded-l-xl overflow-hidden">
                <Image
                    src={src || "/img/imagen2.jpg"}
                    width={width}
                    height={height}
                    alt="Crop image"
                    className="w-full h-full object-cover"
                    priority
                />
            </figure>

            <div className="p-4 flex flex-col justify-center gap-4 w-7/12 rounded-r-xl info-custom__container">
                <div className="flex items-center gap-4 bg-emerald-900 p-3 rounded-2xl info-custom">
                    <PiBasket className="text-2xl" />
                    <h2 className="text-2xl font-bold">{name}</h2>
                </div>

                <div className="flex items-center gap-4 bg-emerald-900 w-full p-3 rounded-2xl">
                    <PiPlant className="text-2xl" />
                    <h2 className="text-2xl font-bold">{type}</h2>
                </div>

                <div className="flex items-center gap-4 bg-emerald-900 w-full p-3 rounded-2xl">
                    <GoGraph className="text-2xl" />
                    <h2 className="text-2xl font-bold">{watering_frecuence}</h2>
                </div>
            </div>
        </div>
    );
};

export default Card;
