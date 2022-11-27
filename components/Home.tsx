import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Work from "./Work"
import WorkFooter from "./Footer";
import OnlyMeImage from '../public/assets/home/onlyme.webp';
import CCODesignImage from '../public/assets/home/cco-design.webp';
import BeddImage from '../public/assets/home/bedd.webp';
import downloadIcon from '../public/assets/download.svg';

export default function Home(props: any){

    const works = [
        { 
            name: "Only Me",
            category: "Web Application",
            link: "https://onlyme.netlify.app",
            thumbnail: OnlyMeImage,
            route: "/work/only-me"
        },
        { 
            name: "CCO Design",
            category: "Web Portfolio",
            link: "https://coocaainne-design.netlify.app",
            thumbnail: CCODesignImage,
            route: "/work/cco-design"
        },
        { 
            name: "Bedd",
            category: "Website",
            link: "https://coocaainne-design.netlify.app",
            thumbnail: BeddImage,
            route: "/work/bedd-id"
        }
    ];

    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Turn Imagination Into Real Application" />
                <link rel="icon" href="/favicon.png" />
                <title>Gunawan Cipta</title>
            </Head>

            <section className="relative animate-fadeIn">
                <div id="GradientBackground" className="h-screen bg-gradient-to-b from-[#E59152] via-[#992366] to-[#111111] mobileS:mb-[100px]"></div>
                <h1 className="hidden tabletL:block absolute top-10 mx-[70px] mobileL:mx-[20px] text-md font-medium">Gunawan Cipta</h1>

                <section id="Welcome" className="h-screen w-full flex flex-col items-center justify-center px-[140px] laptop:px-[70px] tabletL:px-[70px] tabletL:items-start tabletM:px-[20px] absolute top-0 ">
                    <h1 className="text-center text-8xl desktop:text-7xl leading-tight font-semibold tabletL:text-left tabletL:text-5xl mobileS:text-3xl">
                        Turn Imagination <br className="tabletL:hidden"/> Into Real Application
                    </h1>

                    <p className="mt-[20px] text-[20px] mobileS:text-[15px] text-center text-white/50 tabletL:text-left tabletL:text-[16px]">
                        I&apos;m a <span className="text-white/100">Web Developer</span> and <span className="text-white/100">Web Designer</span> who love
                        to design and building <br className="tabletL:hidden" /> things for web visually pleasing and functional.
                    </p>

                    <section className="mt-[50px] tabletL:mt-[30px]">
                        <Link href="/cipta_resume.pdf" className="group tabletL:text-sm flex items-center py-[10px] px-[20px] tabletL:px-[15px] rounded-[10px] text-white/50 bg-white/10 hover:text-white/100 hover:bg-white/20 backdrop-blur-sm border border-white/10 transition-all">
                            <Image src={downloadIcon} alt="Download_Icon" width={20} className="tabletL:w-[18px] mr-[10px] opacity-50 group-hover:opacity-100 transition-all" />
                            Download Resume
                        </Link>
                    </section>
                </section>

                <section id="Works" className="w-full py-[10px] tabletL:px-[80px] px-[240px] desktop:px-[140px] mobileL:px-[20px]">
                    { works.map((work, index) => <Work key={index+1} name={work.name} category={work.category} link={work.link} thumbnail={work.thumbnail} route={work.route} />) }
                </section>

                <section id="EndOfPage" className="mt-[100px] py-[200px] px-[140px] tabletL:px-[70px] mobileL:px-[20px] flex flex-col items-center justify-center">
                    <h1 className="w-full font-bold text-7xl leading-tight text-center tabletL:text-4xl mobileL:break-words">Available to <br className="tabletL:hidden"/> work internationally</h1>
                    <p className="mt-[40px] text-[20px] mobileL:text-base tabletL:text-lg tabletL:mt-[20px] font-medium text-center text-white/80">
                        Send me your message via Email.
                        <br className="mobileL:hidden"/> I will respond to your message as soon as possible.
                    </p>

                    <div className="w-max mt-[70px] py-[15px] tabletL:mt-[35px] relative">
                        <a href="mailto:gnwncpta@gmail.com" className="w-full py-[15px] px-[30px] rounded-full bg-gradient-to-b from-[#F1319E] to-[#EE9654] font-bold relative z-10">SEND MESSAGE</a>
                        <div className="w-full h-full absolute left-0 top-0 bg-gradient-to-b from-[#F1319E] to-[#EE9654] rounded-[50px] blur-2xl opacity-40"></div>
                    </div>
                </section>

            </section>
        </>
    )
}