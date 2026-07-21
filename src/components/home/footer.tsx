import { footIcon ,resourceData} from "@/app/data/footerData";
export default function Footer(){
    return(
        <footer className="sticky bottom-0 z-50 w-full py-6 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-x-12">
                    <div className="md:col-span-4">
                        <h2 className="text-4xl font-semibold mb-6">Procesio</h2>
                        <div className="flex gap-4">
                            {footIcon.map((item)=>(
                            <div key={item.id} className="rounded-full bg-gray-200 text-black w-8 h-8 flex items-center justify-center">
                                <a href={item.url}>
                                    {item.icons}
                                </a>
                            </div>
                        ))}
                        </div>
                    </div>
                    {resourceData.map((item) => (
                        <div className="md:col-span-2" key={item.id}>
                            <div className="text-lg font-semibold mb-4">{item.title}</div>
                            <div className="flex flex-col gap-2">
                                {item.category.map((category) => (
                                    <div key={category}>
                                        <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-200">{category}</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="md:col-span-12">
                        <div className="border-t border-gray-200 pt-6">
                            <div className="flex justify-between text-sm text-gray-500">
                                <p>© 2026 Procesio, Inc. All rights reserved.</p>
                                <div className="flex gap-4">
                                    <a href="#">Privacy Policy</a>
                                    <a href="#">Terms of Service</a>
                                    <a href="#">Contact</a>
                                </div>
                            </div>
                            <div>
                                <p>English</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}