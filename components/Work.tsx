import Link from "next/link";
import Image from "next/image";
import ArrowLink from '../public/Link.svg';
import GlowButton from "./Button/GlowButton";

interface Work {
    name: string,
    category: string,
    link: string,
    thumbnail: any,
    route: string
}

export default function Work(props: Work){

    const { name, category, link, thumbnail, route } = props;

    return (
        <section className="relative w-full group">
            <button className="relative z-20 w-full h-max mb-[100px] bg-[#191919] border border-white/5 rounded-[25px] tabletL:rounded-[25px] grid grid-cols-2 gap-5 tabletL:grid-cols-1 transition-all" onClick={() => document.location.href = route}>
                <section className="w-full h-full py-[80px] px-[75px] desktop:py-[45px] desktop:px-[55px] laptop:px-[50px] tabletL:px-[25px] tabletL:py-[30px] flex flex-col items-start justify-between">
                    <section className="w-full flex items-start justify-between">
                        <div>
                            <h1 className="w-fit text-3xl laptop:text-2xl font-bold tabletL:text-xl tabletL:leading-none">{name}</h1>
                            <p className="w-fit mt-[5px] text-[20px] laptop:text-[18px] tabletL:text-[15px] text-[#8A8A8A] font-medium">{category}</p>
                        </div>

                        <Link href={link} className="py-[6px] px-[12px] rounded-full border border-white/10 text-white/50 text-sm font-medium hidden tabletL:flex items-center">
                            Open
                            <Image src={ArrowLink} alt="ArrowLink" width={13} className="ml-[8px] mr-[2px] opacity-60" />
                        </Link>
                    </section>

                    <div className="tabletL:hidden z-10">
                        <GlowButton name={link.split('://')[1]} link={link} />
                    </div>
                </section>

                <section className="w-full relative right-0 tabletL:inline-block">
                    <Image src={thumbnail} placeholder="blur" alt="image-thumbnail" loading="lazy" className="w-max relative bg-[#3F4457] rounded-[25px] tabletL:rounded-[25px] z-[10] tabletL:top-1" />
                    <div className="hidden tabletL:block tabletL:right-0 tabletL:bottom-2 w-full h-full absolute top-0 right-[5px] bg-gradient-to-r to-[#F1319E] from-[#EE9654] rounded-[25px] tabletL:rounded-[25px]"></div>
                    <div className="tabletL:hidden opacity-0 group-hover:opacity-100 transition-all w-full h-full absolute top-0 right-[5px] bg-gradient-to-b to-[#F1319E] from-[#EE9654] rounded-[25px] tabletL:rounded-[25px]"></div>
                </section>
            </button>

        </section>
    )
}