<script setup lang="ts"></script>

<template>
  <div class="container-back">
    <div class="container-historical-info">
      <div class="image-container">
        <img id="book-birth-image" class="image" src="" alt="Image" />
      </div>

      <div class="book-part-name">
        <button id="open-book-birth" class="btn-open-book">Открыть книгу</button>
        <p class="part-name">Книга - Рождение</p>
        <button id="showBtnBirthBook">Развернуть</button>
      </div>

      <br />

      <div id="content-birth-book">
        <div class="columns">
          <p class="name-back">Название</p>
          <p class="name-back">Армянский</p>
          <p class="name-back">Русский</p>
          <p class="name-back">Английский</p>
          <p class="edit-save-back">Редактировать/Сохранить</p>
        </div>

        <br />

        <div class="columns-grid">
          <div class="column-title">
            <p class="name"><strong>Архив</strong></p>

            <label for=""></label>
            <input type="text" placeholder="Название архива" />

            <label for=""></label>
            <input type="text" placeholder="Фонд" />

            <label for=""></label>
            <input type="text" placeholder="Опись" />

            <p class="name"><strong>Место нахождения архива</strong></p>

            <label for=""></label>
            <input type="text" placeholder="Страна" />

            <label for=""></label>
            <input type="text" placeholder="Область/Регион" />

            <label for=""></label>
            <input type="text" placeholder="Город/Деревня" />

            <label for=""></label>
            <input type="text" placeholder="Улица" />

            <label for=""></label>
            <input type="text" placeholder="Здание" />

            <label for=""></label>
            <input type="text" placeholder="Индекс" />

            <label for=""></label>
            <input type="text" placeholder="Примечания" />

            <p class="name"><strong>Книга</strong></p>

            <label for=""></label>
            <input type="text" placeholder="Номер книги/дело" />

            <label for=""></label>
            <input type="text" placeholder="Номер слайда" />

            <label for=""></label>
            <input type="text" placeholder="Номер страницы" />

            <label for=""></label>
            <input type="text" placeholder="Примечания" />

            <p class="name"><strong>Священник</strong></p>

            <label for=""></label>
            <input type="text" placeholder="Имя" />

            <label for=""></label>
            <input type="text" placeholder="Фамилия" />

            <label for=""></label>
            <input type="text" placeholder="Отчество" />

            <label for=""></label>
            <input type="text" placeholder="Примечания" />

            <p class="name">Дата рождения</p>

            <label for=""></label>
            <input type="text" placeholder="День Месяц Год" />

            <label for=""></label>
            <input type="text" placeholder="Примечания" />

            <p class="name">Место рождения</p>

            <label for=""></label>
            <input type="text" placeholder="Страна" />

            <label for=""></label>
            <input type="text" placeholder="Область/Регион" />

            <label for=""></label>
            <input type="text" placeholder="Город/Деревня" />

            <label for=""></label>
            <input type="text" placeholder="Улица" />

            <label for=""></label>
            <input type="text" placeholder="Здание" />

            <label for=""></label>
            <input type="text" placeholder="Индекс" />

            <label for=""></label>
            <input type="text" placeholder="Примечания" />

            <p class="name">Крещение</p>

            <label for=""></label>
            <input type="text" placeholder="День Месяц Год" />

            <label for=""></label>
            <input type="text" placeholder="Примечания" />

            <p class="name">Место крещения</p>

            <label for=""></label>
            <input type="text" placeholder="Страна" />

            <label for=""></label>
            <input type="text" placeholder="Область/Регион" />

            <label for=""></label>
            <input type="text" placeholder="Город/Деревня" />

            <label for=""></label>
            <input type="text" placeholder="Улица" />

            <label for=""></label>
            <input type="text" placeholder="Здание" />

            <label for=""></label>
            <input type="text" placeholder="Индекс" />

            <label for=""></label>
            <input type="text" placeholder="Примечания" />

            <p class="name"><strong>Комментарии</strong></p>

            <label for=""></label>
            <input type="text" placeholder="Комментарии" />
          </div>

          <div class="column-ar">
            <p class="name"><strong>Արխիվ</strong></p>

            <label for=""></label>
            <input
              class="check-book-birth-archive-name"
              lang="hy"
              disabled
              type="text"
              placeholder="Արխիվի անվանումը"
            />

            <label for=""></label>
            <input
              class="check-book-birth-fund-name"
              lang="hy"
              disabled
              type="text"
              placeholder="Ֆոնդ"
            />

            <label for=""></label>
            <input
              class="check-book-birth-register-name"
              lang="hy"
              disabled
              type="text"
              placeholder="Ցուցակ"
            />

            <p class="name"><strong>Արխիվի գտնվելու վայրը</strong></p>

            <label for=""></label>
            <input
              class="check-book-birth-archive-country"
              lang="hy"
              disabled
              type="text"
              placeholder="Երկիրը"
            />

            <label for=""></label>
            <input
              class="check-book-birth-archive-region"
              lang="hy"
              disabled
              type="text"
              placeholder="Մարզը"
            />

            <label for=""></label>
            <input
              class="check-book-birth-archive-city"
              lang="hy"
              disabled
              type="text"
              placeholder="Քաղաք/գյուղ"
            />

            <label for=""></label>
            <input
              class="check-book-birth-archive-street"
              lang="hy"
              disabled
              type="text"
              placeholder="Փողոց"
            />

            <label for=""></label>
            <input
              class="check-book-birth-archive-building"
              lang="hy"
              disabled
              type="text"
              placeholder="Շենք"
            />

            <label for=""></label>
            <input
              class="check-book-birth-archive-postal-code"
              lang="hy"
              disabled
              type="text"
              placeholder="Ինդեքս"
            />

            <label for=""></label>
            <input
              class="check-book-birth-archive-place-note"
              lang="hy"
              disabled
              type="text"
              placeholder="Ծանոթագրություն"
            />

            <p class="name"><strong>Գիրք</strong></p>

            <label for=""></label>
            <input
              class="check-book-birth-number"
              lang="hy"
              disabled
              type="text"
              placeholder="Գրքի համարը/Գործ"
            />

            <label for=""></label>
            <input
              class="check-book-birth-slide-number"
              lang="hy"
              disabled
              type="text"
              placeholder="Ալայդի համարը"
            />

            <label for=""></label>
            <input
              class="check-book-birth-page-number"
              lang="hy"
              disabled
              type="text"
              placeholder="Էջի համարը"
            />

            <label for=""></label>
            <input
              class="check-book-birth-note"
              lang="hy"
              disabled
              type="text"
              placeholder="Ծանոթագրություն"
            />

            <p class="name"><strong>քահանա</strong></p>

            <label for=""></label>
            <input
              class="check-book-birth-priest-first-name"
              lang="hy"
              disabled
              type="text"
              placeholder="Անուն"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-last-name"
              lang="hy"
              disabled
              type="text"
              placeholder="Ազգանուն"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-patronymic"
              lang="hy"
              disabled
              type="text"
              placeholder="Հայրանուն"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-note"
              lang="hy"
              disabled
              type="text"
              placeholder="Ծանոթագրություն"
            />

            <p class="name">Ծննդյան տարեթիվը</p>

            <label for=""></label>
            <input
              class="check-book-birth-priest-birth-date"
              lang="hy"
              disabled
              type="text"
              placeholder="Օրը Ամիսը Տարին"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-birth-date-note"
              lang="hy"
              disabled
              type="text"
              placeholder="Ծանոթագրություն"
            />

            <p class="name">Ծննդյան վայրը</p>

            <label for=""></label>
            <input
              class="check-book-birth-priest-birth-country"
              lang="hy"
              disabled
              type="text"
              placeholder="Երկիրը"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-birth-region"
              lang="hy"
              disabled
              type="text"
              placeholder="Մարզը"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-birth-city"
              lang="hy"
              disabled
              type="text"
              placeholder="Քաղաք/գյուղ"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-birth-street"
              lang="hy"
              disabled
              type="text"
              placeholder="Փողոց"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-birth-building"
              lang="hy"
              disabled
              type="text"
              placeholder="Շենք"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-birth-postal-code"
              lang="hy"
              disabled
              type="text"
              placeholder="Ինդեքս"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-birth-place-note"
              lang="hy"
              disabled
              type="text"
              placeholder="Ծանոթագրություն"
            />

            <p class="name">Մկրտություն</p>

            <label for=""></label>
            <input
              class="check-book-birth-priest-baptism-date"
              lang="hy"
              disabled
              type="text"
              placeholder="Օրը Ամիսը Տարին"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-baptism-date-note"
              lang="hy"
              disabled
              type="text"
              placeholder="Ծանոթագրություն"
            />

            <p class="name">Մկրտության վայրը</p>

            <label for=""></label>
            <input
              class="check-book-birth-priest-baptism-country"
              lang="hy"
              disabled
              type="text"
              placeholder="Երկիրը"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-baptism-region"
              lang="hy"
              disabled
              type="text"
              placeholder="Մարզը"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-baptism-city"
              lang="hy"
              disabled
              type="text"
              placeholder="Քաղաք/գյուղ"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-baptism-street"
              lang="hy"
              disabled
              type="text"
              placeholder="Փողոց"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-baptism-building"
              lang="hy"
              disabled
              type="text"
              placeholder="Շենք"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-baptism-postal-code"
              lang="hy"
              disabled
              type="text"
              placeholder="Ինդեքս"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-baptism-place-note"
              lang="hy"
              disabled
              type="text"
              placeholder="Ծանոթագրություն"
            />

            <p class="name"><strong>Մեկնաբանություններ</strong></p>

            <label for=""></label>
            <textarea
              class="check-book-birth-comments"
              lang="hy"
              disabled
              type="text"
              placeholder="Մեկնաբանություններ"
            ></textarea>
          </div>

          <div class="column-ru">
            <p class="name"><strong>Архив</strong></p>

            <label for=""></label>
            <input
              class="check-book-birth-archive-name"
              lang="ru"
              type="text"
              placeholder="Название архива"
              disabled
            />

            <label for=""></label>
            <input
              class="check-book-birth-fund-name"
              lang="ru"
              type="text"
              placeholder="Фонд"
              disabled
            />

            <label for=""></label>
            <input
              class="check-book-birth-register-name"
              lang="ru"
              type="text"
              placeholder="Опись"
              disabled
            />

            <p class="name"><strong>Место нахождения архива</strong></p>

            <label for=""></label>
            <input
              class="check-book-birth-archive-country"
              lang="ru"
              type="text"
              placeholder="Страна"
              disabled
            />

            <label for=""></label>
            <input
              class="check-book-birth-archive-region"
              lang="ru"
              type="text"
              placeholder="Область/Регион"
              disabled
            />

            <label for=""></label>
            <input
              class="check-book-birth-archive-city"
              lang="ru"
              type="text"
              placeholder="Город/Деревня"
              disabled
            />

            <label for=""></label>
            <input
              class="check-book-birth-archive-street"
              lang="ru"
              type="text"
              placeholder="Улица"
              disabled
            />

            <label for=""></label>
            <input
              class="check-book-birth-archive-building"
              lang="ru"
              type="text"
              placeholder="Здание"
              disabled
            />

            <label for=""></label>
            <input
              class="check-book-birth-archive-postal-code"
              lang="ru"
              type="text"
              placeholder="Индекс"
              disabled
            />

            <label for=""></label>
            <input
              class="check-book-birth-archive-place-note"
              lang="ru"
              type="text"
              placeholder="Примечания"
              disabled
            />

            <p class="name"><strong>Книга</strong></p>

            <label for=""></label>
            <input
              class="check-book-birth-number"
              lang="ru"
              type="text"
              placeholder="Номер книги/дело"
              disabled
            />

            <label for=""></label>
            <input
              class="check-book-birth-slide-number"
              lang="ru"
              type="text"
              placeholder="Номер слайда"
              disabled
            />

            <label for=""></label>
            <input
              class="check-book-birth-page-number"
              lang="ru"
              type="text"
              placeholder="Номер страницы"
              disabled
            />

            <label for=""></label>
            <input
              class="check-book-birth-note"
              lang="ru"
              type="text"
              placeholder="Примечания"
              disabled
            />

            <p class="name"><strong>Священник</strong></p>

            <label for=""></label>
            <input
              class="check-book-birth-priest-first-name"
              lang="ru"
              type="text"
              placeholder="Имя"
              disabled
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-last-name"
              lang="ru"
              type="text"
              placeholder="Фамилия"
              disabled
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-patronymic"
              lang="ru"
              type="text"
              placeholder="Отчество"
              disabled
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-note"
              lang="ru"
              type="text"
              placeholder="Примечания"
              disabled
            />

            <p class="name">Дата рождения</p>

            <label for=""></label>
            <input
              class="check-book-birth-priest-birth-date"
              lang="ru"
              type="text"
              placeholder="День Месяц Год"
              disabled
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-birth-date-note"
              lang="ru"
              type="text"
              placeholder="Примечания"
              disabled
            />

            <p class="name">Место рождения</p>

            <label for=""></label>
            <input
              class="check-book-birth-priest-birth-country"
              lang="ru"
              type="text"
              placeholder="Страна"
              disabled
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-birth-region"
              lang="ru"
              type="text"
              placeholder="Область/Регион"
              disabled
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-birth-city"
              lang="ru"
              type="text"
              placeholder="Город/Деревня"
              disabled
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-birth-street"
              lang="ru"
              type="text"
              placeholder="Улица"
              disabled
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-birth-building"
              lang="ru"
              type="text"
              placeholder="Здание"
              disabled
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-birth-postal-code"
              lang="ru"
              type="text"
              placeholder="Индекс"
              disabled
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-birth-place-note"
              lang="ru"
              type="text"
              placeholder="Примечания"
              disabled
            />

            <p class="name">Крещение</p>

            <label for=""></label>
            <input
              class="check-book-birth-priest-baptism-date"
              lang="ru"
              type="text"
              placeholder="День Месяц Год"
              disabled
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-baptism-date-note"
              lang="ru"
              type="text"
              placeholder="Примечания"
              disabled
            />

            <p class="name">Место крещения</p>

            <label for=""></label>
            <input
              class="check-book-birth-priest-baptism-country"
              lang="ru"
              type="text"
              placeholder="Страна"
              disabled
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-baptism-region"
              lang="ru"
              type="text"
              placeholder="Область/Регион"
              disabled
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-baptism-city"
              lang="ru"
              type="text"
              placeholder="Город/Деревня"
              disabled
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-baptism-street"
              lang="ru"
              type="text"
              placeholder="Улица"
              disabled
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-baptism-building"
              lang="ru"
              type="text"
              placeholder="Здание"
              disabled
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-baptism-postal-code"
              lang="ru"
              type="text"
              placeholder="Индекс"
              disabled
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-baptism-place-note"
              lang="ru"
              type="text"
              placeholder="Примечания"
              disabled
            />

            <p class="name"><strong>Комментарии</strong></p>

            <label for=""></label>
            <textarea
              class="check-book-birth-comments"
              lang="ru"
              type="text"
              placeholder="Комментарии"
              disabled
            ></textarea>
          </div>

          <div class="column-en">
            <p class="name"><strong>Archive</strong></p>

            <label for=""></label>
            <input
              class="check-book-birth-archive-name"
              lang="en"
              disabled
              type="text"
              placeholder="Archive name"
            />

            <label for=""></label>
            <input
              class="check-book-birth-fund-name"
              lang="en"
              disabled
              type="text"
              placeholder="Fund name"
            />

            <label for=""></label>
            <input
              class="check-book-birth-register-name"
              lang="en"
              disabled
              type="text"
              placeholder="Register name"
            />

            <p class="name"><strong>Archive location</strong></p>

            <label for=""></label>
            <input
              class="check-book-birth-archive-country"
              lang="en"
              disabled
              type="text"
              placeholder="Country"
            />

            <label for=""></label>
            <input
              class="check-book-birth-archive-region"
              lang="en"
              disabled
              type="text"
              placeholder="Region"
            />

            <label for=""></label>
            <input
              class="check-book-birth-archive-city"
              lang="en"
              disabled
              type="text"
              placeholder="City/Village"
            />

            <label for=""></label>
            <input
              class="check-book-birth-archive-street"
              lang="en"
              disabled
              type="text"
              placeholder="Street"
            />

            <label for=""></label>
            <input
              class="check-book-birth-archive-building"
              lang="en"
              disabled
              type="text"
              placeholder="Building"
            />

            <label for=""></label>
            <input
              class="check-book-birth-archive-postal-code"
              lang="en"
              disabled
              type="text"
              placeholder="Postal code"
            />

            <label for=""></label>
            <input
              class="check-book-birth-archive-place-note"
              lang="en"
              disabled
              type="text"
              placeholder="Note"
            />

            <p class="name"><strong>Book</strong></p>

            <label for=""></label>
            <input
              class="check-book-birth-number"
              lang="en"
              disabled
              type="text"
              placeholder="Book number"
            />

            <label for=""></label>
            <input
              class="check-book-birth-slide-number"
              lang="en"
              disabled
              type="text"
              placeholder="Slide number"
            />

            <label for=""></label>
            <input
              class="check-book-birth-page-number"
              lang="en"
              disabled
              type="text"
              placeholder="Page number"
            />

            <label for=""></label>
            <input
              class="check-book-birth-note"
              lang="en"
              disabled
              type="text"
              placeholder="Note"
            />

            <p class="name"><strong>Priest</strong></p>

            <label for=""></label>
            <input
              class="check-book-birth-priest-first-name"
              lang="en"
              disabled
              type="text"
              placeholder="First name"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-last-name"
              lang="en"
              disabled
              type="text"
              placeholder="Last name"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-patronymic"
              lang="en"
              disabled
              type="text"
              placeholder="Patronymic"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-note"
              lang="en"
              disabled
              type="text"
              placeholder="Note"
            />

            <p class="name">Birthday</p>

            <label for=""></label>
            <input
              class="check-book-birth-priest-birth-date"
              lang="en"
              disabled
              type="text"
              placeholder="DD MM YYYY"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-birth-date-note"
              lang="en"
              disabled
              type="text"
              placeholder="Note"
            />

            <p class="name">Place of birth</p>

            <label for=""></label>
            <input
              class="check-book-birth-priest-birth-country"
              lang="en"
              disabled
              type="text"
              placeholder="Country"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-birth-region"
              lang="en"
              disabled
              type="text"
              placeholder="Region"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-birth-city"
              lang="en"
              disabled
              type="text"
              placeholder="City/Village"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-birth-street"
              lang="en"
              disabled
              type="text"
              placeholder="Street"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-birth-building"
              lang="en"
              disabled
              type="text"
              placeholder="Building"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-birth-postal-code"
              lang="en"
              disabled
              type="text"
              placeholder="Postal code"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-birth-place-note"
              lang="en"
              disabled
              type="text"
              placeholder="Note"
            />

            <p class="name">Baptism</p>

            <label for=""></label>
            <input
              class="check-book-birth-priest-baptism-date"
              lang="en"
              disabled
              type="text"
              placeholder="DD MM YYYY"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-baptism-date-note"
              lang="en"
              disabled
              type="text"
              placeholder="Note"
            />

            <p class="name">Place of baptism</p>

            <label for=""></label>
            <input
              class="check-book-birth-priest-baptism-country"
              lang="en"
              disabled
              type="text"
              placeholder="Country"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-baptism-region"
              lang="en"
              disabled
              type="text"
              placeholder="Region"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-baptism-city"
              lang="en"
              disabled
              type="text"
              placeholder="City/Village"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-baptism-street"
              lang="en"
              disabled
              type="text"
              placeholder="Street"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-baptism-building"
              lang="en"
              disabled
              type="text"
              placeholder="Building"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-baptism-postal-code"
              lang="en"
              disabled
              type="text"
              placeholder="Postal code"
            />

            <label for=""></label>
            <input
              class="check-book-birth-priest-baptism-place-note"
              lang="en"
              disabled
              type="text"
              placeholder="Note"
            />

            <p class="name"><strong>Comments</strong></p>

            <label for=""></label>
            <textarea
              class="check-book-birth-comments"
              lang="en"
              disabled
              type="text"
              placeholder="Comments"
            ></textarea>
          </div>

          <div class="column-edit-save">
            <button onclick="handleBtnClick('check-book-birth-archive-name')" class="btn-edit-save">
              Редактировать
            </button>
            <button onclick="handleBtnClick('check-book-birth-fund-name')" class="btn-edit-save">
              Редактировать
            </button>
            <button
              onclick="handleBtnClick('check-book-birth-register-name')"
              class="btn-edit-save"
            >
              Редактировать
            </button>
            <hr class="break" />
            <button
              onclick="handleBtnClick('check-book-birth-archive-country')"
              class="btn-edit-save"
            >
              Редактировать
            </button>
            <button
              onclick="handleBtnClick('check-book-birth-archive-region')"
              class="btn-edit-save"
            >
              Редактировать
            </button>
            <button onclick="handleBtnClick('check-book-birth-archive-city')" class="btn-edit-save">
              Редактировать
            </button>
            <button
              onclick="handleBtnClick('check-book-birth-archive-street')"
              class="btn-edit-save"
            >
              Редактировать
            </button>
            <button
              onclick="handleBtnClick('check-book-birth-archive-building')"
              class="btn-edit-save"
            >
              Редактировать
            </button>
            <button
              onclick="handleBtnClick('check-book-birth-archive-postal-code')"
              class="btn-edit-save"
            >
              Редактировать
            </button>
            <button
              onclick="handleBtnClick('check-book-birth-archive-place-note')"
              class="btn-edit-save"
            >
              Редактировать
            </button>
            <hr class="break" />
            <button onclick="handleBtnClick('check-book-birth-number')" class="btn-edit-save">
              Редактировать
            </button>
            <button onclick="handleBtnClick('check-book-birth-slide-number')" class="btn-edit-save">
              Редактировать
            </button>
            <button onclick="handleBtnClick('check-book-birth-page-number')" class="btn-edit-save">
              Редактировать
            </button>
            <button onclick="handleBtnClick('check-book-birth-note')" class="btn-edit-save">
              Редактировать
            </button>
            <hr class="break" />
            <button
              onclick="handleBtnClick('check-book-birth-priest-first-name')"
              class="btn-edit-save"
            >
              Редактировать
            </button>
            <button
              onclick="handleBtnClick('check-book-birth-priest-last-name')"
              class="btn-edit-save"
            >
              Редактировать
            </button>
            <button
              onclick="handleBtnClick('check-book-birth-priest-patronymic')"
              class="btn-edit-save"
            >
              Редактировать
            </button>
            <button onclick="handleBtnClick('check-book-birth-priest-note')" class="btn-edit-save">
              Редактировать
            </button>
            <hr class="break" />
            <button
              onclick="handleBtnClick('check-book-birth-priest-birth-date')"
              class="btn-edit-save"
            >
              Редактировать
            </button>
            <button
              onclick="handleBtnClick('check-book-birth-priest-birth-date-note')"
              class="btn-edit-save"
            >
              Редактировать
            </button>
            <hr class="break" />
            <button
              onclick="handleBtnClick('check-book-birth-priest-birth-country')"
              class="btn-edit-save"
            >
              Редактировать
            </button>
            <button
              onclick="handleBtnClick('check-book-birth-priest-birth-region')"
              class="btn-edit-save"
            >
              Редактировать
            </button>
            <button
              onclick="handleBtnClick('check-book-birth-priest-birth-city')"
              class="btn-edit-save"
            >
              Редактировать
            </button>
            <button
              onclick="handleBtnClick('check-book-birth-priest-birth-street')"
              class="btn-edit-save"
            >
              Редактировать
            </button>
            <button
              onclick="handleBtnClick('check-book-birth-priest-birth-building')"
              class="btn-edit-save"
            >
              Редактировать
            </button>
            <button
              onclick="handleBtnClick('check-book-birth-priest-birth-postal-code')"
              class="btn-edit-save"
            >
              Редактировать
            </button>
            <button
              onclick="handleBtnClick('check-book-birth-priest-birth-place-note')"
              class="btn-edit-save"
            >
              Редактировать
            </button>
            <hr class="break" />
            <button
              onclick="handleBtnClick('check-book-birth-priest-baptism-date')"
              class="btn-edit-save"
            >
              Редактировать
            </button>
            <button
              onclick="handleBtnClick('check-book-birth-priest-baptism-date-note')"
              class="btn-edit-save"
            >
              Редактировать
            </button>
            <hr class="break" />
            <button
              onclick="handleBtnClick('check-book-birth-priest-baptism-country')"
              class="btn-edit-save"
            >
              Редактировать
            </button>
            <button
              onclick="handleBtnClick('check-book-birth-priest-baptism-region')"
              class="btn-edit-save"
            >
              Редактировать
            </button>
            <button
              onclick="handleBtnClick('check-book-birth-priest-baptism-city')"
              class="btn-edit-save"
            >
              Редактировать
            </button>
            <button
              onclick="handleBtnClick('check-book-birth-priest-baptism-street')"
              class="btn-edit-save"
            >
              Редактировать
            </button>
            <button
              onclick="handleBtnClick('check-book-birth-priest-baptism-building')"
              class="btn-edit-save"
            >
              Редактировать
            </button>
            <button
              onclick="handleBtnClick('check-book-birth-priest-baptism-postal-code')"
              class="btn-edit-save"
            >
              Редактировать
            </button>
            <button
              onclick="handleBtnClick('check-book-birth-priest-baptism-place-note')"
              class="btn-edit-save"
            >
              Редактировать
            </button>
            <hr class="break" />
            <button onclick="handleBtnClick('check-book-birth-comments')" class="btn-edit-save">
              Редактировать
            </button>
          </div>
        </div>
        <div class="btn-verified">
          <button
            onclick="btnClickVerified('btn-birth-book-verified')"
            id="btn-birth-book-verified"
          >
            Проверено
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
