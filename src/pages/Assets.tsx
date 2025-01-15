import "./Assets.css"
export default function Assets() {

    const assetColumns = [
        {name: "Reports",
            description: "The Access to Justice and Technology: Using ICT to Close the Justice Gap project is supported by the Korea-World Bank Partnership Facility (KWPF), a single-donor trust fund fully funded by the government of South Korea and administered by the KWPF Program Management Team within the World Bank Group.",
            downloads: [{name: "Digitalization of South Korea's Justice System", category: "Report", publicationDate:"2024", publicationDate2:"2024", downloadLink:"Hello"}, 
                {name: "Digitalization of South Korea's Justice System", category: "Report", publicationDate:"2024", publicationDate2:"2024", downloadLink:"Hello"}, 
                {name: "Digitalization of South Korea's Justice System", category: "Report", publicationDate:"2024", publicationDate2:"2024", downloadLink:"Hello"}, 
            ]
        },
        {name: "Assessment Tools",
            description: "The Access to Justice and Technology: Using ICT to Close the Justice Gap project is supported by the Korea-World Bank Partnership Facility (KWPF), a single-donor trust fund fully funded by the government of South Korea and administered by the KWPF Program Management Team within the World Bank Group.",
            downloads: [{name: "Digitalization of South Korea's Justice System", category: "Assessment Tool", publicationDate:"2024", publicationDate2:"2024", downloadLink:"Hello"}, 
                {name: "Digitalization of South Korea's Justice System", category: "Assessment Tool", publicationDate:"2024", publicationDate2:"2024", downloadLink:"Hello"}, 
                {name: "Digitalization of South Korea's Justice System", category: "Assessment Tool", publicationDate:"2024", publicationDate2:"2024", downloadLink:"Hello"}, 
            ]
        },
        {name: "References",
            description: "The Access to Justice and Technology: Using ICT to Close the Justice Gap project is supported by the Korea-World Bank Partnership Facility (KWPF), a single-donor trust fund fully funded by the government of South Korea and administered by the KWPF Program Management Team within the World Bank Group.",
            downloads: [{name: "Digitalization of South Korea's Justice System", category: "Assessment Tool", publicationDate:"2024", publicationDate2:"2024", downloadLink:"Hello"}, 
                {name: "Digitalization of South Korea's Justice System", category: "Assessment Tool", publicationDate:"2024", publicationDate2:"2024", downloadLink:"Hello"}, 
                {name: "Digitalization of South Korea's Justice System", category: "Assessment Tool", publicationDate:"2024", publicationDate2:"2024", downloadLink:"Hello"}, 
            ]
        },
    ]

    return (
        <div className="page-container w-screen h-screen flex justify-between">

            <nav className="font-semibold text-xl text-[#2B0CB4] basis-1/5">
                <div className="fixed">
                    ASSETS
                    <div className="mt-2 h-[1px] bg-[#E5E5E5]"/>
                    {assetColumns.map((item) => (
                        <>
                            <a className="font-normal text-base text-[#818181] block" href={item.name}>{item.name}</a>
                            <div className="mt-1.5 h-[1px] bg-[#E5E5E5]"/>
                        </>
                    ))}
                </div>
            </nav>
            <div className="basis-3/5">
                {assetColumns.map((item) => (
                    <>
                        <div className="mt-1.5 mb-10 h-2 bg-gradient-to-r from-[#0010A3] to-[#A900E8]"/>
                        <p className="text-2xl mb-5">{item.name}</p>
                        <p className="text-[.66rem] mb-9">{item.description}</p>
                        {item.downloads.map((downloadItem) => (
                            <div className="mb-8">
                                <div className="mt-7 h-[2px] bg-[#E5E5E5]"/>
                                <p className="mt-3 font-semibold text-sm mb-3">{downloadItem.name}</p>
                                    <div className="flex justify-between">
                                        <div className="basis-1/2">
                                            <p className="text-[#818181] text-[.5rem] font-extrabold">Category:
                                                <span className="font-bold"> {downloadItem.category}</span>
                                            </p>
                                            <p className="text-[#818181] text-[.5rem] font-extrabold mt-0.5">Publication Date:
                                                <span className="font-bold"> {downloadItem.publicationDate}</span>
                                            </p>
                                            <p className="text-[#818181] text-[.5rem] font-extrabold mt-0.5">Publication Date:
                                                <span className="font-bold"> {downloadItem.publicationDate2}</span>
                                            </p>
                                        </div>
                                        <a className="button" href={`${downloadItem.downloadLink}`}>Download</a>
                                    </div>
                            </div>
                        ))}
                        
                    </>
                    
                ))}            
            </div>
        </div>
    )
}