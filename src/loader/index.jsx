
import useLoader from '../hooks/useLoader';
import './style.scss'
import loadingIcon from '../assets/image/loading-icon.png'
import { memo } from 'react';
function Loader(){
    const {loading} = useLoader()
    return loading && (
        <div className='loader-box'>
            <div className='loader-animation'>
                <h1>Loading</h1>
                <img src={loadingIcon} alt="" />
            </div>
        </div>
    )
}

export default memo(Loader);