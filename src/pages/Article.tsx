import "./Article.css"

export default function Article() {
    
    const newsColumns =
        {name: "Foster Transparency of Judicial Decisions and Enhancing the National Implementation of the ECHR (TJENI) and Diversification Project", image: "News/World Bank.png", ref: "",
            text: <p className="my-4  leading-5">Unprecedented challenges demand urgent action and innovative solutions. The World Bank’s <span className="underline"><a href="https://www.worldbank.org/en/news/immersive-story/2023/10/13/world-bank-president-on-ending-poverty-on-a-livable-planet">new vision and playbook for development</a></span> were unveiled at last week’s Annual Meetings in Marrakech. This positions the Bank squarely as a driver of solutions to help improve lives amid a perfect storm of intertwined crises that is exacerbating inequality.
                    <br className="mb-2"/>“We must be the hand on the back—moving people forward. We must be an institution that exports optimism and impact. But we must change to make good on that promise and deliver on what is being demanded,” Bank President Ajay Banga said in his speech Friday to the Annual Meetings Plenary. “The World Bank is turning to face the wind.”
                    <br className="mb-2"/>The meetings showcased the significant progress the Bank has made since it began its evolution process a year ago. Expanded financial capacity. Stronger partnerships. Deeper engagement with the private sector. More efficient processes. These steps are helping create a better and bigger Bank capable of achieving the bold new vision of creating a world free of poverty on a livable planet.
                    <br className="mb-2"/>The Bank has adopted new tools that could provide $157 billion in additional lending capacity over a decade—including the issuance of hybrid capital, a portfolio guarantee mechanism, and an adjusted loan-to-equity ratio. Further measures to unlock even more lending were discussed during the meetings, such as better utilizing callable capital and SDRs and creating a Livable Planet Fund by opening the Global Public Goods Fund to governments and philanthropies, increasing its ambition, and further incentivizing cooperation across borders.
                    <br className="mb-2"/>In his plenary remarks, Ajay revealed that the Bank is exploring loan maturities of 35 to 40 years to help countries better navigate long-term social and human capital investments and investigating reduced rates to incentivize exiting from coal as part of energy transitions.
                    <br className="mb-2"/>The Annual Meetings returned to Africa for the first time since 1973—when President Robert McNamara coined the term “absolute poverty.” The Marrakech meetings built on this  vision by recognizing that eradicating poverty cannot be separated from sustainability and protecting the planet.
                    <br className="mb-2"/>The Chair of the Development Committee, a ministerial-level forum that represents 189 member countries, issued a statement, endorsing the new vision and pointing to the need to double down and complete the ambitious reforms which have been started ensure that the institution has the financing and operational capacity to become a better, bigger, and more effective Bank.
                    <br className="mb-2"/>The meetings unfolded against a turbulent global backdrop—the recent earthquakes in Morocco and Afghanistan, catastrophic floods in Libya and the escalation of violence in Israel and Gaza. Those crises amplified the threats facing the world’s poor—and the need for urgent solutions.
                    <br className="mb-2"/>In The Fourth Ministerial Roundtable Discussion on Ukraine, Ukrainian President Volodymyr Zelensky called for reliable mechanisms to stimulate private investment.  “I thank all those assisting in the rebuilding of Ukraine,” Zelensky said.
                    <br className="mb-2"/>Live events in Marrakech brought leaders together to delve into high-priority issues like jobs, human capital, climate, gender equality, and debt, among other topics.  A daily series of interviews with policymakers, civil society and private sector leaders at the World Bank Digital Zone brought insights to a global digital audience.
                    <br className="mb-2"/>At an event on the new playbook for development, Managing Director Anna Bjerde emphasized factors that are driving the need for the World Bank to introduce a new institutional playbook: The growing frequency of crises, the human toll, and the fact that those crises are coming on top of climate change, food insecurity and rising fragility.
            </p> 
            
        }

    return (
        <>
            <div className="page-spacer">
                <div className="w-full h-1 bg-[#E5E5E5]"/>
            </div>
            <div className="page-container w-screen h-screen">
                <p className="text-2xl font-semibold mb-5">{newsColumns.name}</p>
                <div className="relative aspect-video my-7 overflow-hidden rounded-md"><img src={`${newsColumns.image}`} className="absolute w-full scale-110" alt="" /></div>
                <div className="w-full h-1 bg-[#E5E5E5]"/>
                {newsColumns.text}
            </div>
        </>
    )
}