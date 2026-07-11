"use client"; 

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; 
import { useState } from "react";

export default function Home() {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
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

    return (
        <div className="flex h-screen flex-col items-center justify-center">
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
        </div>
    );
}
