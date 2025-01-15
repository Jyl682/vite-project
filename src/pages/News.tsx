import "./News.css"

export default function News() {

    const newsColumns = [
        {name: "Foster Transparency of Judicial Decisions and Enhancing the National Implementation of the ECHR (TJENI) and Diversification Project", image: "News/World Bank.png", ref: ""},
        {name: "Foster Transparency of Judicial Decisions and Enhancing the National Implementation of the ECHR (TJENI) and Diversification Project", image: "News/World Bank Academy.png", ref: ""},
        {name: "Foster Transparency of Judicial Decisions and Enhancing the National Implementation of the ECHR (TJENI) and Diversification Project", image: "News/Fostering.png", ref: ""},
        {name: "Foster Transparency of Judicial Decisions and Enhancing the National Implementation of the ECHR (TJENI) and Diversification Project", image: "News/CyberJudicial.png", ref:""},
        {name: "Foster Transparency of Judicial Decisions and Enhancing the National Implementation of the ECHR (TJENI) and Diversification Project", image: "News/2023 Marrakech.png", ref:""},
    ]

    return (
        <div className="page-container w-screen h-screen flex justify-between">

            <nav className="font-semibold text-xl text-[#2B0CB4] basis-1/5">NEWS</nav>
            <div className="basis-3/5 z-0">
            <div className="flex flex-wrap justify-between">
                {newsColumns.map((item, index) => (
                    <>
                        {(index === 0)
                            ?
                            <div className="basis-full">
                                <a href={item.ref}>
                                    <div className="h-2 bg-gradient-to-r from-[#0010A3] to-[#A900E8]"/>
                                    <div className="relative aspect-video my-7 overflow-hidden rounded-md"><img src={`${item.image}`} className="absolute w-full scale-110" alt="" /></div>
                                    <p className="text-lg font-semibold mb-5">{item.name}</p>
                                </a>
                                <div className="h-1 bg-[#E5E5E5]"/>
                            </div>
                            : 
                            <div className="basis-[48%]">
                                <a href={item.ref}>
                                    <div className="relative aspect-video my-7 overflow-hidden rounded-md"><img src={`${item.image}`} className="absolute w-full scale-110" alt="" /></div>
                                    <p className="text-md font-semibold mb-5">{item.name}</p>                 
                                </a>
                                <div className="h-1 bg-[#E5E5E5]"/>
                            </div>}
                    </>
                ))}            
                </div>
            </div>
        </div>
    )
}