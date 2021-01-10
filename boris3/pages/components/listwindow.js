import React from 'react';

const windowId = "listWindow";
const GetSelf = ()=> document.getElementById(windowId)
const ShowSelf = ()=>GetSelf().style.display = 'block';
const CloseSelf = ()=>GetSelf().style.display = 'none';

const listDisplay = () => (
    < div className=""id={windowId} >
        <div className="close">
            <button className="close" onClick={CloseSelf}>&#x25AC;</button>
        </div>
        <div className="list-row">
            <div>
                <span data-app-translate="1" data-app-text="date">თარიღი</span>
                <span data-app-translate="1" data-app-text="score">ქულა</span>
            </div>
            <div id="scorelist">
            </div>            
        </div>
    </div >);

const showList = (list) => {
    if (list.length < 1){
        return;
    }
    list.sort((a,b) => {
        // reverse sort
        if(a.score > b.score){
            return -1;
        }
        if(a.score < b.score){
            return 1;
        }
        return 0;
    })
    const extract_date = (date) => `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}-${date.getHours()}:${date.getMinutes()}`;
    let scoreList =  document.getElementById('scorelist');
    if (scoreList.children.length > 9){
        // debugger;
        // no for each yet :(
        for (let i=0,len= scoreList.children;i<len;i++){
            scoreList.children[i].children[0].textContent = extract_date(list[i].date);
            scoreList.children[1].children[1].textContent = list[i].score; 
        }
        ShowSelf();
        return;
    }
    scoreList.innerHTML = '';
    list.forEach(element => {
        const date = document.createElement('span');
        date.classList.add("record-date");
        date.textContent = extract_date(element.date);
        const score = document.createElement('span');
        score.classList.add("record-score");
        score.textContent = element.score;
        const box = document.createElement('div');
        box.classList.add('record-box');
        box.appendChild(date);
        box.appendChild(score);
        scoreList.appendChild(box);
    });
    ShowSelf();
}

export default listDisplay;
export {showList};