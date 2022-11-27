import { ReactNode } from 'react';
import Gradient from './Gradient';

interface Props {
    name: string;
    date: string;
    gradient: string;
    children: ReactNode;
}

export default function Content(props: Props){

    const { name, date, gradient, children } = props;

    return (
        <section className='px-[10px] mobileL:px-[20px] mobileL:border-b border-white/10'>
            <section className="w-full grid grid-cols-[0.13fr_1fr]">
                <div className='w-[60px] mobileL:w-[45px] h-[100px] flex items-center justify-center'>
                    <span className='w-[1px] h-full bg-white/10'></span>
                </div>

                <span></span>

                <div className="w-fit relative">
                    <h1 className="h-full w-full flex items-center justify-center absolute text-3xl tabletL:text-2xl font-semibold opacity-30">{name.slice(0, 1)}</h1>
                    <Gradient type={gradient} />
                </div>

                <div className='tabletL:ml-[20px]'>
                    <h1 className="text-[22px] font-bold mobileL:text-[18px]">{name}</h1>
                    <p className="text-[16px] text-white/50 mobileL:text-sm">{date}</p>
                </div>

                <div className='w-[60px] mobileL:w-[45px] h-full flex items-center justify-center'>
                    <span className='w-[1px] h-full bg-white/10'></span>
                </div>

                <div className="mt-[50px] pb-[50px] tabletM:mt-[25px] text-[16px] leading-relaxed tabletL:text-[15px] mobileL:col-span-2">
                    { children }
                </div>
            </section>
        </section>
    )
}