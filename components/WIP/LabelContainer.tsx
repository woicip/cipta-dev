export default function LabelContainer(props: any){
    return (
        <section className="w-full mt-[50px] flex items-center flex-wrap mobileL:overflow-scroll">
            {props.children}
        </section>
    )
}