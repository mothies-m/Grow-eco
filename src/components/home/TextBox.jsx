import { poppinsBold, poppinsRegular } from "@/app/fonts"

export default function TextBox() {

    const content = {
        heading: 'Invest in Farms with Ease, Seamlessly Connecting You to Agriculture.',
        paragraph: 'Invest confidently in the agriculture industry. Explore our platform, find exciting farm investment opportunities, and enjoy the benefits of a thriving sector. Start growing your wealth through agricultural investments today.'
    }

    return (
        <div className="flex justify-center items-center bg-[#EBEBEB] w-full min-h-[60vh] md:min-h-[50vh] my-20 py-8 px-4 md:px-0">
            <div className="flex flex-col justify-evenly gap-8 h-full md:w-2/3">
                <h3 className={`text-3xl md:text-4xl lg:text-6xl text-[#575757] leading-[2.6rem] lg:leading-[5rem] ${poppinsBold.className}`}>{content.heading}</h3>
                <p className={`text-lg md:text-xl lg:text-2xl text-[#7B7B7B] lg:w-5/6 leading-[2.2rem] lg:leading-[3rem] ${poppinsRegular.className}`}>{content.paragraph}</p>
            </div>
        </div>
    )
}
