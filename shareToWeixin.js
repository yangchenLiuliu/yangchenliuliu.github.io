function sendEvent(arr){
    for(i=0,len=4;i<len;i++){
        if(!arr[i]){
            arr[i]='';
        }
    }
    _hmt.push(['_trackEvent', arr[0], arr[1], arr[2], arr[3]]);
}

var moduleShare=(function(){

    var module={
        weixinApi:function(){
            if(typeof window.wxData=='undefined'){
                return;
            }

            window.wxFriend = window.wxData;

            WeixinApi.ready(function(Api) {
                var wxCallbacks = {
                    ready : function() {
                    },
                    cancel : function(resp) {
                    },
                    fail : function(resp) {
                    },
                    confirm : function(resp) {
                    },
                    all : function(resp) {
                        wxCallback();
                    }
                };
                Api.shareToFriend(wxFriend, wxCallbacks);
                Api.shareToTimeline(wxData, wxCallbacks);
                Api.shareToWeibo(wxData, wxCallbacks);
            });
        }
    };

    return {
        init:function(){
            module.weixinApi();
        }
    };

})();

$(function(){
    moduleShare.init();
})