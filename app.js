// console.log('ap.js connected!')
var icons = document.querySelectorAll('.icon')
var modal = $('#modal-background')
var closeBtn = $('span')[0]
var modalTitle = $('.modal-content h2')
var modalUrl = $('.modal-content iframe')

var videoData = [
  {
    title: '',
    url: ''
  },
  {
    title: "Grimaldi's Pizzeria",
    url: 'https://videos.virtualapt.com/bestof/grimaldis/'
  },
  {
    title: 'Sugarcane',
    url: 'https://videos.virtualapt.com/bestof/dumbo/sugarcane/'
  },
  {
    title: "Oddfellow's Ice Cream",
    url: 'https://videos.virtualapt.com/bestof/oddfellows/'
  },
  {
    title: "Minus Space",
    url: 'https://videos.virtualapt.com/bestof/dumbo/minus-space/'
  },
  {
    title: "United Photo Industries",
    url: 'https://videos.virtualapt.com/bestof/dumbo/unitedphoto/'
  },
  {
    title: "John Fluevog Shoes",
    url: 'https://videos.virtualapt.com/bestof/dumbo/fluevog/'
  },
  {
    title: "Atrium",
    url: 'https://videos.virtualapt.com/bestof/dumbo/atrium/'
  },
  {
    title: "Aegir Boardworks",
    url: 'https://videos.virtualapt.com/bestof/aegir/'
  },
  {
    title: "Gleason's Gym",
    url: 'https://videos.virtualapt.com/bestof/gleasons/'
  }
]

function clickEventHandler(event) {
  var id = this.id.split("_").pop()
  modal.css('display', "block")
  modalTitle.text(videoData[id].title)
  // modalUrl.text(videoData[id].url)
  modalUrl.attr('src', videoData[id].url)
}

function hoverEventHandler() {
  var id = this.id.split("_").pop()
  $(`#label_${id}`).css('opacity', '1')
}

function outEventHandler() {
  var id = this.id.split("_").pop()
  $(`#label_${id}`).css('opacity', '0')
}

icons.forEach(i => {
  i.addEventListener('click', clickEventHandler)
  i.addEventListener('mouseover', hoverEventHandler)
  i.addEventListener('mouseout', outEventHandler)
})

closeBtn.addEventListener('click', function() {
  modal.css('display', 'none')
  modalUrl.attr('src', 'http://blank.org/')
})