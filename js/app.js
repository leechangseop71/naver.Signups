
$(document).ready(function(){
    loginMaintain()
    ipCheck()
    messageBox()
    selectLang()
})

function loginMaintain(){
    $(".login_check>span").click(function(){
        alert('클릭!')
        var result=$(".login_check>span").hasClass("login_on")
        if(result===true){//login_on
            alert('login_on')
            $(".login_check>span").removeClass("login_on")
            $(".login_check>span").addClass("login_off")
        }else if(result===false){//login_off
            alert('login_off')
            $(".login_check>span").removeClass("login_off")
            $(".login_check>span").addClass("login_on")
        }
    })
    
}

function ipCheck(){

}

function messageBox(){
    $(".safe_notice>img").click(function(){
        $(".safe_notice,.tri").hide()
    })
}
function selectLang(){
    $("select").change(function(){
        //alert($(this).val())
        var lang = $(this).val()

        if(lang==='한국어'){

        }else if(lang==='English'){
            //어느 어느 부분 영어로~~
        }else if(lang==='中文(简体)'){

        }else if(lang==='中文(台灣)'){

        }
    })
}

