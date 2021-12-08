const btnAdd=document.querySelector("#btnAdd");
const btnRemove=document.querySelector("#btnRemove");
const Liste=document.querySelector("#liste");
const ListeyeEkle=document.querySelector("#ListeyeEkle");

btnAdd.addEventListener("click",ekle)

function ekle(event)
{
    event.preventDefault();
if(ListeyeEkle.value=="")
{
    alert("Bos geçilemez");
    return;
}
const newOptions=new Option(ListeyeEkle.value);
Liste.appendChild(newOptions);
ListeyeEkle.value="";
ListeyeEkle.focus();

}

btnRemove.addEventListener("click",remove);

function remove(event)
{
    event.preventDefault();
    let seciliElemanlar=[];
    for(let i=0;i<Liste.options.legth;i++)
    {
        seciliElemanlar[i]=Liste.options[i].selected //secili elamanlar alır
    }
    let index=Liste.options.legth;
    while(index--)
    if(seciliElemanlar[index])
    {
        Liste.remove(index);
    }
}
