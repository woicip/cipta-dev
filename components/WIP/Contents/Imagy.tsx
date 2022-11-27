import Link from 'next/link';
import Image from 'next/image';
import GoTo from '../GoTo';
import Label from '../Label';
import Title from '../Title';
import WIPContent from '../Content';
import ImageDesc from '../ImageDesc';
import Description from '../Description';
import HighlightText from '../HighlightText';
import LabelContainer from '../LabelContainer';
import ImageContainer from '../ImageContainer';

import vw1 from '../../../assets/wip/sunset-vp.gif';

export default function Imagy(props: any){
    return (
        <WIPContent name="Imagy API" date="November 12, 2022" gradient="peach">
            <Title> &quot;Providing developers with data they need through HTTP 🧩&quot; </Title>

            <Description>
                REST API for developer to test their <HighlightText>UI Prototype</HighlightText>, <HighlightText>UI Testing</HighlightText> or even any other use case using Imagy API. <br /><br />

                The REST API providing developers with some data like user&apos;s data, anime images, beach images etc. 
                How about the <GoTo link="https://imagy.vercel.app">docs</GoTo> ? You can visit the web, I&apos;m still working on it but the API itself is ready to use. <br/><br/>

                My current problem now is finding a free hosting to host my SQL database and host the API.
            </Description>

            <LabelContainer>
                <Label>Developer Tools</Label>
                <Label>REST API</Label>
                <Label>HTTP</Label>
                <Label>Express JS</Label>
            </LabelContainer>

            <ImageContainer>
                <Image src={vw1} alt="Vaporwave Anime" className="w-full" />     
                <ImageDesc>
                    <p>Vaporwave again ...</p>
                    <Link href="https://giphy.com/channel/jacobcasson" target="_blank" rel="noreferrer" className="text-xs border-b border-white/50 border-dashed hover:border-white hover:text-white">GIF by @jacobcasson</Link>
                </ImageDesc>
            </ImageContainer>
        </WIPContent>
    )
}