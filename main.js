$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();

        const novaTarefa = $('#tarefa-id').val();
        const novaAdicaoTarefa = $(`<li id="linha-id" > ${novaTarefa} </li>`);
        $(novaAdicaoTarefa).appendTo('ul');
        $('#tarefa-id').val('');
    })
// utilizei o toggleClass, pois se a tarefa foi finalizada incorretamente, é possível reverte-la
    $('ul').on('click', 'li', function(e){
        $(this).toggleClass('tarefa_Finalizada');

        
    })

    
})