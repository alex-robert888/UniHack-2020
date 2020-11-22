
import './TheVideoSection.scss';
import balazsVideo from '../../assets/3DUCK-presentation.mp4'

const TheVideoSection = () => {
    return (
        <div className='the-video-section'>
            <video className="video-balazs" controls>
                <source src={balazsVideo} type="video/mp4" />
            </video>
        </div>
    );
}

export default TheVideoSection;