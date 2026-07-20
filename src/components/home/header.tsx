import { headerData } from "@/app/data/headerData";
import { Button } from "@/components/ui/button";
export default function Header(){
    return(
        <header className="sticky top-0 z-50 w-full">
            <div className="px-8 py-4 bg-white shadow-sm ">
                    <div className="flex justify-between items-center">
                        <div><Button variant="link">Logo</Button></div>
                        <div className="flex gap-4">
                            {headerData.map((item)=>(
                                <div key={item.id}>
                                    <Button variant="link" >
                                        {item.title}
                                    </Button>
                                </div>
                            ))}
                        </div>
                        <div><Button variant="link" >Profile</Button></div>
                    </div>  
            </div>
        </header>
    )
}