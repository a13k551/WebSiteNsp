/* ВЫПАДАЮЩЕЕ МЕНЮ */
triangles = document.getElementsByClassName("info__title");
let triangleElement;

for (let index = 0; index < triangles.length; index++) {
  let triangle = triangles[index];
  triangle.addEventListener("click", onClicktriangle);
}

function onClicktriangle(el) {
  getChildElementByClassName(this, "triangle", triangleElement);
  triangleElement.classList.toggle("_active");

  elements = this.children;
  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    if (element.classList.contains("menu__subList")){
      element.classList.toggle("menu__subList__active");  
    }
  }
}

function getChildElementByClassName(element, ClassName, targetElement) {
  if (element.classList.contains(ClassName)) {
    triangleElement = element;
  }

  for (let index = 0; index < element.children.length; index++) {
    const chilelement = element.children[index];
    getChildElementByClassName(chilelement, ClassName, targetElement);
  }
}

/* регионы */
const regions = document.getElementsByClassName("menu__sub-link");
for (let index = 0; index < regions.length; index++) {
  const region = regions[index];
  region.addEventListener("click", onClickRegion)
}
function onClickRegion(){
  console.log(this.innerHTML);
  regionItem.innerHTML = this.innerHTML;
  console.log(this.parentNode.parentNode.parentNode); 
}

/* СЛАЙДЕР */
setInterval(() => {
  img1.classList.toggle("active__slider");
  img2.classList.toggle('active__slider');
 
  if (img1.classList.contains("active__slider")){
    line1.style.display = "block";
    slider__text1.style.display = "block";
  }
  else{
    line1.style.display = "none";
    slider__text1.style.display = "none";
  }

  if (img2.classList.contains("active__slider")){
    line2.style.display = "block";
    slider__text2.style.display = "block";
  }
  else{
    line2.style.display = "none";
    slider__text2.style.display = "none";
  } 
}, 4000);

/* ПОИСК */
img__Search.addEventListener("click", img__SearchClick)
function img__SearchClick(){
    imp__Search.style.width = 150 + 'px'; 
}

/* POPUP */
modOkno.addEventListener("click", (e)=>{
  popup.classList.add("open");
})

const popup__closes = document.querySelectorAll('.popup__closed');
for (let index = 0; index < popup__closes.length; index++) {
  const popup__close = popup__closes[index];
  popup__close.addEventListener("click", (e)=>{
    popup.classList.remove("open");
  })
}
popup__body__ID.addEventListener("click", (e)=>{
  console.log();
  if (e.target.classList.contains("popup__body")){
    popup.classList.remove("open");  
  }
})