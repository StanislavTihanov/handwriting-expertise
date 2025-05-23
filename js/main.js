"use strict"
//------------------------------------------------------------------------Готовые блоки кода

//------------------------------------------------------------------------preloader
//document.body.onload = () => {
//  setTimeout(() => {
//    let preloader = document.getElementById('preloader');
//    if (!preloader.classList.contains('done')) {
//      preloader.classList.add('done');
//    }
//  }, 1000);
//}
//------------------------------------------------------------------------preloader

//------------------------------------------------------------------------таймер обратного отсчета
//const startDays = 2; // Количество дней
//const startHours = 5; // Количество часов
//const startMinutes = 10; // Количество минут
//const startSeconds = 0; // Количество секунд
//
//// Переводим все в секунды
//let time = startDays * 24 * 60 * 60 + startHours * 60 * 60 + startMinutes * 60 + startSeconds;
//
//const countdownElement = document.getElementById('countdown');
//
//function updateCountdown() {
//    const days = Math.floor(time / (24 * 60 * 60)); // Количество дней
//    const hours = Math.floor((time % (24 * 60 * 60)) / 3600); // Количество часов
//    const minutes = Math.floor((time % 3600) / 60); // Количество минут
//    const seconds = time % 60; // Количество секунд
//
//    // Форматируем время
//    countdownElement.innerText = `${days}:${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//
//    if (time > 0) {
//        time--;
//    } else {
//        clearInterval(timer);
//        countdownElement.innerText = "Время вышло!";
//    }
//}
//
//const timer = setInterval(updateCountdown, 1000);
//------------------------------------------------------------------------таймер обратного отсчета

//------------------------------------------------------------------------выпадающие списки в хедере
const menuButtons = document.querySelectorAll('.menu__button');
const menuLists = document.querySelectorAll('.menu__list_wrapper');

// Функция для закрытия всех списков
const closeAllMenus = () => {
  menuLists.forEach(list => list.classList.remove('open'));
  menuButtons.forEach(button => button.classList.remove('open'));
};

// Обработчик клика на кнопки
menuButtons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation(); // Останавливаем всплытие, чтобы не сработал document.click
    const isOpen = menuLists[index].classList.contains('open');

    // Закрываем все меню перед открытием текущего
    closeAllMenus();

    // Открываем текущее меню, если оно было закрыто
    if (!isOpen) {
      menuLists[index].classList.add('open');
      button.classList.add('open');
    }
  });
});

// Обработчик клика на документ
document.addEventListener('click', (event) => {
  const isClickInsideMenu = event.target.closest('.menu__list') || event.target.closest('.menu__button');

  // Если клик был вне меню и кнопки, закрываем все меню
  if (!isClickInsideMenu) {
    closeAllMenus();
  }
});
//------------------------------------------------------------------------выпадающие списки в хедере


//------------------------------------------------------------------------Меню-Бургер
const burgerMenu = document.querySelector('.burger');
const menuBody= document.querySelector('.menu');

if(burgerMenu) {
    burgerMenu.addEventListener("click", function (e) {
      burgerMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    });
}
//------------------------------------------------------------------------закрытие меню при клике вне его
document.addEventListener ('click', (e) => {
  if (!burgerMenu.contains(e.target)) {
    menuBody.classList.remove('_active');
    burgerMenu.classList.remove('_active');
  }
})
//------------------------------------------------------------------------закрытие меню при клике вне его

//----------------------------------------------------------------------код для открытия меню в футере
const footerTitles = document.querySelectorAll('.footer__title');

footerTitles.forEach(title => {
    title.addEventListener('click', () => {
        // Находим соответствующий элемент .footer__list
        const footerList = title.nextElementSibling;

        // Проверяем, что следующий элемент существует и имеет класс .footer__list
        if (footerList && footerList.classList.contains('footer__list')) {
            // Переключаем класс 'view' у .footer__title и .footer__list
            title.classList.toggle('view');
            footerList.classList.toggle('view');
        }
    });
});
//----------------------------------------------------------------------код для открытия меню в футере


//------------------------------------------------------------------------Fancybox
document.addEventListener("DOMContentLoaded", function () {
  if (typeof Fancybox !== "undefined" && typeof Fancybox.bind === "function") {
      Fancybox.bind("[data-fancybox]", {
          // Кастомные опции
      });
  }
});
//------------------------------------------------------------------------Fancybox


//------------------------------------------------------------------------Слайдеры
// Находим все слайдеры на странице
const sliders = document.querySelectorAll('.slider');
sliders.forEach((slider, index) => {
  // Инициализируем Swiper для каждого слайдера
  new Swiper(slider, {
    direction: 'horizontal',
    loop: false,
    spaceBetween: 10,
    speed: 1000,
    autoHeight: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 3,
      },
      980: {
        slidesPerView: 4,
      }
    }
  });
});
const articleSliders = document.querySelectorAll('.article-slider');
articleSliders.forEach((articleSlider, index) => {
  // Инициализируем Swiper для каждого слайдера
  new Swiper(articleSlider, {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 10,
    speed: 1000,
    autoHeight: false,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
//------------------------------------------------------------------------Слайдеры


//------------------------------------------------------------------------select выпадающий список
document.querySelectorAll('.dropdown').forEach(function(dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
  const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
  const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list_item');
  const dropDownInput = dropDownWrapper.querySelector('.dropdown__input_hidden');

  // Функция для закрытия всех дропдаунов
  function closeAllDropdowns() {
    document.querySelectorAll('.dropdown__list--active').forEach(function(activeList) {
      activeList.classList.remove('dropdown__list--active');
    });
    document.querySelectorAll('.dropdown__button--active').forEach(function(activeButton) {
      activeButton.classList.remove('dropdown__button--active');
    });
  }

  // Функция для переключения текущего дропдауна
  function toggleCurrentDropdown() {
    const isActive = dropDownList.classList.contains('dropdown__list--active');
    closeAllDropdowns();
    
    if (!isActive) {
      dropDownList.classList.add('dropdown__list--active');
      dropDownBtn.classList.add('dropdown__button--active');
    }
  }

  // Открыть/закрыть текущий дропдаун
  dropDownBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    toggleCurrentDropdown();
  });
  // Выбор элемента списка
  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      e.preventDefault();
      dropDownBtn.innerText = this.innerText;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      closeAllDropdowns();
    });
  });
  // Закрытие при клике снаружи
  document.addEventListener('click', function (e) {
    if (!dropDownWrapper.contains(e.target)) {
      closeAllDropdowns();
    }
  });
  // Закрытие при нажатии Tab или Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeAllDropdowns();
    }
  });
});
// Инициализация кнопки после загрузки
document.addEventListener('DOMContentLoaded', function() {
  const myButton = document.getElementById('myButton');
  
  if (myButton) {
    myButton.addEventListener('click', function(event) {
      event.preventDefault();
    });
  }
});
//------------------------------------------------------------------------select выпадающий список

//------------------------------------------------------------------------появление контента при клике на кнопку more
const buttonMore = document.querySelectorAll('.button-more');
buttonMore.forEach(btn => {
    btn.addEventListener('click', () => {
        // Переключаем класс 'view' у самой кнопки
        btn.classList.toggle('view');
        // Находим все элементы с классом .content-more
        const contentMoreElements = document.querySelectorAll('.content-more');
        // Переключаем класс 'view' у всех элементов .content-more
        contentMoreElements.forEach(content => {
            content.classList.toggle('view');
        });
    });
});
//------------------------------------------------------------------------появление контента при клике на кнопку more
//------------------------------------------------------------------------popup
//const popupLinks = document.querySelectorAll('.popup-link');
//const body = document.querySelector('body');
//const lockPadding = document.querySelectorAll(".lock-padding");
//
//
//let unlock = true;
//
//const timeout = 800;
//
//if (popupLinks.length > 0) {
//  for (let index = 0; index < popupLinks.length; index++) {
//    const popupLink = popupLinks[index];
//    popupLink.addEventListener("click", function (e) {
//      const popupName = popupLink.getAttribute('href').replace('#', '');
//      const currentPopup = document.getElementById(popupName);
//      popupOpen(currentPopup);
//      e.preventDefault();
//    });
//  }
//}
//
//const popupCloseIcon = document.querySelectorAll('.close-popup');
//if (popupCloseIcon.length > 0) {
//  for (let index = 0; index < popupCloseIcon.length; index++) {
//    const el = popupCloseIcon[index];
//    el.addEventListener('click', function (e) {
//      popupClose(el.closest('.popup'));
//      e.preventDefault();
//    })
//  }
//}
//
//function popupOpen(currentPopup) {
//  if (currentPopup && unlock) {
//    const popupActive = document.querySelector('.popup.open');
//    if (popupActive) {
//      popupClose(popupActive, false);
//    } else {
//      bodyLock();
//    }
//    currentPopup.classList.add('open');
//    currentPopup.addEventListener("click", function (e) {
//      if (!e.target.closest('.popup__content')) {
//        popupClose(e.target.closest('.popup'));
//      }
//    });
//  }
//}
//
//function popupClose(popupActive, doUnlock = true) {
//  if (unlock) {
//    popupActive.classList.remove('open');
//    if (doUnlock) {
//      bodyUnlock();
//    }
//  }
//}
//
//function bodyLock() {
//  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
//  if (lockPadding.length > 0) {
//    for (let index = 0; index < lockPadding.length; index++) {
//      const el = lockPadding[index];
//      el.style.paddingRight = lockPaddingValue;
//    }
//  }
//  body.style.paddingRight = lockPaddingValue;
//  body.classList.add('lock');
//
//  unlock = false;
//  setTimeout(function () {
//    unlock = true;
//  }, timeout);
//}
//
//function bodyUnlock () {
//  setTimeout(function () {
//    if(lockPadding.length > 0) {
//      for (let index = 0; index < lockPadding.length; index++) {
//        const el = lockPadding[index];
//        el.style.paddingRight = '0px';
//      }
//  }
//    body.style.paddingRight = '0px';
//    body.classList.remove('lock');
//  }, timeout);
//  unlock = false;
//  setTimeout(function () {
//    unlock = true;
//  }, timeout);
//}
//
//document.addEventListener('keydown', function (e) {
//  if (e.which === 27) {
//    const popupActive = document.querySelector('.popup.open');
//    popupClose(popupActive);
//  }
//});
//------------------------------------------------------------------------popup


//------------------------------------------------------------------------Animation
//const animItems = document.querySelectorAll('._anim-items');
//if (animItems.length > 0) {
//  window.addEventListener('scroll', animOnScroll);
//  function animOnScroll() {
//    for (let index = 0; index < animItems.length; index++) {
//        const animItem = animItems[index];
//        const animItemHeight = animItem.offsetHeight;
//        const animItemOffset = offset(animItem).top;
//        const animStart = 5;
//
//        let animItemPoint = window.innerHeight - animItemHeight / animStart;
//
//        if (animItemHeight > window.innerHeight) {
//          animItemPoint = window.innerHeight - window.innerHeight / animStart;
//        }
//
//        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
//          animItem.classList.add('_action');
//        } else {
//          animItem.classList.remove('_action');
//        }
//    }
//  }
//  function offset(el) {
//    const rect = el.getBoundingClientRect(),
//    scrollLeft  = window.pageXOffset || document.documentElement.scrollLeft,
//    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//    return {top: rect.top + scrollTop, left: rect.left + screenLeft}
//  }
//  animOnScroll();
//}
//------------------------------------------------------------------------Animation

//------------------------------------------------------------------------Обработка формы
//document.addEventListener('DOMContentLoaded', function () {
//  const forms = document.querySelectorAll('form'); // Получаем все формы на странице
//
//  forms.forEach((form) => {
//      const phoneInputs = document.querySelectorAll('._number');
//    
//      phoneInputs.forEach((phoneInput) => {
//        const mask = IMask(phoneInput, { mask: '+7 (000) 000-00-00' });
//    
//        phoneInput.addEventListener('focus', () => {
//          if (!phoneInput.value) {
//            mask.value = '+7() ';
//          }
//        });
//    
//        phoneInput.addEventListener('blur', () => {
//          if (mask.unmaskedValue.length < 2) {
//            mask.value = '';
//          }
//        });
//      });
//
//    form.addEventListener('submit', formSend);
//
//    async function formSend(e) {
//      e.preventDefault();
//
//      let error = formValidate(form);
//      let formData = new FormData(form);
//
//      const formImage = form.querySelector('#formImage');
//      if (formImage && formImage.files[0]) {
//        formData.append('image', formImage.files[0]);
//      }
//
//      if (error === 0) {
//        form.classList.add('_sending');
//        let response = await fetch('send.php', {
//          method: 'POST',
//          body: formData
//        });
//
//      if (response.ok) {
//        let result = await response.json();
//        
//        // Закрытие формы (например, скрытие через класс)
//        form.style.display = 'none';
//        
//        // Добавляем сообщение об успешной отправке
//        const successMessage = document.createElement('div');
//        successMessage.classList.add('success-message'); // Добавляем класс для стилизации
//        successMessage.textContent = 'Форма успешно отправлена! Спасибо за ваш отклик.';
//        form.parentElement.appendChild(successMessage); // Добавляем сообщение в контейнер формы
//        
//        const formPreview = form.querySelector('#formPreview');
//        if (formPreview) {
//          formPreview.innerHTML = '';
//        }
//        form.reset();
//        form.classList.remove('_sending');
//      } else {
//        showErrorMessage('Ошибка при отправке формы');
//        form.classList.remove('_sending');
//      }
//      }
//    }
//
//    function formValidate(form) {
//      let error = 0;
//      let formReq = form.querySelectorAll('._req');
//
//      formReq.forEach((input) => {
//        formRemoveError(input);
//
//        if (input.classList.contains('_email')) {
//          if (!emailTest(input)) { // проверка на корректность email
//            formAddError(input);
//            error++;
//          }
//        } else if (input.classList.contains('_number')) {
//          if (!phoneTest(input)) { // проверка на корректность телефона
//            formAddError(input);
//            error++;
//          }
//        } else if (input.getAttribute('type') === "checkbox" && input.checked === false) {
//          formAddError(input);
//          error++;
//        } else {
//          if (input.value === '') {
//            formAddError(input);
//            error++;
//          }
//        }
//      });
//      return error;
//    }
//
//    function formAddError(input) {
//      input.parentElement.classList.add('_error');
//      input.classList.add('_error');
//    
//      // Ищем элемент с классом form__error внутри контейнера родителя
//      const errorSpan = input.parentElement.querySelector('.form__error');
//      if (errorSpan) {
//        errorSpan.classList.add('view'); // Добавляем класс view
//      }
//    }
//    
//    function formRemoveError(input) {
//      input.parentElement.classList.remove('_error');
//      input.classList.remove('_error');
//    
//      // Ищем элемент с классом form__error внутри контейнера родителя
//      const errorSpan = input.parentElement.querySelector('.form__error');
//      if (errorSpan) {
//        errorSpan.classList.remove('view'); // Удаляем класс view
//      }
//    }
//    
//    // проверка email
//    function emailTest(input) {
//      return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(input.value);
//    }
//
//    // проверка телефона
//    function phoneTest(input) {
//      return /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/.test(input.value);
//    }
//
//    // Работа с изображением
//    const formImage = form.querySelector('#formImage');
//    const formPreview = form.querySelector('#formPreview');
//
//    if (formImage) {
//      formImage.addEventListener('change', () => {
//        uploadFile(formImage.files[0]);
//      });
//
//      function uploadFile(file) {
//        if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
//          showErrorMessage('Только изображения');
//          formImage.value = '';
//          return;
//        }
//        if (file.size > 2 * 1024 * 1024) {
//          showErrorMessage('Файл должен быть менее 2 МБ');
//          return;
//        }
//        let reader = new FileReader();
//        reader.onload = function (e) {
//          if (formPreview) {
//            formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
//          }
//        };
//        reader.onerror = function (e) {
//          showErrorMessage('Ошибка загрузки изображения');
//        };
//        reader.readAsDataURL(file);
//      }
//    }
//  });
//});
////------------------------------------------------------------------------Обработка форм
//------------------------------------------------------------------------Quiz

//document.addEventListener('DOMContentLoaded', () => {
//  const quizBody = document.querySelector('.quiz__body');
//  const quizStart = document.querySelector('.quiz__start');
//  const formQuiz = document.querySelector('.quiz-form');
//  const formItems = formQuiz.querySelectorAll('fieldset');
//  const formBtnNext = formQuiz.querySelectorAll('.quiz-form__btn-next');
//  const formBtnPrev = formQuiz.querySelectorAll('.quiz-form__btn-prev');
//  const overlay = document.querySelector('.overlay');
//  const pastTestButton = document.querySelector('.pas__test-button');
//
//  const answersObj = {
//    step0: { question: '', answers: [] },
//    step1: { question: '', answers: [] },
//    step2: { question: '', answers: [] },
//    step3: { question: '', answers: [] },
//    step4: { name: "", phone: "", email: "", call: "" },
//  };
//
//  let questionNumb = 1;
//
//  // Инициализация квиза
//  quizBody.style.display = "none";
//  overlay.style.display = "none";
//
//  quizStart.addEventListener('click', () => {
//    quizBody.style.display = "block";
//    quizStart.style.display = "none";
//    questionCounter(1);
//  });
//
//  pastTestButton.addEventListener('click', () => {
//    resetQuiz();
//    overlay.style.display = "block";
//    quizBody.style.display = "block";
//  });
//
//  function questionCounter(index) {
//    const quizIndicator = document.querySelector('.quiz-indicator');
//    quizIndicator.innerHTML = `${index} / ${formItems.length}`;
//
//    const progress = document.querySelector(".quiz__progress-inner");
//    progress.style.width = `${Math.round((index / formItems.length) * 100)}%`;
//  }
//
//  function resetQuiz() {
//    formItems.forEach((formItem, index) => {
//      formItem.style.display = index === 0 ? "block" : "none";
//      const inputs = formItem.querySelectorAll("input");
//      inputs.forEach(input => {
//        input.checked = false;
//        input.parentNode.classList.remove("active-radio", "active-checkbox");
//      });
//    });
//    formBtnNext.forEach(btn => btn.disabled = true);
//    questionNumb = 1;
//    questionCounter(questionNumb);
//  }
//
//  formBtnPrev.forEach((btn, i) => {
//    btn.addEventListener('click', (event) => {
//      event.preventDefault();
//      formItems[i + 1].style.display = "none";
//      formItems[i].style.display = "block";
//      questionNumb--;
//      questionCounter(questionNumb);
//    });
//  });
//
//  formBtnNext.forEach((btn, btnIndex) => {
//    btn.addEventListener('click', (event) => {
//      event.preventDefault();
//      formItems[btnIndex].style.display = "none";
//      formItems[btnIndex + 1].style.display = "block";
//      questionNumb++;
//      questionCounter(questionNumb);
//    });
//    btn.disabled = true;
//  });
//
//  formItems.forEach((formItem, formItemIndex) => {
//    if (formItemIndex === 0) {
//      formItem.style.display = "block";
//    } else {
//      formItem.style.display = "none";
//    }
//
//    if (formItemIndex !== formItems.length - 1) {
//      const itemTitle = formItem.querySelector('.quiz-form__title');
//      answersObj[`step${formItemIndex}`].question = itemTitle.textContent;
//
//      formItem.addEventListener('change', (event) => {
//        const target = event.target;
//        const inputsChecked = formItem.querySelectorAll("input:checked");
//
//        answersObj[`step${formItemIndex}`].answers = Array.from(inputsChecked).map(input => input.value);
//        formBtnNext[formItemIndex].disabled = inputsChecked.length === 0;
//
//        if (target.classList.contains("quiz-form__radio")) {
//          formItem.querySelectorAll(".quiz-form__radio").forEach(input => {
//            input.parentNode.classList.toggle("active-radio", input === target);
//          });
//        } else if (target.classList.contains("quiz-form__checkbox")) {
//          target.parentNode.classList.toggle("active-checkbox");
//        }
//      });
//    }
//  });
//
//  const nameInput = document.getElementById('quiz-name');
//  const phoneInput = document.getElementById('quiz-phone');
//  const emailInput = document.getElementById('quiz-email');
//  const policyCheckbox = document.getElementById('quiz-policy');
//
//  if (!nameInput || !phoneInput || !emailInput || !policyCheckbox) {
//    console.error("Один из элементов формы не найден!");
//    return;
//  }
//
//  formQuiz.addEventListener('submit', (event) => {
//    event.preventDefault();
//
//    answersObj.step4.name = nameInput.value.trim();
//    answersObj.step4.phone = phoneInput.value.trim();
//    answersObj.step4.email = emailInput.value.trim();
//
//    if (!answersObj.step4.name || !answersObj.step4.phone || !answersObj.step4.email) {
//      alert("Пожалуйста, заполните все поля.");
//      return;
//    }
//
//    if (!policyCheckbox.checked) {
//      alert("Дайте согласие на обработку персональных данных.");
//      return;
//    }
//
//    postData(answersObj)
//      .then(res => res.json())
//      .then(res => {
//        if (res.status === "ok") {
//          overlay.style.display = "none";
//          quizBody.style.display = "none";
//          quizStart.style.display = "block";
//          formQuiz.reset();
//          alert(res.message);
//        } else if (res.status === "error") {
//          alert(res.message);
//        }
//      })
//      .catch(error => {
//        console.error("Ошибка при отправке формы:", error);
//        alert("Небходимо подключить серверную часть");
//      });
//  });
//
//  function postData(body) {
//    return fetch("./server.php", {
//      method: "POST",
//      headers: { "Content-Type": "application/json" },
//      body: JSON.stringify(body)
//    });
//  }
//});
//
////------------------------------------------------------------------------Quiz
