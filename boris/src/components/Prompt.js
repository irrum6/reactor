import React from 'react';
import './Prompt.css'

const WindowId = "promptWindow";

const CloseWindow = () => document.getElementById(WindowId).style.display = 'none';
const ShowWindow = () => document.getElementById(WindowId).style.display = 'block';

const promptWindow = (props) => {
    const { YES, NO, other, yesVal, noVal, otherVal } = props;
    return (
        < div className="prompt" id={WindowId} >
            <div className="close">
                <button className="close" onClick={CloseWindow}>&#x25AC;</button>
            </div>
            <div className="prompt-row">
                <button className="choice" onClick={() => props.onSetValue(yesVal)}>{YES}</button>
                <button className="choice" onClick={() => props.onSetValue(noVal)}>{NO}</button>
                <button className="choice" onClick={() => props.onSetValue(otherVal)}>{other}</button>
            </div>
        </div >
    );
}
export default promptWindow;
export { ShowWindow, CloseWindow };