import Lottie from 'lottie-react';
import loadingFood from './loading-food.json';
import { EwsH1 } from './typography/text-components';

const Loading = () => (
    <div style={{ maxWidth: '50%', margin: 'auto' }}>
        <EwsH1>Loading...</EwsH1>
        <Lottie animationData={loadingFood} />
    </div>
);

export default Loading;
