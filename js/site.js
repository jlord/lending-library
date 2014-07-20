// draw the initial table
function drawToolBox(data) {
  var tools = ich.tools({
    "rows": data
  })
  $('#tools').html(tools)
}

function toggleAvailable() {
  console.log("toogle")
  if ($('.button-pressed').length === 0) {
    console.log("off")
    $('#showAvailable').addClass('button-pressed')
      .html('Show Available')
    $('.not-available').hide()
  } else {
    console.log("on")
    $('.not-available').show()
    $('#showAvailable').removeClass('button-pressed')
      .html('Show Available')
  }
}

$(document).on( "click", "#showAvailable", toggleAvailable)

$(document).on( "click", ".clear", function() {
  $(this.id + "#toolSearch").val("")
  drawToolBox(gData)
  $('#showAvailable').removeClass('button-pressed')
    .html('Show Available')
})



//
// if ($('.button-pressed')) {
//   $('.tool-box').filter('.available').hide()
// }
//
//
// // toggle available/all tools with search as well
// $('#showAvailable').live("click", function(event) {
//   var searchValue = $('#toolSearch').val()
//   if ($(this).hasClass('button-pressed')) {
//     console.log("UNPRESSED")
//     $(this).removeClass('button-pressed').removeClass('onlyAvailable').html('Show Available')
//     $('.tool-box').not('.available').show()
//     if (!searchValue) return $('.tool-box').show() // drawToolBox(gData)
//     toolsFromSearch(searchValue)
//   }
//   else {
//     $(this).addClass('button-pressed').addClass('onlyAvailable').html('Show All')
//     if (!searchValue) {
//       console.log("PRESSED, NO SEARCH VALUE")
//       // var availableTools = Sheetsee.getMatches(gData,"yes", "checkedout")
//       // console.log($('.tool-box').length)
//       // drawToolBox(availableTools)
//       $('.tool-box').not('.available').hide()
//     }
//     else {
//       console.log("PRESSED, SEARCH VALUE")
//       // var searchResults = Sheetsee.getKeyword(gData, searchValue)
//       // var availableFromSearch = Sheetsee.getMatches(searchResults,"", "checkedout")
//       // console.log(availableFromSearch)
//       // drawToolBox(availableFromSearch)
//       // // $('.tool-box').filter('.available').hide()
//       $('.tool-box').not('.available').hide()
//     }
//   }
// })
//
// // toggle tool box expand
// $('.tool-box-tool').live("click", function(event) {
//    var rowNumber = $(this).closest("div").attr("id")
//    if ($(this).closest('div').hasClass('selected-tool')) {
//      $('.tool-box-bottom' + '.' + rowNumber).css('display', 'none')
//      $(this).closest('div').removeClass('selected-tool')
//    }
//    else {
//      $('.tool-box-bottom' + '.' + rowNumber).css('display', 'inherit')
//      $(this).closest('div').addClass('selected-tool')
//    }
//  })
//
//  // filter input
// $('.clear').on("click", function() {
//   $(this.id + "#toolSearch").val("")
//   drawToolBox(gData)
//   $('#showAvailable').removeClass('button-pressed')
//     .removeClass('onlyAvailable').html('Show Available')
// })
//
// $('#toolSearch').keyup(function(e) {
//   var text = $(e.target).val()
//   if (text === "") return drawToolBox(gData)
//   if ($('.button-pressed').length === 1) {
//     console.log("Hide unavailable")
//     $('.tool-box').not('.available').hide()
//   }
//   return toolsFromSearch(text)
// })
//
// function toolsFromSearch(searchTerm) {
//   $('.tool-box-tool').not(function() {
//     var content = $(this).html().toLowerCase()
//     return content.match(searchTerm)
//   }).parent().hide()
//   // $('.tool-box-tool').not(function() {
//   // 	var content = $(this).html().toLowerCase()
//   // 	return content.match(searchTerm)
//   // }).parent().hide()
//   // $('.tool-box-tool').filter(function() {
//   // 	var content = $(this).html().toLowerCase()
//   // 	return content.match(searchTerm)
//   // }).parent().show()
//   // var searchedData = Sheetsee.getMatches(gData, searchTerm, "tool")
//   // console.log(searchedData.length)
//   // return drawToolBox(searchedData)
// }
