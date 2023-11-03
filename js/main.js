$(function () {
  const $masonry = $(".masonry");

  $masonry.imagesLoaded(function () {
    $masonry.masonry({
      itemSelector: ".masonry-item",
      columnWidth: 300,
      gutter: 20,
      fitWidth: true,
    });
  });
});
