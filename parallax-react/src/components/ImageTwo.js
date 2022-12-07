import { Parallax } from 'react-parallax';
import Frosty from '../images/frosty.jpg';

const ImageTwo = () => (
    <Parallax className='image' bgImage={Frosty} strength={800}>
        <div className ='content'>
            <span className='img-txt'>How do You Celebrate?</span>
        </div>
    </Parallax>
);

export default ImageTwo;