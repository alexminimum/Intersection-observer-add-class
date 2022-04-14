const sections = document.querySelectorAll('[js="waypoint"]');

let config = {
  //similar to the CSS margin
  //serves to grow or shrink each side of the root element's bounding box before computing intersections
  rootMargin: '0px',
  //Indicate at what percentage of the target's visibility the observer's callback should be executed.
  //If you only want to detect when visibility passes the 50% mark, you can use a value of 0.5
  threshold: .1
};

let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      intersectionHandler(entry);
    } 

  });
}, config);

sections.forEach(section => {
  observer.observe(section);
});

function intersectionHandler(entry) {
  console.log("entry.target: ", entry.target);
  //aqui es donde le haces cosas al entry...

  entry.target.classList.add('in-view')
  // entry.target.setAttribute('css', 'in-view')

}
