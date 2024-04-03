$(document).ready(()=>{
    $('header button').click(()=>{
        $('form').slideDown()
    })
    $('#cancelar').click(()=>{
        $('form').slideUp()
    })
    $('form').on('submit',(e)=>{
        e.preventDefault()
        const inputUrl = $('#inputUrl').val()
        const novoElemento = $('<li></li>')
        $(`<img src="${inputUrl}" />`).appendTo(novoElemento)
        $(`
            <div class="overlay-image-link">
                <a href="${inputUrl}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoElemento);
        $(novoElemento).appendTo('ul');
        $(novoElemento).fadeIn(500);
        $('#inputUrl').val('');
    })
})