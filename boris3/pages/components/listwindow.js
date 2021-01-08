import React, { Component } from 'react';

const windowId = "listWindow";
const GetSelf = ()=> document.getElementById(windowId)
const ShowSelf = ()=>GetSelf().style.display = 'block';
const CloseSelf = ()=>GetSelf().style.display = 'none';

const listDisplay = () => (
    < div className="" id={this.state.id} >
        <div className="close">
            <button className="close" onClick={CloseSelf}>&#x25AC;</button>
        </div>
        <div className="list-row">            
        </div>
    </div >);

const showList = (list) => {
    
}

export default listDisplay;
export {showList};