"use client";
import { useEffect, useState } from "react";
export default function CategoryCards() {
    return (
<h1>TODO</h1>
//     const [data, setData] = useState<any[]>([]);
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch("https://fakestoreapi.com/products");
//                 const data = await response.json();
//                 setData(data);
                
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };
//         fetchData();
//     }, []);
//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-wrap -m-4">
//           {data.map((item) => (
//               <div className="xl:w-1/4 md:w-1/2 p-4" key={item.id}>
                  
//               <div className="bg-gray-100 p-6 rounded-lg">
//                 <img
//                   className="h-40 rounded w-full object-cover object-center mb-6"
//                   src={item.image}
//                   alt={item.title}
//                 />
//                 <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
//                   {item.title}
//                 </h3>
//                 <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
//                   {item.title}
//                 </h2>
//                 <p className="leading-relaxed text-base">{item.title}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
  );
}
