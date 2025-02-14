"use client";

import './css/card-container.css';
import Navbar from './components/Navbar';
import { getCookie } from './lib/utils.client';
import { getApiCall } from './service/api_calls';
import api_routes from './service/api_routes';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import { Crops } from './interface/Crops';

function getUserInfo() {
    try {
        const user = JSON.parse(getCookie("userData"));
        return user;
    }catch (error) {
        console.log("Failed getting information: ",error);
    }
}

export default function Home() {
    const [crops, setCrops] = useState<Crops[]>([]);
    const user = getUserInfo();

    async function getCrops() {
        const apiURL = process.env.NEXT_PUBLIC_URL_API_PC
        const crops = await getApiCall(`${apiURL}${api_routes.crops}/users/${user.id}`)
        console.log(crops);
        setCrops(crops);
    }

    useEffect(() => {
        getCrops();
    },[])

    return (
        <div className="container max-w-full h-screen p-4 grid grid-rows-[auto_1fr]">
            <Navbar name={user?.name}></Navbar>
            {/* Card´s container */}
            <section className="card-container p-4">
                {crops.map((crop) => (
                    <Card 
                        key={crop.id} 
                        name={crop.name} 
                        type={crop.type} 
                        watering_frecuence={crop.watering_frecuence} 
                        src={crop.photo_url}
                    />
                ))
                }
            </section>
        </div>
    );
}
