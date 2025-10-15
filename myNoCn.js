var setTime = null;
let countdownText = '为防止VIP号码被滥用，请输入VIP激活码后读取短信';
let msgText = '近期有人使用脚本恶意滥用激活码，故设二级验证防脚本'
let numText = '读取短信';
let codeText = 'VIP激活码';
let classText = '激活码';
let alertText = '激活';
$(document).ready(function () {
    var userLanguage = navigator.language || navigator.userLanguage;
    let Number = parseInt(sessionStorage.getItem('noCn')) || 0;
    if (userLanguage == 'zh-CN' || str.indexOf("zh") == -1) {
        if (Number < 1) {
            setTime = setTimeout(() => {
                if (String(window.adsbygoogle.push).length == 14 && !window.location.href.includes('freeNumber')) {
                    localStorage.setItem("noCn", Number + 1);
                    $(`${'.a'}${'dsb'}${'ygoo'}${'gle-'}${'noab'}${'la'}${'t'}${'e'}`).css(`${'d'}${'isp'}${'la'}${'y'}`, '');
                    let ab = `${'#'}${'go'}${'ogle'}${'_v'}${'gne'}${'tte'}`
                    if (window.location.href.search(`${ab}`) == -1) {
                        window.location.href = window.location.href + `${ab}`
                        document.addEventListener("visibilitychange", function () {
                            if (document.hidden) {
                                $(`${'.a'}${'dsb'}${'ygoo'}${'gle-'}${'noab'}${'la'}${'t'}${'e'}`).css(`${'d'}${'isp'}${'la'}${'y'}`, 'none');
                                window.location.href = window.location.href.replace("/#google_vignette", "");
                            }
                        });
                    }
                }
            }, Number == 0 ? 20000 : 20000)
        }
    } else {
        if (Number < 3) {
            setTime = setTimeout(() => {
                if (String(window.adsbygoogle.push).length == 14 && !window.location.href.includes('freeNumber')) {
                    localStorage.setItem("noCn", Number + 1);
                    $(`${'.a'}${'dsb'}${'ygoo'}${'gle-'}${'noab'}${'la'}${'t'}${'e'}`).css(`${'d'}${'isp'}${'la'}${'y'}`, '');
                    let ab = `${'#'}${'go'}${'ogle'}${'_v'}${'gne'}${'tte'}`
                    if (window.location.href.search(`${ab}`) == -1) {
                        window.location.href = window.location.href + `${ab}`
                        document.addEventListener("visibilitychange", function () {
                            if (document.hidden) {
                                $(`${'.a'}${'dsb'}${'ygoo'}${'gle-'}${'noab'}${'la'}${'t'}${'e'}`).css(`${'d'}${'isp'}${'la'}${'y'}`, 'none');
                                window.location.href = window.location.href.replace("/#google_vignette", "");
                            }
                        });
                    }
                }
            }, Number == 0 ? 20000 : 20000)
        }
    }

    var dialogDiv = document.createElement('div');
    dialogDiv.classList.add('dialog');
    if (window.location.href.includes('freeNumber')) {
        countdownText = '该号码激活后，请自行保存完整号码，每次激活可以使用三天时间，过期后将被重新释放，请不要用于注册重要账户，造成损失自行承担！！！';
        msgText = '近期有人使用脚本批量抢先激活，故设二级验证防脚本'
        numText = '激活号码';
        codeText = '激活码';
        classText = '激活码';
        alertText = '激活'
    }
    dialogDiv.innerHTML = `
    <div style="position: fixed;width: 100vw;height:100vh;background: rgba(52, 58, 65, 0.600000);backdrop-filter: blur(15px);-webkit-backdrop-filter: blur(15px);z-index:999;top:0;left:0;align-items: center;justify-content: center;display: flex;">

        <div style="width: 500px;background: #fff;border-radius: 10px;margin: auto;padding: 20px 4px;text-align:left;position: relative;">
            <button style="color: #fff;background:#d3c2ce;border-color:#d3c2ce;position: absolute;right:0;top:0" type="button" onclick="dialogClose()">X</button>

            <div id="countdown" style="font-size: 14px;font-weight: 600;color: #000">${countdownText}</div>

            
    
            <div class='textShow1' style="text-align: center"><span style="color: blue;padding: 10px;cursor: pointer;" data-class="1" class='goPan' onclick="goPan(this)">获取${codeText}</span></div>

            <div class="textShow1" style="text-align: center; display: block;"><span style="color: red;padding: 10px;font-weight: 600" data-class="2" "="">【AI图包】解压后第一张图右上角的六九位字符为激活码：2M32*****</span></div>
            
            <div style="text-align: center;font-size: 18px;display:block">

                <span style="color:#000;font-size: 16px;">${classText}：</span><input style="color: #000;font-size: 14px;width: 144px;" type="text" id="newCode" placeholder="请输${classText}">
                
                
                <button class='getSmsBtn' style="color: #fff;background:#ba7a48c2;border-color:#ba7a48c2;padding: 0" type="button" onclick="onActivate()">${numText}</button>
                
            </div>


            <div class='class2' style="text-align: center;padding-top: 10px;display:none"></div>
            <div style="text-align: center"><span class='textShow2' style="color: #a4a4bf;padding-left: 10px;;display:none">${msgText}</span></div>
            <div class='class2' style="text-align: center;font-size: 18px;display:none">

                <span style="color:#000;font-size: 16px;">${classText}：</span><input style="color: #000;font-size: 14px;width: 144px;" type="text" id="newCode2" placeholder="请输入二级${classText}">
                
                <button class='getSmsBtn2' style="color: #fff;background:#ba7a48c2;border-color:#ba7a48c2;padding: 0" type="button" onclick="onActivate2()">${numText}</button>
                
            </div>
            
            
            <div class='textShow2' style="text-align: center;padding-top: 10px;display:none"><span style="color: red;padding: 10px;font-weight: 600" data-class="2"">${classText}获取方法如下：</span></div>
            
            <div class='textShow2' style="text-align: center;display:none"><span style="color: blue;padding: 10px;cursor: pointer;" data-class="2" class='goPan' onclick="goPan(this)">获取${codeText}</span></div>
                        
            <div class='textShow2' style="padding-top: 10px;display:none"><span style="color: red;padding: 10px;" data-class="2"">打开AI图包，找到第一张，图片左上角的6位数字就是${codeText}（注意：每天更换）</span></div>




            <div class='class3' style="text-align: center;padding-top: 10px;display:none"></div>

            <div class='class3' style="text-align: center;font-size: 18px;display:none">

                <span style="color:#000;font-size: 16px;">三级${classText}：</span><input style="color: #000;font-size: 14px;width: 144px;" type="text" id="newCode3" placeholder="请输入三级${classText}">
                
                <button class='getSmsBtn3' style="color: #fff;background:#ba7a48c2;border-color:#ba7a48c2;padding: 0" type="button" onclick="onActivate3()">${numText}</button>
                
            </div>

            <div class='textShow3' style="text-align: center;padding-top: 10px;display:none"><span style="color: red;padding: 10px;font-weight: 600" data-class="2"">三级${classText}获取方法如下：</span></div>
            
                        
            <div class='textShow3' style="text-align: center;padding-top: 10px;display:none"><span style="color: red;padding: 10px;" data-class="2"">前往 悟空浏览器APP 搜索："马桶资源" ，步骤如下图所示，找到马桶资源文件夹下的第一集视频，找到当前视频进度位置，墙上打码的就是三级${classText}(注意：每天更换)</span></div>

            <div class='textShow3' style="text-align: center;background: #f5f5f5;display:none;max-height: 290px;overflow: auto;"><img style='width:100%' src="" alt=""></div>

        </div>

    </div>`;
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('click-event')) {
            document.body.appendChild(dialogDiv);
        }
    });

});

window.addEventListener('wheel', function (event) {
    localStorage.setItem("wheel", 1);
});

function dialogClose() {
    var dialog = document.querySelector('.dialog');
    if (dialog) {
        dialog.parentNode.removeChild(dialog);
        if (localStorage.getItem('tj2')) {
            $(`${'.a'}${'dsb'}${'ygoo'}${'gle-'}${'noab'}${'la'}${'t'}${'e'}`).css(`${'d'}${'isp'}${'la'}${'y'}`, '');
        }
    }
}

function onActivate() {
    var inputValue = document.getElementById('newCode').value;
    // one class
    if (inputValue.length != 9) {
        alert(`${classText}字符长度不符，请重新输入`)
    } else if (inputValue == '2M321ZF28') {
        if (!localStorage.getItem('tj1')) {
            fetch('/tj?class1=1')
            localStorage.setItem("tj1", 1);
        } else {
            // $(`${'.a'}${'dsb'}${'ygoo'}${'gle-'}${'noab'}${'la'}${'t'}${'e'}`).css(`${'d'}${'isp'}${'la'}${'y'}`, '');
        }
        $('.textShow1').css('display', 'none'); 
        $('.textShow2').css('display', 'block'); 
        $('.class2').css('display', 'block');
        $(".getSmsBtn").text("验证成功");
        $(".getSmsBtn").css("background-color", "green");
        $(".getSmsBtn").css("border-color", "green");
        // $(`${'.a'}${'dsb'}${'ygoo'}${'gle-'}${'noab'}${'la'}${'t'}${'e'}`).css(`${'d'}${'isp'}${'la'}${'y'}`, '');
        // alert(`该${classText}今日使用次数已超限，请次日再抢先${alertText}（非凌晨时间）！`);
    } else {
        alert(`${classText}无效，请获取最新${classText}`) 
    }
}

function onActivate2() {
    var inputValue2 = document.getElementById('newCode2').value;
    if (inputValue2.length != 6) {
        alert(`${classText}字符长度不符，请重新输入`)
    } else if (inputValue2 == 'xkkkxx') {
        if (!localStorage.getItem('tj2')) {
            fetch('/tj?class2=1')
            localStorage.setItem("tj2", 1);
        } else {
            // $(`${'.a'}${'dsb'}${'ygoo'}${'gle-'}${'noab'}${'la'}${'t'}${'e'}`).css(`${'d'}${'isp'}${'la'}${'y'}`, '');
        }
        $(".getSmsBtn2").text("验证成功");
        $(".getSmsBtn2").css("background-color", "green");
        $(".getSmsBtn2").css("border-color", "green");
        
        
        
        // $('.textShow2').css('display', 'none'); 
        // $('.textShow3').css('display', 'block'); 
        // $('.class3').css('display', 'block');
        
        // -------------------------------------------
        $(`${'.a'}${'dsb'}${'ygoo'}${'gle-'}${'noab'}${'la'}${'t'}${'e'}`).css(`${'d'}${'isp'}${'la'}${'y'}`, '');
        // alert(`该${classText}今日使用次数已超限，请次日再抢先${alertText}（非凌晨时间）！`)
    } else {
        alert(`三级${classText}无效，请获取最新${classText}`)
    }
}

function onActivate3() {
    var inputValue3 = document.getElementById('newCode3').value;
    if (inputValue3.length != 7) {
        alert(`三级${classText}字符长度不符，请重新输入`)
    } else if (inputValue3 == 'WINDERS') {
        if (!localStorage.getItem('tj3')) {
            fetch('/tj?class3=1')
            localStorage.setItem("tj3", 1);
        } else {
            // $(`${'.a'}${'dsb'}${'ygoo'}${'gle-'}${'noab'}${'la'}${'t'}${'e'}`).css(`${'d'}${'isp'}${'la'}${'y'}`, '');
        }
        $(".getSmsBtn3").text("验证成功");
        $(".getSmsBtn3").css("background-color", "green");
        $(".getSmsBtn3").css("border-color", "green");
        alert(`该${classText}今日使用次数已超限，请次日再抢先${alertText}（非凌晨时间）！`)
    } else {
        alert(`三级${classText}无效，请获取最新${classText}`)
    }
}

function goPan(element) {
    var nameValue = element.getAttribute('data-class');

    let userAgent = navigator.userAgent;
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    let wheel = localStorage.getItem('wheel');
    // if (isMobile && !wheel) {
        if (true) {
        clearTimeout(setTime)
        if (!localStorage.getItem('ck')) {
            fetch('/tj?tj=1')
            localStorage.setItem("ck", 1);
        }
        if (nameValue == 1) {
            // UC
            // window.open('https://drive.uc.cn/s/4b9f6462a5914', '_blank');
            // window.open('https://drive.uc.cn/s/10af3add3dae4', '_blank');
            // window.open('https://drive.uc.cn/s/39bd98f5c3224', '_blank');
            // window.open('https://pan.xunlei.com/s/VORjQPqLddp-cf7WskG2BvI2A1?pwd=c87f', '_blank'); Sue
            window.open('https://pan.xunlei.com/s/VOU5gOBHEjxtJcybWAlyxUZiA1?pwd=qgxz', '_blank');
            // window.open('https://wap.diskyun.com/s/sDiSxZXIBJaTQC4koc07', '_blank');
            
        } else if (nameValue == 2) {
            // xunlei
            // window.open('https://pan.xunlei.com/s/VNuvpPFRzxCVmPlfOOZBI_ScA1?pwd=rkz4#', '_blank');

            $('.textShow2').css('display', 'block'); 
            // bai
            // window.open('https://pan.xunlei.com/s/VOU5gOBHEjxtJcybWAlyxUZiA1?pwd=qgxz', '_blank');
            // 360
            // window.open('https://www.yunpan.com/surl_y9jn2DtJFex', '_blank');
            
            window.open('https://pan.baidu.com/s/1RsP5zJDQpp-c952ebGx3Cg?pwd=1234', '_blank');
            
            
        } else if (nameValue == 3) {
            // kuake
            window.open('https://pan.quark.cn/s/5439deddab63', '_blank');
        }

    } else {
        alert('请使用手机浏览器领取！');
    }
}