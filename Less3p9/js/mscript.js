/*
Напишите скрипт, который:
1. ﻿Вызовет prompt с вопросом “Какой будет фон у страницы?” 
		и заменит на введенный цвет фон body
2. ﻿Вызовет prompt с вопросом “Какой будет цвет текста на странице?” 
		и заменит цвет текста у всего .page на введенный
3. ﻿Вызовет prompt с вопросом “Как зовут человека, который вас вдохновляет” 
		и вставит введенное имя в span с классом name
4. ﻿Вызовет prompt с вопросом “Введите адрес картинки” 
		и подставит введенную картинку в тег img, изменив текущий атрибут
5. ﻿Вызовет prompt с вопросом “Введите текст страницы” 
		и вставит введенный текст в блок .shortBio
6. ﻿Присвоит класс animated к элементу с классом shortBio, так чтобы 
		анимация границы заработала, а текущие стили параграфа сохранились
*/
function applyUser() {
	let bodyBGC, pageColor, personName, personURL, body, page, name, img, bioText;
	bodyBGC    = prompt('Какой будет фон у страницы?', 'rgb(180, 250, 180)');
	pageColor  = prompt('Какой будет цвет текста на странице?', 'rgb(120,20,40)');
	personName = prompt('Как зовут человека, который вас вдохновляет?', 'Morgan Freeman');
	personURL  = prompt('Введите адрес картинки?', 'https://www.insidevancouver.ca/\
		wp-content/uploads/2018/05/Morgan-Freeman-550x413.jpg');
	bioText    = prompt('Введите текст страницы.', 'Morgan Freeman was born on June 1,\
	 1937 in Memphis, Tennessee. He is the son of Mayme Edna (née Revere; 1912–2000), \
	 a teacher,[7] and Morgan Porterfield Freeman,[2] a barber, who died on April 27, 1961. \
	 He has three older siblings. According to a DNA analysis, some of his ancestors were \
	 from Niger.[8] In 2008, a DNA test suggested that among all of his African ancestors, \
	 a little over one-quarter came from the area that stretches from present-day Senegal \
	 to Liberia and three-quarters came from the Congo-Angola region.[9]');
	body = document.getElementsByTagName('body')[0];
	body.style.backgroundColor = bodyBGC;
	page = document.getElementsByClassName('page')[0];
	page.style.color = pageColor;
	name = document.getElementsByClassName('name')[0];
	name.innerText = personName;
	img = document.querySelector('img');
	img.setAttribute('src', personURL);
	img.style.borderRadius = '50%';
	bio = document.getElementsByClassName('shortBio')[0];
	bio.innerText = bioText;
	bio.className += ' animated'; // bio.setAttribute('class', 'shortBio animated')
}
