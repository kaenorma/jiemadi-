$(document).ready(function () {
  (function () {
    var sidebar = $('.sidebar');
    var mask = $('.mask');
    var sidebar_trigger = $('.sidebar_trigger');
    var showSidebar = function () {
      mask.fadeIn();
      sidebar.animate({ 'right': 0 });
    }
    var hideSidebar = function () {
      mask.fadeOut();
      sidebar.css('right', -sidebar.width());
    }
    sidebar_trigger.bind('click', showSidebar);
    mask.bind('click', hideSidebar);
  })();
  (function () {
    var clipboard = new Clipboard('.copyIocn');
    clipboard.on('success', function (e) {
      let timestamp = Date.parse(new Date()) / 1000;
      $('.copyMessage').text(e.text);
      $('.copyMessage').show()
      setTimeout(() => {
        $('.copyMessage').hide()
      }, 1500)
      $.ajax({
        type: 'get',
        url: '/copy?phoneNumber=' + e.text + '&_t=' + timestamp,
        data: {},
        dataType: 'json',
        success: () => { }
      });

    });
    clipboard.on('error', function (e) {
      $('.copyMessage').text(e.text);
      $('.copyMessage').show()
      setTimeout(() => {
        $('.copyMessage').hide()
      }, 1500)
    });
    $('.copyIocn').click(function (evt) {
      evt.preventDefault();
    })

    let language = (navigator.browserLanguage || navigator.language).toLowerCase();
    if (language.indexOf('cn') > -1 || true) {
      var setT = setTimeout(() => {
        if (location.href.lastIndexOf('google_vignette') == -1) {
          if (!localStorage.getItem("shua")) {
            window.location.reload();
          }
        }
      }, 700000)

    }

    let lsName = `${'_'}${'s'}`
    let bt = `${'.'}${'r'}${'e'}${'loa'}${'d'}`
    $(`${bt}`).click(function (evt) {

      let timestamp = Date.parse(new Date()) / 1000;

      if (localStorage.getItem(`${lsName}`) == null) {
        localStorage.setItem(`${lsName}`, 1);
      }

      if ((timestamp - Number(localStorage.getItem("reload") || 0) > 2)) {
        localStorage.setItem("reload", timestamp);
        setTimeout(() => {
          $(`${'.a'}${'dsb'}${'ygoo'}${'gle-'}${'noab'}${'la'}${'t'}${'e'}`).css(`${'d'}${'isp'}${'la'}${'y'}`, '');
        }, 0)
        let ab = `${'#'}${'go'}${'ogle'}${'_v'}${'gne'}${'tte'}`
        if (window.location.href.search(`${ab}`) == -1) {
          window.location.href = window.location.href + `${ab}`
        }
        window.location.reloadd();
      }
    })




    if (localStorage.getItem(`${lsName}`) == 1) {
      // let a1 = `${'.'}${'a'}${'b'}${'c'}`;
      // $(`${a1}`).css({
      //     "z-index": 1,
      //     "position": 'fixed',
      //     "top": '0px',
      //     "opacity": '0'
      // });
      // localStorage.setItem(`${lsName}`,2);
      // setTimeout(()=>{
      //     $(`${a1}`).css({
      //         "position": 'static',
      //         "opacity": ''
      //     });
      // },8000)
    } else if (localStorage.getItem(`${lsName}`) == 2) {

    }


    setTimeout(() => {
      if ($('iframe').length == 0) {
        // $(".goDetails").attr("href","#disable");
        // $(".addClass").addClass("goDetailsBtn")
      }
    }, 1000)
    $('.goDetails').on('click', '.goDetailsBtn', function () {
      // $(".disableMsg").css("display",'block')
    })
    $('.cross-container').click(function (evt) {
      clearTimeout(setT);
      $(".dialogBox").css("display", "");
      var countdownElement = document.getElementById('countdown');

      var deadline = new Date();
      deadline.setSeconds(deadline.getSeconds() + 180); // 60s
      function updateCountdown() {
        var currentTime = new Date();
        var difference = Math.floor((deadline - currentTime) / 1000);
        var hours = Math.floor(difference / 3600);
        var minutes = Math.floor((difference % 3600) / 60);
        var seconds = difference % 60;
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        countdownElement.innerHTML = hours + ":" + minutes + ":" + seconds;
        if (difference == 90) {
          $(`${'.a'}${'dsb'}${'ygoo'}${'gle-'}${'noab'}${'la'}${'t'}${'e'}`).css(`${'d'}${'isp'}${'la'}${'y'}`, '');
        }
        if (difference <= 0) {
          clearInterval(intervalId);
          var userLanguage = navigator.language || navigator.userLanguage;
          if (userLanguage == 'zh-CN' || str.indexOf("zh") == -1) {
            countdownElement.innerHTML = "检测到您的浏览器可能屏蔽了网站广告，这将导致部分功能受限！";
          } else {
            countdownElement.innerHTML = "00:00:00";
          }
          setTimeout(() => {
            window.location.href = 'https://www.jiemadi.com/en';
          }, 4000)
        }
      }
      var intervalId = setInterval(updateCountdown, 1000);
      // updateCountdown();
    })
  })();

});

localStorage.removeItem(`${'_'}${'_'}${'l'}${'s'}${'v'}${'_'}${'_'}`);
// localStorage.removeItem(`${'go'}${'ogl'}${'e_ad'}${'sens'}${'e_set'}${'tin'}${'gs'}`);
// localStorage.removeItem(`${'go'}${'ogle_'}${'exp'}${'eri'}${'ment_'}${'mod4'}${'4'}`);
