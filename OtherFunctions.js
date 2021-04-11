function mostraDescrizione(id){
    var x= document.getElementById('iddescrizioneS'+ id);
    if(x.style.display ==='' ){
        x.style.display='block';
    }else{
        x.style.display='';
    }
}

function showDescr(id){
    var x= document.getElementById('iddescrizioneG' +id);
    if( x.style.display ==='' ){
        x.style.display='block';
    }else{
        x.style.display='';
    }
}

function searchG(){
    var input,filter,PlayerGrid,player,h1,i,txt;
    input=document.getElementById('searchBarG');
    filter=input.value.toUpperCase();
    PlayerGrid=document.getElementById('player-grid');
    player= PlayerGrid.getElementsByClassName('giocatore');

    for(i=0;i<player.length;i++){
        h1 = player[i].getElementsByTagName('h1')[0];
        txtValue= h1.innerText;

            if(txtValue.toUpperCase().indexOf(filter)> -1){
                player[i].style.display="";
            }else{
                player[i].style.display="none";
            }
    }
}

function search(){
    var input,filter,TeamGrid,team,h1,i,txt;
    input=document.getElementById('searchBar');
    filter = input.value.toUpperCase();
    TeamGrid = document.getElementById('team-grid');
    team = TeamGrid.getElementsByClassName('squadra');

    for(i=0;i<team.length;i++){
        h1 = team[i].getElementsByTagName('h1')[0];
        txtValue= h1.innerText;

            if(txtValue.toUpperCase().indexOf(filter) > -1 ){
                team[i].style.display ="";
            }else{
                team[i].style.display ="none";
            }
    }
}

function aggiungiGiocatore(id){
    var choiceGridG, div, nomeGioc, h1, img, buttonimg;
    choiceGridG=document.getElementById('choicep');

        if(document.getElementById('h1G' +id)){
            var ogg=document.getElementById('h1G' +id);
        }

        if(ogg == undefined){
            div=document.createElement('div');
            div.className='giocatore';
            div.id='giocatoreS' +id;

            nomeGioc =document.createElement('div');
            nomeGioc.className='titoloG';
                h1=document.createElement('h1');
                h1.textContent=nomeG[id];
                h1.id='h1G' +id;
                nomeGioc.appendChild(h1);

                buttonimg=document.createElement('img');
                buttonimg.id='icon';
                buttonimg.setAttribute('onclick', 'rimuoviGiocatore('+id+')');
                buttonimg.src='delete-icon.png';
                nomeGioc.appendChild(buttonimg);

                div.appendChild(nomeGioc);

                img=document.createElement('img');
                img.id='imgGioc';
                img.src=imgG[id];
                div.appendChild(img);
            choiceGridG.appendChild(div);
        }
        if(document.getElementById('choicep').childElementCount ==5){
            document.getElementById('box-giocatori').style.display='none';
        }
}
function aggiungiaScelte(id){
    var choiceGrid, div, nomeS, h1, img, buttonimg;
    choiceGrid = document.getElementById('choices');

        if(document.getElementById('h1C' +id)){
            var ogg = document.getElementById('h1C' +id);
        }

        if(ogg == undefined){
            div = document.createElement('div');
            div.className='squadra';
            div.id = 'squadraS' +id;

            nomeS= document.createElement('div');
            nomeS.className ='titolo';
                h1= document.createElement('h1');
                h1.textContent = nomesquadra[id];
                h1.id ='h1C' +id;
                nomeS.appendChild(h1);

                buttonimg = document.createElement('img');
                buttonimg.id= 'icon';
                buttonimg.setAttribute('onclick', 'rimuoviScelta('+id+')');
                buttonimg.src = 'delete-icon.png';
                nomeS.appendChild(buttonimg);

            div.appendChild(nomeS);

            img = document.createElement('img');
            img.id = 'imgC';
            img.src = immagini[id];
            div.appendChild(img);

        choiceGrid.appendChild(div);
        }
    document.getElementById('choices').style.display="flex";
    document.getElementById('box-squadre').style.display="none";
}

function rimuoviScelta(id){
    var x= document.getElementById('squadraS' +id);
    x.remove();

    document.getElementById('choices').style.display="none";
    document.getElementById('box-squadre').style.display="initial";
}

function rimuoviGiocatore(id){
    var x=document.getElementById('giocatoreS' +id);
    x.remove();

    if(document.getElementById('choicep').childElementCount<5){
        document.getElementById('box-giocatori').style.display='initial';
    }
}

function openNav(){
    document.getElementById("NewSideNav").style.width="250px";
}

function closeNav(){
    document.getElementById("NewSideNav").style.width="0px";
}