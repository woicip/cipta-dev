export default function Tech(props: any){
    return (
        <div className="w-[120px] h-[120px] p-[22px] rounded-[10px] bg-[#191919] flex items-center justify-center border border-white/5">
            { props.children }
        </div>
    )
}