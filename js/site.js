function drawToolBox(data) {
  var tools = ich.tools({
    'rows': data
  })
  $('#tools').html(tools)
}

$(document).on( 'click', '#showAvailable', toggleAvailable)

$(document).on( 'click', '.clear', function(e) {
  clearSearch(e)
  $('#showAvailable').removeClass('button-pressed')
    .html('Show Available')
})

$(document).on('keyup', '#toolSearch', function(e) {
  var text = $(e.target).val()

  if (text === '') return clearSearch(e)
  if ($('.button-pressed').length === 1) {
    console.log('Hide unavailable')
    $('.tool-box').filter('.not-available').hide()
  }
  filterTools(text)
})

$(document).on( 'click', '.tool-box-tool', function(e) {
  var rowNumber = $(this).closest("div").attr("id")
  if ($(this).closest('div').hasClass('selected-tool')) {
    $('.tool-box-bottom' + '.' + rowNumber).css('display', 'none')
    $(this).closest('div').removeClass('selected-tool')
  }
  else {
    $('.tool-box-bottom' + '.' + rowNumber).css('display', 'inherit')
    $(this).closest('div').addClass('selected-tool')
  }
})

function toggleAvailable() {
  if ($('.button-pressed').length === 0) {
    console.log('off')
    $('#showAvailable').addClass('button-pressed')
      .html('Show All')
    $('.not-available').hide()
  } else {
    console.log('on')
    $('#showAvailable')
      .html('Show Available').removeClass('button-pressed')
    if ($('#toolSearch').val() != '') {
      console.log("search not empty")
      return filterTools($('#toolSearch').val())
    }
    $('.not-available').show()
  }
}

function clearSearch(e) {
  console.log('clear')
  $('#toolSearch').val('')
  drawToolBox(gData)
}

function filterTools(text) {
  $('.tool-box-tool').each(function() {
  var tool = $(this).html().toLowerCase()
  if (tool.match(text)) {
    $(this).parent().show()
  } else $(this).parent().hide()
  })
}
