document.addEventListener('DOMContentLoaded', function () {

  var colorContainer = document.getElementById('color-container')
  var colors = document.getElementsByClassName('circle')
  var currentColor = document.getElementById('current-color')
  var selectedColor = 'white'

  for (var i = 0; i < 2800; i++) {
    var gridContainer = document.getElementById('grid-container')
    gridCell = document.createElement('div')
    gridCell.classList.add('grid-cell-medium')
    gridContainer.appendChild(gridCell)

    // gridCell.addEventListener('click' function(e) {
    //   e.target.style.backgroundColor = selectedColor
    // })
  }

  for (var i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', function(e) {
      selectedColor = getComputedStyle(e.target).backgroundColor
      currentColor.style.backgroundColor = selectedColor
    })
  }


})
