import Image from 'next/image';
import calendar from '../../assets/icons/calendar.svg';

export default function YearSeparation(props: any){

    const { year } = props;

    return (
        <section className="w-full py-[20px] px-[30px] font-medium border-t border-b border-white/20 flex items-center">
            <Image src={calendar} alt="YearIcon" className="w-[24px] mobileL:w-[20px] mr-[20px] mobileL:mr-[15px]" />
            <p className="text-[22px] mobileL:text-[18px] text-white/60">{year}</p>
        </section>
    )
}