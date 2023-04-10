import ReactLoading from 'react-loading';

const LoadingScreen = ({ type, color }) => (
    <ReactLoading type={"bars"} color={color} height={667} width={375} />
);
 
export default LoadingScreen;