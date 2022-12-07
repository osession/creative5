import { Parallax } from 'react-parallax';
import LightsGirl from '../images/lightsgirl.jpg';

const ImageThree = () => (
    <Parallax className='image' bgImage={LightsGirl} strength={800}>
        <div className ='content'>
            <span className='img-txt'>Happy Holidays!</span>
        </div>
    </Parallax>
);

export default ImageThree;