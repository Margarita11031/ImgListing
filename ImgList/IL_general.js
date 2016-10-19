/**
 * Created by user on 19.10.2016.
 */
var currImg = 0;
var divCont;
var divListing;
var imgPath = [
    "./IMGsLib/Graffiti_1.jpg",
    "./IMGsLib/Graffiti_2.JPG",
    "./IMGsLib/Graffiti_3.jpg",
    "./IMGsLib/Graffiti_4.jpg",
    "./IMGsLib/Graffiti_5.jpg",
    "./IMGsLib/Graffiti_6.jpg",
    "./IMGsLib/Graffiti_7.jpg",
    "./IMGsLib/Graffiti_8.jpg",
    "./IMGsLib/Graffiti_9.jpg",
    "./IMGsLib/Graffiti_10.jpg"
];

function genImage (imgId, imgClass, imgSrc){
    var img = new Image();
    img.id = imgId;
    img.className = imgClass;
    img.src = imgSrc;
    return img;
}
//ListPoint.prototype = Object.create(Image.prototype);
//ListPoint.prototype.constructor = ListPoint;

window.addEventListener("load",init);

function init(){
    divCont = document.getElementById("img_container");
    divListing = document.getElementById("listing_container");

    for(var i = 0; i < imgPath.length; i++){
        divCont.appendChild(genImage("graffiti_"+i, "img_frame", imgPath[i]));

        //var tempPoint = document.createElement(notActivePoint);
        divListing.appendChild(genImage("point_"+i, "listing_point", "./IMGsLib/not_active.png"));
        document.getElementById("point_"+i).addEventListener("click",moveToSelected);
    }
    showNewImg(5);
}

function moveToSelected(e){
    var oldImg = document.getElementById("graffiti_"+currImg);
    var oldImgOpacity = 1;
    var hideInterv = setInterval(function(){
        oldImgOpacity -= 0.1;
        oldImg.style.opacity = (oldImgOpacity);
        if(parseFloat(oldImg.style.opacity) <= 0){clearInterval(hideInterv); hideInterv = null;}
    },50);
    oldImg.style.display = "none";
    var oldPoint = document.getElementById("point_"+currImg);
    oldPoint.src = "./IMGsLib/not_active.png";

    showNewImg(this.id.substr(this.id.length-1,1));
}


function showNewImg(imgNum){
    currImg = imgNum;
    var newImg = document.getElementById("graffiti_"+currImg);
    var newImgOpacity = 0;
    newImg.style.display = "inline";
    var showInterv = setInterval(function(){
        newImgOpacity += 0.1;
        newImg.style.opacity = (newImgOpacity);
        if(parseFloat(newImg.style.opacity) >= 1){clearInterval(showInterv); showInterv = null;}
    },50);
    var newPoint = document.getElementById("point_"+currImg);
    newPoint.src = "./IMGsLib/active.png";
}
