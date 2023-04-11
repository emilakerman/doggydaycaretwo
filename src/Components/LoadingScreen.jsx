import ReactLoading from 'react-loading';
import '../App.css';

const LoadingScreen = ({ type, color }) => (
    <div id="loadingScreen">
        <ReactLoading type={"bars"} color={color} height={667} width={375} />
    </div>
);
 
export default LoadingScreen;