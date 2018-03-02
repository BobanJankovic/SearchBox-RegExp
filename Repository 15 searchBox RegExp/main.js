var btn =$('button');



btn.on('click', function(){
   var searchTerm=$('#searchField').val();
    var searchTermReg= new RegExp(searchTerm, 'g');
    var sviElementi= $('p:contains('+searchTerm+')');
    sviElementi.each(function (index,el){
        var stariText = $(el).html();
        var noviText = stariText.replace(searchTermReg,'<span class="selektovano">'+searchTerm+'</span>');
        $(el).html(noviText);
    });
});