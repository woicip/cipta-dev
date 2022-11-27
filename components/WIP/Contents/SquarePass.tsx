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

import vw2 from '../../../assets/wip/digital-wasteland.gif';

export default function SquarePass(props: any){
    return (
        <WIPContent name="SquarePass" date="July 10, 2022" gradient="base">
            <Title> &quot;A good place for you to keep your credentials 🔒&quot; </Title>

            <Description>
                Well... basically a web app to store your account information.<br /><br />

                This is good for you to keep important credentials like <HighlightText>Email</HighlightText>, <HighlightText>Password</HighlightText>, <HighlightText>Secret Key </HighlightText>
                but you don&apos;t have a platform to keep your credentials ?<br/><br/> 
                
                So... that&apos;s why I 
                made SquarePass so you can keep your secret information anytime and anywhere. Also 
                it&apos;s free to use anyway 😁<br /><br />
                
                Anyway... the web application is still under development & 
                I&apos;m still concerning about
                the security tbh, Cuz at the end I&apos;m gonna use SquarePass.
            </Description>

            <LabelContainer>
                <Label>Web Application</Label>
                <Label>Next JS</Label>
            </LabelContainer>

            <ImageContainer>
                <Image src={vw2} alt="Kocak Gaming" className="w-full" />
                <ImageDesc>
                    Calming moving grid floor ...<br/>
                    <Link href="https://ericaofanderson.tumblr.com/post/164715050242/digital-wasteland-you-can-get-this-gif-as-a" target="_blank" rel="noreferrer" className="text-xs border-b border-white/50 border-dashed hover:border-white hover:text-white">GIF by Erica Anderson</Link>
                </ImageDesc>
            </ImageContainer>
        </WIPContent>
    )
}