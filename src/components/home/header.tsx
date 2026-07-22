import { headerData } from "@/app/data/headerData";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Image src="/image/Logo.png" alt="Logo" width={32} height={32} className="opacity-90" />
                        <span className="text-sm font-semibold text-white tracking-tight">Procesio</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-1">
                        {headerData.map((item) => (
                            <Button
                                key={item.id}
                                variant="ghost"
                                className="text-slate-400 hover:text-white hover:bg-slate-800/60 text-sm font-normal px-3 py-1.5 h-auto transition-colors"
                            >
                                {item.title}
                            </Button>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center gap-3">
                    <Button
                        variant="ghost"
                        className="text-slate-400 hover:text-white hover:bg-slate-800/60 text-sm font-normal px-3 py-1.5 h-auto"
                    >
                        Contact Sales
                    </Button>
                    <div className="w-px h-4 bg-slate-700" />
                    <div className="w-8 h-8 rounded-full bg-violet-600/80 border border-violet-500/40 text-white text-xs font-semibold flex items-center justify-center select-none">
                        S
                    </div>
                </div>
            </div>
        </header>
    );
}