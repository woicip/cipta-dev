import Link from 'next/link';
import Image from 'next/image';
import ArrowLink from '../../public/Link.svg';

interface WorkDetails {
    projectName: string,
    techStack: string[],
    position: string,
    category: string,
    work: string,
    year: number,
    link: string,
}

export default function WorkDetails(props: WorkDetails){

    const { projectName, techStack, position, category, work, year, link } = props;

    return (
        <section id="WorkDetails" className="mt-[200px] pb-[200px] px-[350px] desktop:px-[140px] laptop:px-[100px] mobileL:px-[20px] grid grid-cols-2 laptop:grid-cols-1 laptop:gap-4 relative">
            <div className="w-full laptop:pb-[100px] tabletL:py-[25px] mr-[200px] relative">
                <h1 className="text-6xl font-bold leading-tight">Work <br />Details</h1>
            </div>

            <section>
                <section className="w-full grid grid-cols-3 gap-10 tabletL:gap-5 relative">
                    <div>
                        <h1 className="font-bold text-[#A1A1A1] tabletL:text-[15px]">Project</h1>
                        <p className="mt-[5px] text-[20px] desktop:text-[18px] tabletL:text-[16px] font-bold">{projectName}</p>
                    </div>

                    <div>
                        <h1 className="font-bold text-[#A1A1A1] tabletL:text-[15px]">Category</h1>
                        <p className="mt-[5px] text-[20px] desktop:text-[18px] tabletL:text-[16px] font-bold">{category}</p>
                    </div>

                    <div>
                        <h1 className="font-bold text-[#A1A1A1] tabletL:text-[15px]">Position</h1>
                        <p className="mt-[5px] text-[20px] desktop:text-[18px] tabletL:text-[16px] font-bold">{position}</p>
                    </div>

                    <div>
                        <h1 className="font-bold text-[#A1A1A1] tabletL:text-[15px]">Work</h1>
                        <p className="mt-[5px] text-[20px] desktop:text-[18px] tabletL:text-[16px] font-bold">{work}</p>
                    </div>

                    <div>
                        <h1 className="font-bold text-[#A1A1A1] tabletL:text-[15px]">Year</h1>
                        <p className="mt-[5px] text-[20px] desktop:text-[18px] tabletL:text-[16px] font-bold">{year}</p>
                    </div>

                    <div className="col-start-3 col-end-3">
                        <h1 className="mb-[7px] font-bold text-[#A1A1A1] tabletL:text-[15px]">Site</h1>
                        <Link href={link} target="_blank" rel="noreferrer" className="w-fit flex py-[4px] px-[15px] rounded-full text-[20px] desktop:text-[18px] tabletL:text-[16px] font-bold text-white transition-all bg-pink-500 hover:bg-pink-500/50">
                            Visit
                            <Image src={ArrowLink} alt="Arrow-Link" width={13} height={13} className="ml-[13px]" />
                        </Link>
                    </div>
                </section>

                <section className='mt-[30px]'>
                    <h1 className="font-bold text-[#A1A1A1] tabletL:text-[15px]">Tech Stack</h1>
                    <div className='mt-[5px]'>
                        { techStack.map((tech: any, index: any) => <p key={index+1} className="text-[20px] desktop:text-[18px] tabletL:text-[16px] font-bold">{tech}</p>) }
                    </div>
                </section>
            </section>

        </section>
    )
}