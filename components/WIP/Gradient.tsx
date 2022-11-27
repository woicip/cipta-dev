export default function Gradient(props: any){
    return (
        <>
            { props.type === "base" && <div className="w-[60px] h-[60px] mobileL:w-[45px] mobileL:h-[45px] rounded-xl bg-gradient-to-b from-[#E59152] to-[#B42877]"></div> }
            { props.type === "bluevy" && <div className="w-[60px] h-[60px] mobileL:w-[45px] mobileL:h-[45px] rounded-xl bg-gradient-to-b from-[#64E8DE] to-[#8A64EB]"></div> }
            { props.type === "pinksalmon" && <div className="w-[60px] h-[60px] mobileL:w-[45px] mobileL:h-[45px] rounded-xl bg-gradient-to-b from-[#FF9897] to-[#F650A0]"></div> }
            { props.type === "peach" && <div className="w-[60px] h-[60px] mobileL:w-[45px] mobileL:h-[45px] rounded-xl bg-gradient-to-b from-[#FFCDA5] to-[#EE4D5F]"></div> }
            { props.type === "aqua" && <div className="w-[60px] h-[60px] mobileL:w-[45px] mobileL:h-[45px] rounded-xl bg-gradient-to-b from-[#00FFED] to-[#00B8BA]"></div> }
            { props.type === "night" && <div className="w-[60px] h-[60px] mobileL:w-[45px] mobileL:h-[45px] rounded-xl bg-gradient-to-b from-[#3499FF] to-[#3A3985]"></div> }
            { props.type === "sunset" && <div className="w-[60px] h-[60px] mobileL:w-[45px] mobileL:h-[45px] rounded-xl bg-gradient-to-b from-[#FFA62E] to-[#EA4D2C]"></div> }
            { props.type === "purpledream" && <div className="w-[60px] h-[60px] mobileL:w-[45px] mobileL:h-[45px] rounded-xl bg-gradient-to-b from-[#FF6CAB] to-[#7366FF]"></div> }
        </>
    )
}