interface Data {
    name: string,
    link: string
}

export default function GlowButton(props: Data){
    const { name, link } = props;
    
    return (
        <section className="py-[15px] tabletL:mt-[50px] tabletL:w-full relative group/button transition-all">
            <a href={link} className="w-full inline-block py-[15px] px-[30px] mobileL:py-[10px] mobileL:px-[15px] mobileL:text-[16px] rounded-full bg-gradient-to-b from-[#F1319E] to-[#EE9654] font-bold relative z-10 transition-all">{name}</a>
            <div className="w-full h-full absolute left-0 top-0 bg-gradient-to-b from-[#F1319E] to-[#EE9654] rounded-[50px] blur-xl opacity-30 hidden group-hover/button:inline-block transition-all"></div>
        </section>
    )
}