import React from 'react';
// import './styles/Prompt.module.css'

const WindowId = "promptWindow";

const GetSelf = ()=> document.getElementById(WindowId);
const CloseWindow = () => GetSelf().style.display = 'none';
const ShowWindow = () => GetSelf().style.display = 'block';

const MoveWindowUp = () => {
    GetSelf().style.top = "10vh"; 
}
const MoveWindowDown = () =>  {
    GetSelf().style.top= "60vh";
};

const promptWindow = (props) => {
    const { YES, NO, other, yesVal, noVal, otherVal } = props;
    return (
        < div className="prompt" id={WindowId} >
            <div className="close">
                <button className="close close-red" onClick={CloseWindow}>&#x25AC;</button>
                <button className="close close-blue" onClick={MoveWindowUp}>&#x25B2;</button>
                <button className="close close-green" onClick={MoveWindowDown}>&#x25BC;</button>
            </div>
            <div className="prompt-row p2">
                <button className="choice" onClick={() => props.onSetValue(yesVal)}>{YES}</button>
                <button className="choice" onClick={() => props.onSetValue(noVal)}>{NO}</button>
                <button className="choice" onClick={() => props.onSetValue(otherVal)}>{other}</button>
            </div>
        </div >
    );
}

export default promptWindow;
export { ShowWindow, CloseWindow };