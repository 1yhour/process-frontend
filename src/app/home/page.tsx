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
        <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 selection:bg-slate-800">
            <Header />

            <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-16 flex flex-col items-center justify-center">
                <div className="text-center max-w-xl mb-12">
                    <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold px-3 py-1 bg-slate-900 rounded-full border border-slate-800 inline-block mb-4">
                        Dashboard
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-extralight tracking-tight text-white mb-3">
                        Welcome Home
                    </h1>
                    <p className="text-sm text-slate-400 font-light leading-relaxed">
                        Manage your products and view your current collection with clean, minimalist precision.
                    </p>

                    {error && (
                        <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg">
                            {error}
                        </div>
                    )}

                    <div className="mt-6 flex justify-center gap-4">
                        <Button 
                            onClick={handleLogout} 
                            disabled={isLoading}
                            variant="outline"
                            className="bg-slate-900 text-slate-200 border-slate-800 hover:bg-slate-800 hover:text-white transition-all text-sm px-6 py-2 rounded-lg font-normal"
                        >
                            {isLoading ? "Logging out..." : "Logout"}
                        </Button>
                    </div>
                </div>
                <div className="w-full max-w-2xl mt-4">
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6">
                        <h2 className="text-sm font-medium text-slate-300 uppercase tracking-wider">
                            Products Catalog
                        </h2>
                        <span className="text-xs text-slate-500 font-mono">
                            {products.length} {products.length === 1 ? 'item' : 'items'}
                        </span>
                    </div>

                    {products.length > 0 ? (
                        <div className="grid gap-3">
                            {products.map((product) => (
                                <div 
                                    key={product.id} 
                                    className="p-4 border border-slate-800/60 rounded-xl bg-slate-900/40 backdrop-blur-md flex items-center justify-between hover:border-slate-700/80 hover:bg-slate-900/80 transition-all duration-200 group"
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500/80 group-hover:bg-emerald-400 transition-colors" />
                                        <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                                            {product.name}
                                        </span>
                                    </div>
                                    <span className="text-sm font-mono text-emerald-400/90 font-medium">
                                        ${product.price.toFixed(2)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 border border-dashed border-slate-800/80 rounded-xl bg-slate-900/20">
                            <p className="text-sm text-slate-500 font-light">No products available at the moment.</p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
