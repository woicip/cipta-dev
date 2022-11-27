import GoTo from '../GoTo';
import Label from '../Label';
import Title from '../Title';
import WIPContent from '../Content';
import Description from '../Description';
import HighlightText from '../HighlightText';
import LabelContainer from '../LabelContainer';

export default function CreateSimpleID(props: any){
    return (
        <WIPContent name="Create Simple ID" date="July 29, 2022" gradient="purpledream">
            <Title> &quot;Create your simple ID with zero dependency 🍀&quot; </Title>

            <Description>
                I made a package for us to create simple ID with simple configuration and it comes with zero dependency. Go check out the package on NPM!

                <div className='mt-[50px]'>
                    <p>Available on <GoTo link="https://www.npmjs.com/package/create-simple-id">NPM</GoTo></p>
                </div>
            </Description>
        </WIPContent>
    )
}