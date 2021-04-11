document.addEventListener('DOMContentLoaded', function(){
    
    var nsquadre = nomesquadra.length;
    var TeamGrid = document.getElementById('team-grid');
    
    var ngiocatori = nomeG.length;
    var Ggrid= document.getElementById('player-grid');
    
    for(let i=0 ; i < nsquadre; i++){
        var div= document.createElement('div');
        div.className='squadra';
        div.id='squadra'+ i;
            var nome= document.createElement('div');
            nome.className='nome';
                var h1 = document.createElement('h1');
                h1.id='h1' +i;
                h1.textContent= nomesquadra[i];
                nome.appendChild(h1);
                var buttonimg = document.createElement('img');
                buttonimg.id='icon';
                buttonimg.setAttribute('onclick', 'aggiungiaScelte('+i+')');
                buttonimg.src='add-icon.png';
                nome.appendChild(buttonimg);
                div.appendChild(nome);
                var img=document.createElement('img');
                img.setAttribute('onclick', 'mostraDescrizione('+i+')');
                img.src=immagini[i];
                div.appendChild(img);
                var descr = document.createElement('div');
                descr.className='descrizioneS';
                descr.id='iddescrizioneS' +i;
                descr.textContent = descrizione[i];
                div.appendChild(descr);

                TeamGrid.appendChild(div);

    }
    for(let j=0; j<ngiocatori; j++){
        console.log(ngiocatori);
        var divG= document.createElement('div');
        divG.className='giocatore';
        divG.id='giocatore' +j;
        var nome= document.createElement('div');
        nome.className ='nomeG';
            var h1=document.createElement('h1');
            h1.id='h1' +j;
            h1.textContent=nomeG[j];
            nome.appendChild(h1);
            var buttonimg=document.createElement('img');
            buttonimg.id='icon';
            buttonimg.setAttribute('onclick','aggiungiGiocatore('+j+')');
            buttonimg.src='add-icon.png';
            nome.appendChild(buttonimg);
            divG.appendChild(nome);
            var img=document.createElement('img');
            img.setAttribute('onclick', 'showDescr('+j+')');
            img.src=imgG[j];
            divG.appendChild(img);
            var descr=document.createElement('div');
            descr.className='descrizioneG';
            descr.id='iddescrizioneG' +j;
            descr.textContent=desczG[j];
            divG.appendChild(descr);

            Ggrid.appendChild(divG);
    }
}, false);