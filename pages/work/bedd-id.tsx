import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import WorkGradient from "../../components/Work/WorkGradient"
import WorkContainer from "../../components/Work/WorkContainer"
import WorkHeader from "../../components/Work/WorkHeader"
import WorkDetails from "../../components/Work/WorkDetails"

// Assets
import HomeBedd from '../../public/assets/bedd-id/home.webp';
import HomeBedd2 from '../../public/assets/bedd-id/home-2.webp';
import RS1 from '../../public/assets/bedd-id/rs-1.svg'
import RS2 from '../../public/assets/bedd-id/rs-2.svg'
import RS3 from '../../public/assets/bedd-id/rs-3.svg'

export default function BeddID(props: any){

    const data = {   
        id: "bedd-id",
        number: 3,
        name: "Bedd",
        category: "Website",
        position: "Front End",
        year: 2021,
        details: {
            projectName: "Bedd",
            techStack: [ "React", "React Router", "Tailwind CSS" ],
            position: "Front End",
            category: "Website",
            work: "Personal Work",
            year: 2021,
            link: "https://rs-bed-covid-api.vercel.app",
            nameLink: "coocaainne-design.netlify.app"
        }
    }

    return (
        <section className="relative animate-fadeIn">
            <Head>
                <meta charSet="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Bedd ID - Find available hospital bed in your area" />
                <link rel="icon" href="/favicon.png" />
                <title>{data.name}</title>
            </Head>

            <WorkGradient />

            <WorkContainer>
                <WorkHeader name={data.name} category={data.category} position={data.position} link={data.details.link} year={data.year} number={data.number} />

                <section id="WorkContent" className="px-[280px] desktop:px-[140px] laptop:px-[70px] mobileL:px-[20px]">
                    <section className="mt-[100px] tabletL:mt-[50px]">
                        <h1 className="font-medium text-5xl leading-tight">
                            Find available room for
                            <br/>COVID-19 patients.
                        </h1>
                        
                        <p className="mt-[20px] text-white/80">
                            Currently the web app is only showing available hospital room in Indonesia.
                        </p>
                    </section>

                    <section className="mt-[100px] py-[45px] tabletL:mt-[100px] flex items-center justify-center rounded-[30px]">
                        <div className="w-[80%] laptopXL:w-[90%] tabletL:w-full grid grid-cols-2 gap-[80px] tabletL:grid-cols-1">
                            <Image src={HomeBedd} alt="Home" className="w-full rounded-[20px]" />
                            <Image src={HomeBedd2} alt="Home" className="w-full rounded-[20px]" />

                            <div className="group w-full p-[50px] laptopXL:p-[30px] flex flex-col items-start justify-between bg-[#262626] border border-[#353535] rounded-[30px] hover:bg-white hover:text-black transition-all">
                                <h1 className="text-5xl leading-tight laptopXL:text-4xl">
                                    Helping everyone 
                                    to find available 
                                    hospital room.
                                </h1>

                                <p className="mt-[40px] text-white/80 group-hover:text-black transition-all">Do you need a room for your friend, family even yourself ? This website might help you with that.</p>
                            </div>

                            <div className="group w-full p-[50px] laptopXL:p-[30px] flex flex-col items-start justify-between bg-[#262626] border border-[#353535] rounded-[30px] hover:bg-white hover:text-black transition-all">
                                <h1 className="text-5xl leading-tight laptopXL:text-4xl">
                                Cover almost
                                all city & province.
                                </h1>

                                <p className="mt-[40px] text-white/80 group-hover:text-black transition-all">Almost all city & province of hospital room you can find on the website.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-[200px] grid grid-cols-3 gap-5 tabletL:grid-cols-1">
                        <Image src={RS1} alt="RS1" className="w-full" />
                        <Image src={RS2} alt="RS2" className="w-full" />
                        <Image src={RS3} alt="RS3" className="w-full" />
                    </section>

                    <section className="w-full mt-[200px] flex items-center justify-center">
                        <div className="w-fit flex flex-col items-center justify-center">
                            <h1 className="text-6xl tabletL:text-5xl">Behind the scenes.</h1>
                            <p className="mt-[20px] text-lg tabletL:text-base text-[#E1E1E1]">Room information data is provided by <Link href="https://rs-bed-covid-api.vercel.app" rel="noreferrer" target="_blank" className="underline text-white">RS Bed COVID API</Link> </p>
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