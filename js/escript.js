function dataContratacao(){
    let data = new Date();
    let diaMesAno = data.getDay()+'-'+data.getMonth()+'-'+data.getFullYear();
    document.getSelection('#dataContratacao').value = diaMesAno; 
    console.log(diaMesAno);
    
}