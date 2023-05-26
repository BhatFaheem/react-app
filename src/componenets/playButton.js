import './playButton.css'
import { useState } from 'react';
function PlayButton({message , children, onPlay , onPause})
{
    const [playing , setPlaying] = useState(false);
    function handleCLick()
    {
        if(playing) onPause();
        else onPlay();

        setPlaying(!playing);
    }
    return (
        <button onClick={handleCLick}> {children } : {playing ?  '⏸️' :'▶️' }</button>
    )
}
export default PlayButton;