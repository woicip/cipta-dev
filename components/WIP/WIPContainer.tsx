export default function WIPContainer(props: any){
    return (
        <section className="mt-[100px] mb-[0px] tabletL:mb-[50px] px-[580px] desktop:px-[300px] laptopXL:px-[100px] tabletL:px-[40px] mobileL:px-[0px]">
            {props.children}
        </section>
    )
}