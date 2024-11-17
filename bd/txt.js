const photoAlbum = document.getElementById('photoAlbum');
let scrollAmount = 0;

function autoScroll() {
  scrollAmount += 2; // Adjust speed here
  photoAlbum.scrollLeft = scrollAmount;

  // Reset scroll position for a continuous loop
  if (scrollAmount >= photoAlbum.scrollWidth / 2) {
    scrollAmount = 0;
  }

  requestAnimationFrame(autoScroll);
}

// Start automatic scrolling
autoScroll();