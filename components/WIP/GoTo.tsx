export default function GoTo(props: any){
    const { link } = props;
    return <a href={link} target="_blank" rel="noreferrer" className="text-white border-b border-white/50 border-dashed hover:text-[#03fcc2] hover:border-[#03fcc2]">{props.children}</a>
}