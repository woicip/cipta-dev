import Link from "next/link";
import Image from "next/image";

// Assets
import ArrowLink from '../../public/Link.svg'

interface WorkHeader {
    name: string,
    category: string,
    position: string,
    year: number,
    link: string,
    number: number
}

export default function WorkHeader(props: WorkHeader){

    const { name, category, position, year, link, number } = props;

    return (
        <section className="px-[280px] desktop:px-[140px] laptop:px-[70px] mobileL:px-[0px] sticky">
            <div className="w-full flex items-end justify-between pb-[20px] tabletL:pb-[30px] mobileL:px-[20px] border-b border-white/50 tabletL:border-white/20">
                <div>
                    <Link href={link} target="_blank" rel="noreferrer" className="flex items-center w-fit font-bold text-[40px] tabletL:text-2xl group cursor-pointer">
                        {name}
                        <Image src={ArrowLink} alt="arrow" loading="lazy" className="tabletL:w-[20px] ml-5 tabletL:ml-3 opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>

                    <div className="mt-[10px] tabletL:mt-[5px] flex text-white/80">
                        <p className="font-medium tabletL:text-[14px]">{category}</p>
                        <span className="mx-[20px] laptop:mx-[20px] tabletL:text-[14px] tabletL:mx-[10px]">\\</span>
                        <p className="font-medium tabletL:text-[14px]">{position}</p>
                        <span className="mx-[20px] laptop:mx-[20px] tabletL:text-[14px] tabletL:mx-[10px]">\\</span>
                        <p className="font-medium tabletL:text-[14px]">{year}</p>
                    </div>
                </div>

                <div className="tabletL:hidden">
                    <h1 className="text-6xl">0{number}</h1>
                </div>
            </div>
        </section>
    )
}