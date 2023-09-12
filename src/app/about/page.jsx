'use client'

import { poppinsRegular } from '../fonts'
import { FaLeaf, FaUsers, FaCogs, FaRecycle, FaRocket } from 'react-icons/fa'
import { motion } from 'framer-motion'

import mathesh from './assets/mathesh.jpeg'
import mothies from './assets/mothies.jpeg'
import siva from './assets/siva.jpeg'
import vignesh from './assets/vignesh.jpg'
import vimal from './assets/vimal.jpg'
import Image from 'next/image'

export default function Page() {
    const contents = [
        {
            icon: <FaLeaf />,
            heading: 'Our Journey',
            paragraph:
                'Our journey began with a vision to empower farmers worldwide with the knowledge and tools they need to optimize their crop yields, conserve resources, and make more informed decisions.',
        },
        {
            icon: <FaUsers />,
            heading: 'Our Team',
            paragraph:
                'Our project is driven by a team of passionate experts with diverse backgrounds and skills. From agriculture specialists to tech innovators, our team is united by a shared commitment to transforming agriculture into a smarter, more sustainable industry.',
        },
        {
            icon: <FaCogs />,
            heading: 'Leading with Technology and Innovation',
            paragraph:
                'We leverage the power of data analytics and smart sensors to provide real-time insights into soil health, enable precision agriculture, and offer advanced pest management solutions. Our approach is at the forefront of agricultural technology, helping farmers achieve higher yields and resource efficiency.',
        },
        {
            icon: <FaRecycle />,
            heading: 'Sustainability and Impact',
            paragraph:
                'We are committed to promoting sustainable farming practices, reducing chemical inputs, and optimizing resource utilization. Our efforts contribute to a greener, more environmentally friendly agriculture sector, ensuring a brighter future for our planet.',
        },
        {
            icon: <FaRocket />,
            heading: 'Our Future',
            paragraph:
                'Our journey is ongoing, and our goals are ambitious. We envision continued growth and innovation, furthering our mission to make agriculture smarter and more sustainable.',
        },
    ];

    const cardContents = [
        {
            icon: mathesh,
            heading: 'Mathesh D',
            paragraph:
                'Spcialized in IoT development, circuit designer & developer.',
        },
        {
            icon: mothies,
            heading: 'Mothieswaran M',
            paragraph:
                'UI desinger, stepping into the field of front-end development.',
        },
        {
            icon: siva,
            heading: 'SriSivaSubramanyan',
            paragraph:
                'Our Agro specialist, very well experienced in the agricultural sector.',
        },
        {
            icon: vignesh,
            heading: 'Vignesh D',
            paragraph:
                'Designer, IoT developer, and content writer & media manager.',
        },
        {
            icon: vimal,
            heading: 'Vimal Sakkthi VS',
            paragraph:
                'Full-stack developer, responsible for all web related stuff.',
        },
    ]

    const FadeInAnimationMultiple = {
        initial: {
            opacity: 0,
            y: 30,

        },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.15 * index,
                duration: 0.35,
            },
        }),
    };

    const FadeInAnimation = {
        initial: {
            opacity: 0,
        },
        animate: (index) => ({
            opacity: 1,
            transition: {
                delay: 0.15 * index,
                duration: 0.35,
            }
        }),
    };

    return (
        <div className={`bg-white p-4 lg:p-8 ${poppinsRegular.className}`}>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">About Farmsense</h1>
            <h2 className="text-xl lg:text-2xl font-semibold mb-6">Unlocking the Boundless Potential of Modern Agriculture</h2>
            <div className="flex flex-col gap-6">
                {contents.map((content, index) => (
                    <motion.div
                        className="p-4 border-2 rounded-lg"
                        key={index}
                        variants={FadeInAnimationMultiple}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                        whileHover={{ border: '2px solid rgb(34 197 94)' }}
                    >
                        <div className="flex items-center">
                            <div className="mr-4 text-2xl text-green-500">{content.icon}</div>
                            <div>
                                <h3 className="text-lg lg:text-xl font-semibold mb-2">{content.heading}</h3>
                                <p className="text-gray-700">{content.paragraph}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className='flex flex-col gap-8 py-16'>
                <motion.h3
                    className='text-3xl font-bold'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{
                        once: true,
                    }}
                >
                    Team Members
                </motion.h3>
                <div className="flex flex-wrap justify-center gap-12">
                    {cardContents.map((content, index) => {
                        return (
                            <motion.div
                                className="bg-primary-green p-4 h-[400px] w-[240px] border border-primary-green rounded-lg shadow-lg flex flex-col justify-around md:items-center"
                                key={index}
                                variants={FadeInAnimation}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: true,
                                }}
                                custom={index}
                            >
                                <Image src={content.icon} alt='image' className='rounded-[50%] h-32 w-32 object-cover' />
                                <div className='text-center'>
                                    <h3 className="text-lg text-[#CECECE] font-semibold mb-6">{content.heading}</h3>
                                    < p className="text-sm text-[#CECECE]" > {content.paragraph}</p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div >
            </div >
        </div >
    );
}