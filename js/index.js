(function () {
  //document.addEventListener('click',)
  let menuAList = document.querySelectorAll('.menus a')
  for (var i = 0, len = menuAList.length; i < len; i++) {
    menuAList[i].addEventListener('click',changeLink)
  }
  function changeLink(){
    let slidesDom = document.getElementById('slides')
    let xlen = this.getAttribute('data-index')*100
    slidesDom.style.transform = 'translateX('+(-xlen)+'vw)'
    for (var j = 0, len = menuAList.length; j < len; j++) {
      menuAList[j].classList.remove('active')
    }
    this.classList.add('active')
  }
})()