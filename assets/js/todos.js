//jQuery only add listers on the exist element,so if use$('li'),the new created li will not have listers on.so we change to add listers on ul, then add another 'li' means when click on the li in the ul
$('ul').on('click', 'li', function () {
  $(this).toggleClass('completed')
})
$('ul').on('click', 'span', function () {
  $(this).parent().fadeOut()
  event.stopPropagation()
})
$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    toDotext = $(this).val();
    $(this).val('')
    $("ul").append(`<li><span><i class="fas fa-trash-alt"></i></span> ${toDotext}</li>`)
  }
})