import training from "../../assets/images/training/training-img.png";
import iconTraining1 from "../../assets/images/training/icon-training-1.png";
import iconTraining2 from "../../assets/images/training/icon-training-2.png";
import iconTraining3 from "../../assets/images/training/icon-training-3.png";

const traningDetails = [
    {
        id: 1,
        icon: iconTraining3,
        description: "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
    },
    {
        id: 1,
        icon: iconTraining1,
        description: "TA’s and presenters can be moved to the front of the class.",
    },
    {
        id: 1,
        icon: iconTraining2,
        description: "Teachers can easily see all students and class data at one time.",
    }
]

export default function Training() {
    return (
        <section id="training" className="container">
            <div className="w-full">
                <div className="flex flex-col lg:flex-row items-end justify-between gap-[94px]">
                    <img src={training} alt="training" className="w-full lg:w-[594px] lg:h-[352px]" />
                    <div className="lg:flex-1 flex flex-col gap-11 w-full">
                        <div className="flex flex-col items-start gap-6">
                            <div className="inline bg-[#D4E1FF] text-[#0B7077] font-medium text-lg px-3 py-1 rounded-lg">
                                Tranning
                            </div>
                            <h2 className="text-(--secondary-color) text-[28px] md:text-[48px] font-bold">
                                Staff Training
                            </h2>
                        </div>
                        <div>
                            <div className="flex flex-col gap-6 md:gap-10">
                                {traningDetails.map((item) => (
                                    <div key={item.id} className="flex items-start gap-4 md:gap-8">
                                        <div className="h-12 w-12 md:h-[60px] md:w-[60px] rounded-full bg-white shadow-[0px_10px_30px_rgba(0,0,0,0.1)] grid place-items-center shrink-0">
                                            <img src={item.icon} className="h-6 md:h-[26px] object-contain" />
                                        </div>
                                        <p className="text-[#696984] font-medium text-[16px] md:text-[18px] leading-7 md:leading-8">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
