import Image from 'next/image';
import Label from '../Label';
import Title from '../Title';
import WIPContent from '../Content';
import ImageDesc from '../ImageDesc';
import Description from '../Description';
import LabelContainer from '../LabelContainer';
import ImageContainer from '../ImageContainer';

import beach from '../../../assets/wip/beach.png';

export default function Livefy(props: any){
    return (
        <WIPContent name="Livefy" date="October 20, 2021" gradient="purpledream">
            <Title> &quot;An application that can track of what you have doing in a day 🧦&quot; </Title>

            <Description>
                Do you ever feel like you have forgotten something in the past ? But you can&apos;t remember what is going
                on in the past right ?
                <br /><br />
                So I made this web app to keep track of what you doing in a day.
                <br /><br />
                Don&apos;t worry I&apos;m not gonna collect of your data on the app because
                I also gonna use this web app for my daily life to keep track 
                of what I&apos;m doing in a day.
            </Description>

            <LabelContainer>
                <Label>Web Application</Label>
                <Label>React JS</Label>
            </LabelContainer>

            <ImageContainer>
                <Image src={beach} alt="Kocak Gaming" />
                <ImageDesc>
                    Beach during the day
                    <p className="text-xs">Generated by Dall E</p>
                </ImageDesc>
            </ImageContainer>
        </WIPContent>
    )
}