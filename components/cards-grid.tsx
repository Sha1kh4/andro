"use client";
import { useEffect, useState } from "react";
import {ItemCard}from "./item-card";
export default function CardsGrid() {
    const [data, setData] = useState<any[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setData(data);
                
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

   return (
 
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            {data.map((item) => (
                <div className="xl:w-1/4 md:w-1/2 p-4" key={item.id}>
                    
                    <ItemCard image={item.image} title={item.title} price={item.price}/>
            </div>
            ))}
        </div>
    );
}