import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import WorkGradient from "../../components/Work/WorkGradient"
import WorkContainer from "../../components/Work/WorkContainer"
import WorkHeader from "../../components/Work/WorkHeader"
import WorkDetails from "../../components/Work/WorkDetails"

// Assets
import CCODesignImage from '../../public/assets/cco-design.png'

export default function CCODesign(props: any){

    const data = {   
        id: "cco-design",
        number: 2,
        name: "CCO Design",
        category: "Web Portfolio",
        position: "Front End",
        year: 2021,
        details: {
            projectName: "CCO Design",
            techStack: [ "React", "React Router", "Netlify" ],
            position: "Front End",
            category: "Web Portfolio",
            work: "Personal Work",
            year: 2021,
            link: "https://coocaainne-design.netlify.app",
            nameLink: "coocaainne-design.netlify.app"
        }
    }

    return (
        <section className="relative animate-fadeIn">
            <Head>
                <meta charSet="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="CCO Design - Graphic Designer Portfolio" />
                <link rel="icon" href="/favicon.png" />
                <title>{data.name}</title>
            </Head>
            
            <WorkGradient />

            <WorkContainer>
                <WorkHeader name={data.name} category={data.category} position={data.position} link={data.details.link} year={data.year} number={data.number} />

                <section id="WorkContent" className="px-[280px] desktop:px-[140px] laptop:px-[70px] mobileL:px-[20px]">
                    <div className="mt-[100px] tabletL:mt-[50px]">
                        <h1 className="font-medium text-5xl leading-tight">
                            Creative <span className="font-cursive">Graphic Designer.</span>
                            <br/>Since 2020
                        </h1>
                        
                        <p className="mt-[20px] font-medium text-white/80">
                            I used to be a Graphic Designer back in the day. <br/>I was started with simple design and then becoming like this now.
                        </p>
                    </div>

                    <section className="mt-[100px] tabletL:mt-[100px]">
                        <Link href={data.details.link} target="_blank" rel="noreferrer" className="p-[5px] block font-bold underline rounded-md outline-none hover:ring-1 hover:ring-offset-2 hover:ring-offset-transparent hover:ring-pink-500/70">
                            <Image src={CCODesignImage} alt="Big Picture" className="w-full" />
                        </Link>
                    </section>

                    <section className="mt-[100px] grid grid-cols-[1fr_2fr] tabletL:grid-cols-[0.5fr_2fr] mobileL:grid-cols-1 gap-5">
                        <span>
                        </span>
                        
                        <div className="px-[60px] desktop:px-[30px] tabletL:px-[10px]">
                            <h1 className="font-medium text-5xl leading-tight">
                                Self-Taught Graphic Designer
                                
                                who love to design a thing.
                            </h1>
                            <p className="mt-[30px] font-medium text-white/80">
                                Started with looking people&apos;s design on Instagram and since that I becaming interested on graphic design.
                                Mostly my style is kinda brutalism, but I do enjoy it.
                            </p>
                        </div>
                    </section>
                </section>

                <WorkDetails
                    projectName={data.details.projectName}
                    techStack={data.details.techStack}
                    position={data.details.position}
                    category={data.details.category}
                    work={data.details.work}
                    year={data.details.year}
                    link={data.details.link}
                />
            </WorkContainer>
        </section>
    )
}