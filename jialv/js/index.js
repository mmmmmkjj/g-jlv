var arr=["首  页","互动活动","车型展示","3D赏车","预约试驾"]
var mySwiper1 = new Swiper('.swiper-container1', {
	direction : 'vertical',
	pagination: '.swiper-pagination',
    paginationClickable: true,
    paginationBulletRender: function (index, className) {
            return '<li class="' + className + '"><div class="dh_dian"></div><div class="dh_text">' + arr[index] + '</div></li>';
    }
});
var mySwiper2 = new Swiper('.swiper-container2', {
	direction : 'vertical'
});
var mySwiper3 = new Swiper('.swiper-container3', {
	direction : 'vertical'
});
var mySwiper4 = new Swiper('.swiper-container4', {
	direction : 'vertical'
});
var mySwiper5 = new Swiper('.swiper-container5', {
	direction : 'vertical'
});
var mySwiper6 = new Swiper('.swiper-container6', {
	direction : 'vertical'
});
var mySwiper7 = new Swiper('.swiper-container7', {
	direction : 'vertical'
});
var mySwiper8 = new Swiper('.swiper-container8', {
	direction : 'vertical'
});

$(".page3_click").on("click", function() {
	$(".page3_swiper_out").css({"z-index":"10"});
	$(".page3_swiper_out").css({"opacity":"1"});
	$(".swiper_key").css({"z-index":"1"});
	$(".swiper_key").css({"opacity":"0"});
	$(".swiper_key").eq($(this).index()).css({"z-index":"5"});
	$(".swiper_key").eq($(this).index()).css({"opacity":"1"});
	console.log($(this).index())
});

$(".back").click(function(){
	$(".page3_swiper_out").css({"z-index":"1"});
	$(".page3_swiper_out").css({"opacity":"0"});
	$(".swiper_key").css({"z-index":"1"});
});
//全景
$(document).ready(function(){    
    $("#myCar").vc3dEye({
        imagePath:"img/w360/sportVan_beijing_003_000",    //产品图片的文件夹
        totalImages:72,         //图片数目
        imageExtension:"jpg"    //图片扩展名
    });
});

var ld_arr=["img/mb/1.jpg","img/mb/2.jpg","img/mb/3.jpg","img/mb/4.jpg","img/mb/5.jpg","img/mb/6.jpg","img/mb/7.jpg","img/mb/8.jpg","img/mb/9.jpg","img/mb/10.jpg"];
var ld_arr2=["眼神，炯炯有神。双氙气前大灯搭配LED日间行车灯，赋予全新高尔夫·嘉旅更激情锐利的双眸，近似自然光的光谱能有效减轻你的夜间行驶负担。MDFS动态大灯辅助系统，远光照明范围动态调节，配备AFS随动转向和弯道辅助照明，夜间路况一览无余。","锁车后，外后视镜电动折叠，能有效减少对外后视镜的剐蹭。倒车时，副驾驶侧后视镜自动翻转照地，灵活提供给你清晰的倒车视野。外后视镜更具备LED迎宾照地功能，开启车门的瞬间为你送上暖心的照明关怀，同时彰显独特个性。","不止更大，还很强大。全新高尔夫·嘉旅搭载涡轮增压发动机，低排量却能输出更大扭矩，给前行提供源源不断的动力，让你随时随地澎湃激情，充分享受驾驭的乐趣，体验动不能停的身心快感。","17英寸铝合金轮毂，搭配螺栓装饰罩，金属质感十足，动静夺目，无需靠近，也会被它吸引。","LED尾灯造型时尚，动感夺目，构成符合空气动力学的导流器边缘，完美匹配侧面线条，醒目提示后方行车。","","自动泊车辅助系统，可识别横向和纵向的停车位，并自动完成转向过程，帮你将车辆完全停入停车位。","智能，让出行无限可能。携带智能钥匙靠近全新高尔夫·嘉旅，一旦触发前门把手，它便会想你所想，为你解锁，热情欢迎你的归来。启动它更无需传统繁琐步骤，只要踩好刹车并按下按钮即可，人性化科技任你掌握。","感受行程的愉悦，有时候需要不疾不徐。当你开启定速巡航，车辆即可按照设定的速度自动匀速行驶，即使是长途旅程也会更加舒适惬意，同时也大大提高了燃油的经济性。",""];
var ld_arr3=["前大灯","电动折叠外后视镜配备LED迎宾照地灯","1.4TSI涡轮增压","车轮毂","LED尾灯","后备箱","自动泊车","自动驻车","定速巡航","盲区监测"];
var ld_arr4=["新潮外观","新潮外观","澎湃动力","新潮外观","新潮外观","灵动空间","极致安全","澎湃动力","澎湃动力","极致安全"]
$(".btn_360").click(function(){
	$(".page4_mb_out").css({"display":"block"});
	$(".page4_img").attr("src",ld_arr[$(this).attr("_src")]);
	$(".page4_text_title").html(ld_arr3[$(this).attr("_src")]);
	$(".page4_title").html(ld_arr4[$(this).attr("_src")]);
	$(".page4_text").html(ld_arr2[$(this).attr("_src")]);
});
$(".page4_close").click(function(){
	$(".page4_mb_out").css({"display":"none"});
});

$(".page4_fh1").click(function(){
	$(".page4_wrap_out").css({"display":"none"});
	$(".page4_wrap_in").css({"display":"block"});
});

$(".page4_fh2").click(function(){
	$(".page4_wrap_out").css({"display":"block"});
	$(".page4_wrap_in").css({"display":"none"});
});

var myVideo = document.getElementsByTagName('video')[0];
$(".sp_close").click(function(){
	$(".sp_out").css({"display":"none"});
	myVideo.pause();
});

$(".dh_out").click(function(){
	$(".dh_mb_out").toggle();
});
$(".dh_mb_close").click(function(){
	$(".dh_mb_out").css({"display":"none"});
});