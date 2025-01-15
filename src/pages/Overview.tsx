import "./Overview.css"
export default function Overview() {

    const overviewColumns = [
        { name: "ABOUT", 
            title: (<>Closing the <i>Justice Gap</i> with <i>Technology</i></>), 
            textContent: `The Access to Justice and Technology: Using ICT to Close the Justice Gap project is supported by the Korea-World Bank Partnership Facility (KWPF), a single-donor trust fund fully funded by the government of South Korea and administered by the KWPF Program Management Team within the World Bank Group. 
            
            Aligned with SDG 16, we initiated a project named  “Access to Justice and Technology: Using ICT to Close the Justice Gap. When it comes to services that should leave no one behind, the biggest obstacle is the scarcity of resources. We focused on the critical importance of the effective allocation of limited resources, believing that by digitizing the judicial system, we could enhance operational efficiency and thereby improve the scope of judicial services so that we could close the justice gap.
            
            KWPF supports projects that identify, implement, and scale sustainable development solutions in developing countries around the globe, drawing on the significant experience and expertise gained by South Korea across its own development journey.`,
            image: "About.png",
            asset: "assets",
            read: "news",
        },
        { name: "NEWS",
            title: (<>Stay Informed: <br/><i>Latest News</i> and <i>Updates</i></>),
            textContent: "Explore the latest developments, announcements, and stories about our efforts to bridge the justice gap through technology. Stay up to date with our ongoing projects and initiatives.",
            image: "News.png",
            read: "news",
        },
        { name: "ASSETS",
            title: (<>Access Key <i>Resources</i> and <i>Tools</i></>),
            textContent: "Download detailed project reports, visuals, and informative guides designed to help you better understand and utilize the insights from our initiatives.",
            image: "Assets.png",
            asset: "assets",
        },
        { name: "PARTNERS",
            title: "",
            textContent: "",
            partnerImage: "Partners.png"
        },
    ]

    return (
        <div className="page-container w-screen h-screen">
            {overviewColumns.map((item, index) => (
                <div key={index} className="">
                    <div className={item.image?"mt-10 w-3/5 h-1 bg-[#E5E5E5]":"mt-10 w-full h-1 bg-[#E5E5E5]"}/>
                    <div className="flex gap-24 mt-7">
                        <div className="col basis-1/12">
                            <div className="name text-xl font-semibold text-[#2B0CB4]">{item.name}</div>
                        </div>    
                        <div className={item.image?"col basis-2/5": "col basis-4/5"}>
                            <div className="title text-3xl">{item.title}</div>
                            <div className="textContent mt-6 mb-3 text-xs">{item.textContent}</div>
                            {(item.asset)? <div className="block"><a className="button" href={`${item.asset}`}>Download Assets</a></div>:""}
                            {(item.read)? <a className="button" href={`${item.read}`}>Read Our Latest</a>:""}
                            {(item.partnerImage)?<div className="w-3/4 my-16"><img src={`${item.partnerImage}`} className="" alt="" /></div>:""}
                        </div>
                        {(item.image)?<div className="col basis-1/3"><img src={`${item.image}`} className="" alt="" /></div>:""}
                    </div>
                </div>
            ))}
        </div>
    )
}