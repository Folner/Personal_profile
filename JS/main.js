$(document).ready(function() {
	// 滚动到顶部
	$("#nav-name").click(function() {
        $("html, body").animate({
            scrollTop: $(".first-page").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
	// 滚动到个人简介
	$("#perPro").click(function() {
        $("html, body").animate({
            scrollTop: $(".main").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
	// 滚动到专业技能
    $("#proSkills").click(function() {
        $("html, body").animate({
            scrollTop: $(".skills-title").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
    // 滚动到项目经验
    $("#proEx").click(function() {
        $("html, body").animate({
            scrollTop: $(".pro-main").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
    // 滚动到联系方式
    $("#conInf").click(function() {
        $("html, body").animate({
            scrollTop: $(".footer").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
    // 向下滚动
    $("#downPage").click(function() {
        $("html, body").animate({
            scrollTop: $(".main").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
});