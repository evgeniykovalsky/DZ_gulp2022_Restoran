export function isWebp(){
    function testWebP(callback){
        let webP=new Image();
        webP.onload=webP.onerror=function(){
            callback(webP.height==2)
        };
        webP.src="data:image/webP;base64,UklGR";

    }
    testWebP(function(support){
        let className=support===true?'webp':'no-webp';
        document.documentElement.classList.add(className);
    })
}