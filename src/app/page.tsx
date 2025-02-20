"use client";

//Styles
import './css/card-container.css';

//Components
import Navbar from './components/Navbar';
import Card from './components/Card';

//Cookies
import { getCookie } from './lib/utils.client';

//Libraries
import { apiUrl, getApiCall } from './service/api_calls';
import api_routes from './service/api_routes';
import { useEffect, useState } from 'react';
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
    const URL = apiUrl;

    async function getCrops() {
        const crops = await getApiCall(`${URL}${api_routes.crops}/users/${user.id}`)
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
                        src={URL + crop.photo_url}
                    />
                ))
                }
            </section>
        </div>
    );
}
