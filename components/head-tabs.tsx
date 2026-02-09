"use client";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export function HeaderTabs() {
    const [categories, setCategories] = useState<string[]>([]);
    
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products/categories");
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);

  return (
    <section className="container mx-auto px-5 py-6">
      <h2 className="mb-6 text-2xl font-bold tracking-tight">Shop by Category</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {categories.map((category) => (
            <Card key={category} className="hover:bg-accent cursor-pointer transition-colors hover:shadow-md">
                <CardHeader className="text-center py-6">
                    <CardTitle className="capitalize">{category}</CardTitle>
                </CardHeader>
            </Card>
        ))}
      </div>
    </section>
  );
}