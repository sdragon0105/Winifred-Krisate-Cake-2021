
let content_item = document.querySelectorAll('.image-content');
for (let i = 0; i < content_item.length; i++) {
    let width1 = content_item[i].getBoundingClientRect().width;
    let width2 = content_item[i].querySelector('.image-info').getBoundingClientRect().width;

    let width3 = width1 - width2;
    width3 = width3 / 2;
    console.log(width3);

    content_item[i].querySelector('.group-grid-product__meta--position').style.left = width3+"px";
}

