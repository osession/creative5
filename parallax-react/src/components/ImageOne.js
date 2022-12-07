import { Parallax } from 'react-parallax';
import Christmas from '../images/christmas.jpg';

const ImageOne = () => (
    <Parallax className='image' bgImage={Christmas} strength={800}>
        <div className ='content'>
            <span className='img-txt'>Holiday Traditions</span>
        </div>
    </Parallax>
);

export default ImageOne;