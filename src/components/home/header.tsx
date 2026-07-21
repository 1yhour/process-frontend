import { headerData } from "@/app/data/headerData";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Header(){
    return(
        <header className="sticky top-0 z-50 w-full">
            <div className="py-6 bg-white shadow-sm">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    <div className="flex gap-4">
                        <div className="mr-8"><Image src="/image/Logo.png" alt="Logo" width={40} height={40} /></div>
                            {headerData.map((item)=>(
                                <div key={item.id} className="flex items-center justify-center">
                                    <Button variant="link" >
                                        {item.title}
                                    </Button>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <div className="flex items-center justify-center">
                                <Button variant="link" >Logout</Button>
                            </div>
                            <div className="flex items-center justify-center">
                                <Button variant="outline" className="px-6 py-2">Contact Sales</Button>
                            </div>
                            <div className="rounded-full bg-purple-600 text-white w-10 h-10 flex items-center justify-center">
                                <span>S</span>
                            </div>
                        </div>
                    </div>  
            </div>
        </header>
    )
}