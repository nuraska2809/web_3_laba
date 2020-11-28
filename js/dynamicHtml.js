

function dyn(test){
BodyJS = [$("div#BodyImgText"),$('img#Img_body'),$('p#text_body')];
	BodyJS[0].text( nameOsnova[test]);
	BodyJS[1].attr("src",ImgOsnova[test]);
	BodyJS[2].text( TextOsnova [test]);
}
