$(function () {
  var name = $('#name'),
    nameRepeat = $('#name-repeat'),
    greet = $('#greet'),
    submit = $('button')

  name.bind('keyup',function () {
    var disabled, value
    value = name.val()
    if (value.length === 0) {
      submit.attr('disabled', 'disabled')
      greet.css('display', 'none')
    } else {
      submit.removeAttr('disabled')
      greet.css('display', 'block')
    }
    nameRepeat.innerHTML = value
  })

  submit.bind('click', function () {
    alert('Buradan "' + name.val() + '" ismi servise gönderildi.')
  })
})
