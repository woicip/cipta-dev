import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useContext } from "react";
import { Context } from "../components/Context/Context";
import WIPContainer from "../components/WIP/WIPContainer";
import WIPContent from "../components/WIP/Content";
import Title from "../components/WIP/Title";
import Description from "../components/WIP/Description";
import Label from "../components/WIP/Label";
import LabelContainer from "../components/WIP/LabelContainer";
import ImageContainer from "../components/WIP/ImageContainer";
import ImageDesc from "../components/WIP/ImageDesc";
import HighlightText from "../components/WIP/HighlightText";
import YearSeparation from "../components/WIP/YearSeparation";
import GoTo from "../components/WIP/GoTo";

// Contents
import Imagy from "../components/WIP/Contents/Imagy";
import DevQuiz from "../components/WIP/Contents/DevQuiz";
import SquarePass from "../components/WIP/Contents/SquarePass";
import Livefy from "../components/WIP/Contents/Livefy";
import CreateSimpleID from "../components/WIP/Contents/CreateSimpleID";

export default function WIP(props: any){

    const context = useContext(Context);
    const { navDispatch }: any = context;

    useEffect(() => {
        navDispatch({ type: 'wip' });
    }, []);

    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Work In Progress" />
                <link rel="icon" href="/favicon.png" />
                <title>WIP - Gunawan Cipta</title>
            </Head>

            <section className="relative animate-fadeIn">
                <div id="GradientBackground" className="h-[80vh] bg-gradient-to-b from-[#E59152] via-[#B42877] to-[#111111]"></div>
                <h1 className="hidden tabletL:block absolute top-10 mx-[70px] mobileL:mx-[20px] text-md font-bold">Gunawan Cipta</h1>

                <section id="Welcome" className="h-screen w-full flex flex-col items-center justify-center px-[140px] laptop:px-[70px] tabletL:px-[70px] tabletL:items-start mobileL:px-[20px] absolute top-0">
                    <h1 className="text-center text-8xl desktop:text-7xl font-semibold tabletL:text-left tabletL:text-5xl tabletL:leading-tight">
                        <span className="italic font-thin">&quot;WIP&quot;</span><br/>Work In Progress 
                    </h1>
                    
                    <p className="mt-[20px] text-[20px] text-white/50 text-center tabletL:text-left tabletL:text-[16px]">
                        A place where you can see what I&apos;m working on, archived work <br className="tabletL:hidden" />
                        or even random like my life updates.    
                    </p>
                </section>

                <WIPContainer>
                    <YearSeparation year={2022} />

                    <Imagy/>
                    <CreateSimpleID />
                    <DevQuiz />
                    <SquarePass/>

                    <YearSeparation year={2021} />

                    <Livefy />
                </WIPContainer>

            </section>
        </>
    )
}