import { poppinsBold, poppinsRegular } from "@/app/fonts"

export default function TextBox() {

    const content = {
        heading: 'Unlock the Boundless Potential of Modern Agriculture.',
        paragraph: 'Explore real-time soil health insights, precision agriculture tools, pest management, and more. Empower yourself with the tools and knowledge to optimize your farming practices and cultivate a brighter future for agriculture.'
    }

    return (
        <div className="flex justify-center items-center bg-[#EBEBEB] w-full min-h-[60vh] md:min-h-[50vh] my-20 py-8 px-4 md:px-0">
            <div className="flex flex-col justify-evenly gap-8 h-full md:w-3/4">
                <h3 className={`text-3xl md:text-4xl lg:text-6xl text-[#575757] leading-[2.6rem] lg:leading-[5rem] ${poppinsBold.className}`}>{content.heading}</h3>
                <p className={`text-lg md:text-xl lg:text-2xl text-[#7B7B7B] lg:w-5/6 leading-[2.2rem] lg:leading-[3rem] ${poppinsRegular.className}`}>{content.paragraph}</p>
            </div>
        </div>
    )
}
