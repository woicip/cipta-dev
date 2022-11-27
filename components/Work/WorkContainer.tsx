export default function WorkContainer(props: any){
    return (
        <section className="w-full h-full absolute left-0 top-[250px] tabletL:top-9">
            { props.children }
        </section>
    )
}