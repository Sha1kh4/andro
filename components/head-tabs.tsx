"use client";
import { useEffect, useState } from "react";

export function HeaderTabs() {
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        const cats: string[] = [
          ...new Set(data.map((item: { category: string }) => item.category)),
        ];
        setCategories(cats);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);
  return (
    <>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        {categories.map((category) => (
          <div className="mr-5 hover:text-gray-900" key={category}>
            <a href="#">{category}</a>
          </div>
        ))}
      </nav>
    </>
  );
}
