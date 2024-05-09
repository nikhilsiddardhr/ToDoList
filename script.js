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
    txt.style.display="inline";
    dat.style.display="inline";
    txt.style.marginRight="60px";
    dat.style.marginRight="60px";
    newLine.style.marginTop="15px";
    newLine.appendChild(txt);
    newLine.appendChild(dat);
    newLine.appendChild(btn);
    btn.addEventListener("click",()=>{
        newLine.remove();
    })
    text.value="";
    date.value="";
}