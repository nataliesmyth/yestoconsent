console.log('sanity check')

$('#navbarDropdown').on('show.bs.dropdown', function () {
    // do something…
    console.log('hello')
  })

$('#home-link').on('click', function() {
  $('#main-index').hide()
})