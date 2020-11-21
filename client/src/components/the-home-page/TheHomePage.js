
import './TheHomePage.scss';
import '../../style/classes.scss';
import BaseIssueCard from '../base/BaseIssueCard';
import BaseTagStatus from '../base/BaseTagStatus';
import TheHeader from '../the-header/TheHeader';

const TheHomePage = () => {
    
    return (
        <div className='TheHomePage glb-page'>
            <TheHeader/>
            <h1>The Home Page</h1>
            <BaseIssueCard 
                postedDate="2020-11-17 13:05"
                title="Electricity constantly tripping"
                description="Lorem ipsum and stuff and stuff and other stuff, yeah, pretty long
                longer longer, and so it became the longest message little Timmy has ever seen before
                in his short childish life. Since the message is not long enough we shall continue
                writing some more lines to see if this works."
                tag="Pending"
                button="Mark as done"
            />
            <BaseTagStatus 
                status="Pending"
            />
        </div>
    );
}

export default TheHomePage;