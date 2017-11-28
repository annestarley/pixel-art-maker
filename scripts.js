document.addEventListener('DOMContentLoaded', function () {
  alert('its working')

  for (var i = 0; i < 2800; i++) {
    var gridContainer = document.getElementById('grid-container')
    gridCell = document.createElement('div')
    gridCell.classList.add('grid-cell-medium')
    gridContainer.appendChild(gridCell)
  }

})
