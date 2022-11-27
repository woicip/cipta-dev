import Head from "next/head";
import Image from "next/image";
import { useEffect, useContext } from "react";
import { Context } from "../components/Context/Context";
import Tech from "../components/About/Tech";
import about from '../styles/about.module.css';

// Assets
import me from '../public/assets/me.jpg';
import reactIcon from '../public/assets/tech/react.svg';
import vue from '../public/assets/tech/vue.svg';
import next from '../public/assets/tech/next-new.svg';
import tailwind from '../public/assets/tech/tailwind.svg';
import node from '../public/assets/tech/node.svg';
import mongo from '../public/assets/tech/mongo.svg';
import graphql from '../public/assets/tech/graphql.svg';
import jwt from '../public/assets/tech/jwt.svg';
import sequelize from '../public/assets/tech/sequelize.svg';
import ubuntu from '../public/assets/tech/ubuntu.svg';
import betterCallSaul from '../public/assets/series-movie/better-call-saul.svg'
import breakingBad from '../public/assets/series-movie/breaking-bad.svg'

export default function About(props: any){

    const context = useContext(Context);
    const { navDispatch }: any = context;

    useEffect(() => {
        navDispatch({ type: 'about' });
    }, []);

    return (
        <main>
            <Head>
            <meta charSet="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="About Gunawan Cipta" />
                <link rel="icon" href="/favicon.png" />
                <title>About - Gunawan Cipta</title>
            </Head>

            <section>
                <div id="ProfileContainer" className="animate-fadeIn mt-[180px] tabletL:mt-[50px] px-[280px] desktop:px-[140px] laptopXL:px-[70px] mobileL:px-[20px] grid grid-cols-2 gap-[200px] laptopXL:gap-[100px] tabletL:gap-10 tabletL:grid-cols-1">
                    <div>
                        <h1 className="text-5xl font-medium leading-tight">Focusing on building things that can give value to everyone.</h1>
                        <p className="mt-[70px] text-[20px] mobileL:text-[16px] leading-relaxed laptopXL:text-[16px] text-[#999999]">
                            Hi, My name is Gunawan Cipta, I&apos;m from Indonesia. <br/><br/>
                            I started my self as a Web Developer when I was thinking about
                            turning my app design into real application so everyone can
                            access and use my application that I design.
                            <br/><br/>
                            I&apos;ve been 2 Years in Web Development journey and still until now
                            I&apos;m developing some web application that have visually pleasing
                            and good user experience.
                            <br/><br/>
                        </p>
                    </div>
        
                    <div className="relative">
                        <Image loading="lazy" src={me} alt="Me" className="w-auto rounded-lg" />

                        <div className="mt-[30px] px-[20px] flex items-center justify-between">
                            <div>
                                <h1 className="text-[#C4C4C4] font-bold tabletL:text-[14px]">Based In</h1>
                                <p className="font-bold text-[22px] tabletL:text-[18px]">Indonesia</p>
                            </div>

                            <div className="h-[35px] w-[1px] bg-white/20"></div>

                            <div>
                                <h1 className="text-[#C4C4C4] font-bold tabletL:text-[14px]">Profession</h1>
                                <p className="font-bold text-[22px] tabletL:text-[18px]">Web Dev</p>
                            </div>
                        </div>
                    </div>
                </div>

                <section id="TechStackContainer" className="mt-[325px] tabletL:mt-[200px] px-[280px] desktop:px-[140px] laptopXL:px-[70px] mobileL:px-[20px]">
                    <div>
                        <h1 className="text-4xl font-bold tabletL:text-4xl">Tech Stack</h1>
                        <p className="mt-[10px] text-[16px] mobileL:text-[15px] text-white/50">
                            Here are some technologies that <br className="tabletL:hidden"/>
                            I&apos;m using for building web, backend, bot and etc. <br/>
                        </p>
                    </div>

                    <div className={about.TechStack}>
                        <Tech>
                            <Image src={reactIcon} alt="React JS" className="w-[70px]" />
                        </Tech>

                        <Tech>
                            <Image src={vue} alt="Vue" className="w-[70px]" />
                        </Tech>

                        <Tech>
                            <Image src={next} alt="Next" className="w-[70px]" />
                        </Tech>

                        <Tech>
                            <Image src={tailwind} alt="Tailwind" className="w-[70px]" />
                        </Tech>

                        <Tech>
                            <Image src={node} alt="Node" className="w-[70px]" />
                        </Tech>

                        <Tech>
                            <Image src={mongo} alt="Mongo" className="w-[70px]" />
                        </Tech>

                        <Tech>
                            <Image src={graphql} alt="GraphQL" className="w-[70px]" />
                        </Tech>

                        <Tech>
                            <Image src={jwt} alt="JWT" className="w-[70px]" />
                        </Tech>

                        <Tech>
                            <Image src={sequelize} alt="Sequelize" className="w-[70px]" />
                        </Tech>

                        <Tech>
                            <Image src={ubuntu} alt="Ubuntu" className="w-[70px]" />
                        </Tech>
                    </div>

                    <p className="w-full text-center mt-[50px] text-white/25">AND MANY MORE</p>
                </section>

                <section id="SeriesMovieContainer" className="mt-[300px] tabletL:mt-[200px] px-[280px] desktop:px-[140px] laptopXL:px-[70px] mobileL:px-[20px]">
                    <div>
                        <h1 className="text-4xl font-bold tabletL:text-4xl">Fav Series/Movie</h1>
                        <p className="mt-[10px] text-[16px] text-white/50 mobileL:text-[15px]">
                            Since this is my website so I can freely expressing <br className="tabletL:hidden"/>
                            my favourite series/movie that I watched/watching
                        </p>
                    </div>

                    <div className={about.SeriesMovie}>
                        <div className="w-full h-full rounded-2xl bg-[#191919] border border-white/10 group relative">
                            <Image src={betterCallSaul} alt="Better Call Saul" className="w-full saturate-0 group-hover:saturate-100" />
                            <div className="px-[20px] py-[15px] flex items-start justify-between">
                                <div>
                                    <h1 className="font-bold text-[20px] laptopXL:text-[18px]">Better Call Saul</h1>
                                    <p className="text-[#409ed1] laptopXL:text-[14px]">Watching</p>
                                </div>

                                <p className="font-bold text-[20px] laptopXL:text-[18px]">S1 - S6</p>
                            </div>
                        </div>

                        <div className="w-full h-full rounded-2xl bg-[#191919] border border-white/10 group relative">
                            <Image src={breakingBad} alt="Breaking Bad" className="w-full saturate-0 group-hover:saturate-100" />
                            <div className="px-[20px] py-[15px] flex items-start justify-between">
                                <div>
                                    <h1 className="font-bold text-[20px] laptopXL:text-[18px]">Breaking Bad</h1>
                                    <p className="text-[#4fc038] laptopXL:text-[14px]">Completed</p>
                                </div>

                                <p className="font-bold text-[20px] laptopXL:text-[18px]">S1 - S5</p>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="EndOfPage" className="mt-[100px] py-[200px] px-[140px] tabletL:px-[70px] mobileL:px-[20px] flex flex-col items-center justify-center">
                    <h1 className="w-full font-bold text-7xl leading-tight text-center tabletL:text-4xl mobileL:break-words">Available to <br className="tabletL:hidden"/> work internationally</h1>
                    <p className="mt-[40px] text-[20px] mobileL:text-base tabletL:text-sm tabletL:mt-[20px] font-medium text-center text-white/80">
                        Send me your message via Email.
                        <br className="mobileL:hidden"/> I will respond to your message as soon as possible.
                    </p>

                    <div className="w-max mt-[70px] py-[15px] tabletL:mt-[35px] relative">
                        <a href="mailto:gnwncpta@gmail.com" className="w-full py-[15px] px-[30px] rounded-full bg-gradient-to-b from-[#F1319E] to-[#EE9654] font-bold relative z-10">SEND MESSAGE</a>
                        <div className="w-full h-full absolute left-0 top-0 bg-gradient-to-b from-[#F1319E] to-[#EE9654] rounded-[50px] blur-2xl opacity-40"></div>
                    </div>
                </section>
            </section>

        </main>
    )
}