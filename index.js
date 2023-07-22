
let center=[56.7915896827041,60.60968344362777];

function init() {
  var map = new ymaps.Map("map", {
        center: center,
        zoom: 17,
    });

    let azs = new ymaps.Placemark([56.79247495984494,60.60821401495747],{},{
        iconLayout: 'default#image',
        iconImageHref: './img/азс.png',
        iconImageSize: [70, 70],
    });
    
    let pharmacy = new ymaps.Placemark([56.79190384148715,60.60689436812216],{},{
        iconLayout: 'default#image',
        iconImageHref: './img/больница белая.png',
        iconImageSize: [70, 70],
    });

    let coffe = new ymaps.Placemark([56.792772291203654,60.60698019881063],{},{
        iconLayout: 'default#image',
        iconImageHref: './img/кафе.png',
        iconImageSize: [70, 70],
    });

    let bank = new ymaps.Placemark([56.79247495984494,60.60821401495747],{},{
        iconLayout: 'default#image',
        iconImageHref: './img/азс.png',
        iconImageSize: [70, 70],
    });

    let swimming = new ymaps.Placemark([56.791294442682094,60.609313720653596],{},{
        iconLayout: 'default#image',
        iconImageHref: './img/бассейн.png',
        iconImageSize: [70, 70],
    });

    let jk = new ymaps.Placemark([56.79204514993503,60.60804235358052],{},{
        iconLayout: 'default#image',
        iconImageHref: './img/геолокация.png',
        iconImageSize: [70, 70],
    });
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects
        .add(azs)
        .add(pharmacy)
        .add(coffe)
        .add(bank)
        .add(swimming)
        .add(jk)
}

ymaps.ready(init);
var menu = ['Парковка', 'Архитектура', 'Охрана', 'Территория'] 
var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 4,
    freeMode: true,
    direction: "vertical",
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper
    },

    pagination: {
        el: '.swiper-pagination',
              clickable: true,
          renderBullet: function (index, className) {
            return '<span class="pagination '+className+'">'
            +
            '<div class="pagination__second-border">'+'<div class="pagination__second-border__text h2">'+(menu[index])+'</div>'+'</div>'
            +
            '</span>';
          },
      },
});
