const cards = [
    {
        id: 1,
        stepName: "Build",
        title: "Identify Your ",
        sub: "Cybersecurity Skills",
        desc: "Build a personalized, role-ready Skill Map in just 15 minutes. Designed for fresh graduates and experienced professionals alike. Start now.",
        image: "Build.png",

    },
    {
        id: 2,
        stepName: "Validate",
        title: "Validate to",
        sub: " to Conquer",
        desc: "Prove the accuracy and credibility of your cybersecurity skills with ease. Tackle targeted questions and scenario-based mini challenges to verify your experience and operational readiness",
        image: "Validate.png",
    },
    {
        id: 3,
        stepName: "Grow",
        title: "Unleash your ",
        sub: "Potential",
        desc: "Use personalized recommendations and role-aligned learning paths to continuously strengthen your skill map and expand your cybersecurity capabilities.",
        image: "Rename.png"
    },
];

const StackedCards: React.FC = () => {
    return (
        <section className="relative w-full bg-gradient-to-b
        from-[#000063]
        to-[#000000] md:py-20 py-10">

            <div className="max-w-5xl mx-auto flex flex-col gap-32">

                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className="sticky top-0 md:top-20"
                        style={{
                            zIndex: 10 + index,
                        }}
                    >

                        <div
                            className={`
                bg-[#000000]
                border
                border-[#FFFFFF61]
                rounded-3xl
                p-5
                md:p-10
                shadow-2xl
                flex
                md:flex-row
                flex-col
                justify-between
                items-center
                text-white`}>

                            <div className="md:w-[40%] flex md:flex-col space-y-2 justify-center items-center font-bold text-8xl md:mb-0 mb-5">
                                <div className="text-[75px] md:text-[156px] md:mb-[20px] mb-0 mr-2 md:mr-0">0{index + 1}</div>
                                <p className="text-[62px] md:text-[84px]">{card.stepName}</p>
                            </div>
                            <div className="w-[60%] ">

                                <div className="w-full h-[300px] rounded-xl overflow-hidden border border-[#ffffff]">

                                    <img
                                        className="w-full bg-center"
                                        src={`/${card.image}`}
                                        alt={card.stepName}
                                    />

                                </div>
                                <h2 className="mt-[24px] text-[22px] font-[400] leading-none">
                                    {card.title}
                                </h2>
                                <h3 className="text-[36px] font-[700]">
                                    {card.sub}
                                </h3>


                                <p className="text-lg mt-[15px] text-white/80">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default StackedCards;
