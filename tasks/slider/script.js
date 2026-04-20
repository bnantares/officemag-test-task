const $viewport = $('.catalog__viewport');
const $track = $('.catalog__track');
const $thumb = $('.catalog__thumb');
const $scrollbar = $('.catalog__scrollbar');

let isDown = false;
let startX = 0;
let startLeft = 0;

function getMaxScroll() {
  return Math.max(1, $track.width() - $viewport.width());
}

function getMaxThumbMove() {
  return Math.max(1, $scrollbar.width() - $thumb.width());
}

function updateThumb() {
  const viewportWidth = $viewport.width();
  const contentWidth = $track.width();
  const barWidth = $scrollbar.width();

  const ratio = viewportWidth / contentWidth;
  const thumbWidth = barWidth * ratio;

  $thumb.css('width', thumbWidth + 'px');

  syncThumbPosition();
}

function syncThumbPosition() {
  const scrollLeft = $viewport.scrollLeft();

  const maxScroll = getMaxScroll();
  const maxThumbMove = getMaxThumbMove();

  const ratio = scrollLeft / maxScroll;
  const thumbLeft = ratio * maxThumbMove;

  $thumb.css('left', thumbLeft + 'px');
}

$viewport.on('scroll', function () {
  syncThumbPosition();
});

$thumb.on('mousedown', function (e) {
  isDown = true;
  startX = e.pageX;
  startLeft = $thumb.position().left;

  $('body').addClass('no-select');
});

$(document).on('mouseup', function () {
  isDown = false;
  $('body').removeClass('no-select');
});

$(document).on('mousemove', function (e) {
  if (!isDown) return;

  const delta = e.pageX - startX;
  const maxLeft = getMaxThumbMove();

  let newLeft = startLeft + delta;
  newLeft = Math.max(0, Math.min(newLeft, maxLeft));

  const ratio = newLeft / maxLeft;
  const maxScroll = getMaxScroll();

  $viewport.scrollLeft(maxScroll * ratio);

  $thumb.css('left', newLeft + 'px');
});

$(window).on('load resize', function () {
  updateThumb();
});