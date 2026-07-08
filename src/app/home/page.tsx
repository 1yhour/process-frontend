import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <h2 className="text-red-500">This is home</h2>
                <Button>Click me</Button>
            </div>
        </div>
    )
}