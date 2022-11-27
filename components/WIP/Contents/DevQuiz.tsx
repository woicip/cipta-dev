import GoTo from '../GoTo';
import Label from '../Label';
import Title from '../Title';
import WIPContent from '../Content';
import Description from '../Description';
import HighlightText from '../HighlightText';
import LabelContainer from '../LabelContainer';

export default function DevQuiz(props: any){
    return (
        <WIPContent name="Dev Quiz" date="July 11, 2022" gradient="night">
            <Title> &quot;Simple web quiz for devs with Blazingly Fast JS Runtime ⚡&quot; </Title>

            <Description>
                So the context is at that time Bun JS is launched to public but still not stable yet. A lot of people saying that <GoTo link="https://bun.sh">Bun JS</GoTo> is blazingly fast, said people on Twitter.
                <br/><br/>

                Personally ... I love Bun ❤ because I don&apos;t need to wait <HighlightText>&quot;Starting the development server ...&quot;</HighlightText> anymore when I want to run the React project using Bun.
                It just took <HighlightText>1 ms</HighlightText> to start the development server!
                <br/><br/>

                So with that knowledge, I was started to build Dev Quiz using React and made the API using Bun to handling the HTTP Request & Response.
            </Description>

            <LabelContainer>
                <Label>Bun JS</Label>
            </LabelContainer>
        </WIPContent>
    )
}