import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import WorkGradient from "../../components/Work/WorkGradient"
import WorkContainer from "../../components/Work/WorkContainer"
import WorkHeader from "../../components/Work/WorkHeader"
import WorkDetails from "../../components/Work/WorkDetails"

// Assets
import OnlyMeImage from '../../public/assets/OnlyMe-Big-Thumbnail.png'

export default function OnlyMe(props: any){

    const data = {   
        id: "only-me",
        number: 1,
        name: "Only Me",
        category: "Web Application",
        position: "Full Stack",
        year: 2022,
        details: {
            projectName: "Only Me",
            techStack: [ "Vue", "Tailwind", "Express", "GraphQL", "Sequelize" ],
            position: "Full Stack",
            category: "Web Application",
            work: "Personal Work",
            year: 2022,
            link: "https://onlyme.netlify.app",
            nameLink: "onlyme.netlify.app"
        }
    }

    return (
        <section className="relative animate-fadeIn">
            <Head>
                <meta charSet="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="OnlyMe - Send your anonymous message" />
                <link rel="icon" href="/favicon.png" />
                <title>{data.name}</title>
            </Head>

            <WorkGradient />

            <WorkContainer>
                <WorkHeader name={data.name} category={data.category} position={data.position} year={data.year} link={data.details.link} number={data.number} />

                <section id="WorkContent" className="px-[280px] desktop:px-[140px] laptop:px-[70px] mobileL:px-[20px]">
                    <div className="mt-[100px] tabletL:mt-[50px]">
                        <h1 className="text-5xl">
                            Send an anonymous message
                            <br/>without exposing real identity.
                        </h1>
                        <p className="mt-[30px] font-medium text-white/80">That&apos;s what I thought when I want to building a web app.
                            <br/>A place for expressing & confessing to a person you know without exposing your identity.
                        </p>
                    </div>

                    <section className="mt-[150px] tabletL:mt-[100px]">
                        <Link href={data.details.link} target="_blank" rel="noreferrer" className="p-[10px] block font-bold underline rounded-xl outline-none hover:ring-2 hover:ring-offset-2 hover:ring-offset-transparent hover:ring-pink-500">
                            <Image src={OnlyMeImage} alt="Big Picture" className="w-full" />
                        </Link>
                    </section>

                    <div className="py-[150px] tabletL:py-[100px] grid grid-cols-[1fr_2fr] tabletL:grid-cols-1 gap-5">
                        <span>
                        </span>
                        
                        <div className="px-[60px] desktop:px-[30px] tabletL:px-[10px]">
                            <h1 className="text-5xl">
                                A way to express & confessing <br className="desktop:hidden"/>
                                without overthink.
                            </h1>

                            <p className="mt-[30px] font-medium text-white/80">
                                Basically the app is gonna send your message to a person you sent and the person
                                is will notice that someone send him an anonymous message. 
                                <br/><br/>
                                Okay that&apos;s it. But ...
                                <br/><br/>
                                What if you can customize your identity like name every time you write a message ?
                                That would be fun right ? and also give an anonymous user a way to express
                                themselves.
                            </p>
                        </div>
                    </div>

                    <div id="Contents" className="grid grid-cols-3 gap-10 desktop:gap-5 tabletL:grid-cols-1 mobileL:grid-cols-1">
                        <div className="h-[230px] w-full flex flex-col items-start justify-between py-[30px] px-[40px] desktop:py-[30px] desktop:px-[30px] bg-[#464954] rounded-[20px] border border-white/20">
                            <div>
                                <h1 className="text-[20px] font-bold">Anonymous</h1>
                                <p className="mt-[10px] text-[16px] text-white/80 font-medium">Hey, I know you from the grocery store. Remember me ? Guess ...</p>
                            </div>

                            <div className="flex">
                                <p className="mr-[30px] text-[14px] text-white/60">6 Comments</p>
                                <p className="text-[14px] text-white/60">26 Oct 2022</p>
                            </div>
                        </div>

                        <div className="h-[230px] w-full flex flex-col items-start justify-between py-[30px] px-[40px] desktop:py-[30px] desktop:px-[30px] bg-[#464954] rounded-[20px] border border-white/20">
                            <div>
                                <h1 className="text-[20px] font-bold">Ur Crush</h1>
                                <p className="mt-[10px] text-[16px] text-white/80 font-medium">Hey, I&apos;m crushing on you ... 💕</p>
                            </div>

                            <div className="w-full flex">
                                <p className="mr-[30px] text-[14px] text-white/60">2 Comments</p>
                                <p className="text-[14px] text-white/60">26 Oct 2022</p>
                            </div>
                        </div>

                        <div className="h-[230px] w-full flex flex-col items-start justify-between py-[30px] px-[40px] desktop:py-[30px] desktop:px-[30px] bg-[#464954] rounded-[20px] border border-white/20">
                            <div>
                                <h1 className="text-[20px] font-bold">🎅 Santa Claus</h1>
                                <p className="mt-[10px] text-[16px] text-white/80 font-medium">Hey, look i have a gift for you 🎁</p>
                            </div>

                            <div className="flex">
                                <p className="mr-[30px] text-[14px] text-white/60">4 Comments</p>
                                <p className="text-[14px] text-white/60">26 Oct 2022</p>
                            </div>
                        </div>
                    </div>
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