import Lottie from 'lottie-react';
import loadingFood from './loading-food.json';

const Loading = () => (
    <Lottie
        height={50}
        width={50}
        animationData={loadingFood}
    />
);

export default Loading;
