function clicked(){
    const text=document.querySelector('.text');
    const date=document.querySelector('.date');
    if(!text.value || !date.value){
        alert('fill in details');
        return;
    }
    const newLine=document.createElement('div');
    const txt=document.createElement('p');
    const dat=document.createElement('p');
    const btn=document.createElement('button');
    txt.innerText=text.value;
    dat.innerText=date.value;
    btn.innerText="del";
    document.body.appendChild(newLine);
    newLine.appendChild(txt);
    newLine.appendChild(dat);
    newLine.appendChild(btn);
    
}