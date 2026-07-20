"use client"; 

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; 
import { useEffect, useState } from "react";
import Header from "@/components/home/header";
import Footer from "@/components/home/footer";

type Product = {
    id: number;
    name: string;
    price: number;
};

export default function Home() {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const router = useRouter();

    const handleLogout = async () => {
        setIsLoading(true);
        try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Something went wrong during logout");
            }
            router.push("/login");
            
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }
    const handleFetch = async () =>{
        try{
            const res = await fetch('/api/products',{
                method: "GET",
                headers: {
                    'Accept' : 'application/json'
                }
            });
            if(!res.ok){
                const data = await res.json();
                throw new Error(data.error || "Something went wrong during fetch");
            }
            const data = await res.json();
            setProducts(data.data || data);
        }
        catch(err: any){
            setError(err.message);
        }
        
    }
    useEffect(()=>{
        handleFetch();
    },[]);
    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <Header/>
            <div className="m-auto text-center">
                <h1 className="text-2xl mb-4">Welcome Home</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                
                <Button 
                    onClick={handleLogout} 
                    disabled={isLoading}
                >
                    {isLoading ? "Logging out..." : "Logout"}
                </Button>
                
            </div>

            {products.length > 0 && (
                <div className="mt-8 w-full max-w-md text-left">
                    <h2 className="text-xl font-bold mb-4 text-center">Products List</h2>
                    <ul className="space-y-2">
                        {products.map((product) => (
                            <li key={product.id} className="p-4 border rounded-md shadow-sm flex justify-between bg-white/5 backdrop-blur-sm">
                                <span>{product.name}</span>
                                <span className="font-semibold text-green-500">${product.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <Footer/>
        </div>
    );
}
