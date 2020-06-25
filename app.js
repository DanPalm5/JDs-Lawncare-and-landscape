const bgimg = document.querySelector(".hero")

const t1 = new TimelineMax();

t1.fromTo(bgimg, 1.5, {height:"0%"}, 
{height: "100%", ease: Power2.easeInOut}
).fromTo(
    bgimg, 
    1.2,
     {width: "80%"},
    {width: "100%", ease: Power2.easeInOut}
);