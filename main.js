let wrap = document.getElementById("wrapper");
let wrap1 = document.getElementById("wrapper1");
if (wrap) {
	let sticky = wrap.offsetTop;
	window.onscroll = function() {
		if (window.pageYOffset >= sticky) {
			wrap.style.justifyContent = "unset";
			wrap.style.overflowY = "hidden";
			wrap.classList.add("sticky");
			wrap.classList.add("backg");
			document.body.style.marginTop = "80px";
		} else {
			wrap.classList.remove("sticky");
			wrap.classList.remove("backg");
		}
	}
}

if (wrap1) {
	let sticky1 = wrap1.offsetTop;
	window.onscroll = function() {
		if (window.pageYOffset >= sticky1) {
			wrap1.style.justifyContent = "unset";
			wrap1.style.overflowY = "hidden";
			wrap1.classList.add("sticky");
			wrap1.classList.add("backg");
			document.body.style.marginTop = "80px";
		} else {
			wrap1.classList.remove("sticky");
			wrap1.classList.remove("backg");
		}
	}
}

let btnLoginto = document.getElementById("buttonSub");
let email = document.getElementById("email");
let password = document.getElementById("password");
let errorMessage1 = document.getElementById("error-message1");
let errorMessage2 = document.getElementById("error-message2");
let passwordValue;

let students9A = [];

students9A[0] = {
	id: 1,
	name: "Полина",
	surname: "Петрова",
	email: "polyaPetr@gmail.com",
	password: "olya0110"
}

students9A[1] = {
	id: 2,
	name: "Роман",
	surname: "Кошкин",
	email: "superrom@gmail.com",
	password: "perr2112"
}

students9A[2] = {
	id: 3,
	name: "Петр",
	surname: "Лебедев",
	email: "illigame18@ukr.net",
	password: "liga3223"
}

students9A[3] = {
	id: 4,
	name: "Станислав",
	surname: "Барьяхтар",
	email: "Stasik2006@gmail.com",
	password: "tasi4334"
}

students9A[4] = {
	id: 5,
	name: "Екатерина",
	surname: "Рожкова",
	email: "rozhkovaKatya@ukr.net",
	password: "zhko5445"
}

students9A[5] = {
	id: 6,
	name: "Людмила",
	surname: "Саванец",
	email: "AngelikaRRR@gmail.com",
	password: "geli6556"
}

students9A[6] = {
	id: 7,
	name: "Полина",
	surname: "Нельская",
	email: "knigomanka@ukr.net",
	password: "goma7667"
}

students9A[7] = {
	id: 8,
	name: "Сергей",
	surname: "Люботин",
	email: "seruyLub@gmail.com",
	password: "eruy8778"
}

students9A[8] = {
	id: 9,
	name: "Владимир",
	surname: "Серьезный",
	email: "VladimirSE@gmail.com",
	password: "dimi9889"
}

students9A[9] = {
	id: 10,
	name: "Анастасия",
	surname: "Ковальчук",
	email: "AKoval@ukr.net",
	password: "oval1091"
}

students9A[10] = {
	id: 11,
	name: "Диана",
	surname: "Зарук",
	email: "dianochka@gmail.com",
	password: "noch1011"
}

let teachers = [];

teachers[0] = {
	id: 1,
	name: "Оксана",
	surname: "Триполко",
	email: "oksanatrypolko@ukr.net",
	password: "anat1001",
	lesson: "algebra and geometry"
}

teachers[1] = {
	id: 2,
	name: "Елена",
	surname: "Жученко",
	email: "zhukchenckoelena@ukr.net",
	password: "zhuk2112",
	lesson: "russian and world literature"
}

teachers[2] = {
	id: 3,
	name: "Лидия",
	surname: "Павловская",
	email: "pavlovsky@gmail.com",
	password: "pavl3223",
	lesson: "ukrainian and ukrainian literature"
}

teachers[3] = {
	id: 4,
	name: "Ирина",
	surname: "Сидоренко",
	email: "irsidr@gmail.com",
	password: "irsi4334",
	lesson: "english"
}

teachers[4] = {
	id: 5,
	name: "Лилия",
	surname: "Долгих",
	email: "lilyadolg@gmail.com",
	password: "ilya5445",
	lesson: "history of Ukraine and World history and jurisprudence"
}

teachers[5] = {
	id: 6,
	name: "Виктория",
	surname: "Архипова",
	email: "arhipushka@ukr.net",
	password: "hipu6556",
	lesson: "geography and economic"
}

teachers[6] = {
	id: 7,
	name: "Виктория",
	surname: "Панкратьева",
	email: "pankratievaVita@gmail.com",
	password: "krat7667",
	lesson: "biology"
}

teachers[7] = {
	id: 8,
	name: "Оксана",
	surname: "Триполко",
	email: "oksanatrypolko@ukr.net",
	password: "anat8778",
	lesson: "chemistry"
}

teachers[8] = {
	id: 9,
	name: "Елена",
	surname: "Журавлева",
	email: "zhuravlen@ukr.net",
	password: "zhur9889",
	lesson: "IT"
}

teachers[9] = {
	id: 10,
	name: "Людмила",
	surname: "Назаренко",
	email: "nazarenkoludmila@gmail.com",
	password: "zare1099",
	lesson: "technical"
}

teachers[10] = {
	id: 11,
	name: "Людмила",
	surname: "Лепкова",
	email: "1968illepkova@gmail.com",
	password: "ille1011",
	lesson: "physic"
}

function checkEmail() {
	if (email.value == null || email.value == undefined || email.value.length == 0) {
		errorMessage1.innerHTML = "<br>Введите email";
	}
	else if (email.value.includes("gmail.com") == false && email.value.includes("ukr.net") == false) {
		errorMessage1.innerHTML = "<br>Некоректный email";
	}
	else {
		errorMessage1.innerHTML = "";
	}
}

function checkPassword() {
	if (password.value == null || password.value.length === 0) {
		errorMessage2.innerHTML = "<br>Введите пароль";
	}
	else if (password.value.length < 8) {
		errorMessage2.innerHTML = "<br>Пароль слишком короткий";
	}
	else if (password.value.length > 8) {
		errorMessage2.innerHTML = "<br>Пароль слишком длинный";
	}
	else {
		errorMessage2.innerHTML = "";
	}
}

function openHomePage() {
	for (let p = 0; p < students9A.length; p++) {
		let p9A = students9A[p].password;
		if (errorMessage1.innerHTML == "" && errorMessage2.innerHTML == "" && password.value == students9A[p].password && email.value == students9A[p].email) {
			passwordValue = password.value;
			console.log(passwordValue);
			btnLoginto.href = "../students/home.html";
		}
	}
}

if (password && email) {
	btnLoginto.addEventListener = ("click", checkEmail, checkPassword, openHomePage);
}

let namePage = document.getElementById("namePage");
let chooseBtn = document.getElementsByClassName("choose__choose-subject");
let chooseSubDiv = document.getElementById("chooseSub");
let subName = document.getElementsByClassName("subname");
let subCard = document.getElementsByClassName("c-choose-subject");
let lesson = document.getElementById("lesson");
//let char = document.getElementById("char");

// if (subCard) {
// 	chooseBtn.onmouseout = function() {
// 		char.style.display = "block";
// 	}	
// 	chooseBtn.onmouseover = function() {
// 		char.style.display = "none";
// 	}
// }

if (chooseBtn) {
	function show1() {
		document.title = "Алгебра | Easy learn";
		namePage.innerHTML = "Алгебра";
		chooseSubDiv.classList.add("passive");
		lesson.style.display = "block";
	}

	function show2() {
		document.title = "Геометрия | Easy learn";
		namePage.innerHTML = "Геометрия";
		chooseSubDiv.classList.add("passive");
		lesson.style.display = "block";
	}

	function show3() {
		document.title = "Русский язык | Easy learn";
		namePage.innerHTML = "Русский язык";
		chooseSubDiv.classList.add("passive");
		lesson.style.display = "block";
	}

	function show4() {
		document.title = "Украинский язык | Easy learn";
		namePage.innerHTML = "Украинский язык";
		chooseSubDiv.classList.add("passive");
		lesson.style.display = "block";
	}

	function show5() {
		document.title = "Английский язык | Easy learn";
		namePage.innerHTML = "Английский язык";
		chooseSubDiv.classList.add("passive");
		lesson.style.display = "block";
	}

	function show6() {
		document.title = "История Украины | Easy learn";
		namePage.innerHTML = "История Украины";
		chooseSubDiv.classList.add("passive");
		lesson.style.display = "block";
	}

	function show7() {
		document.title = "Всемирная история | Easy learn";
		namePage.innerHTML = "Всемирная история";
		chooseSubDiv.classList.add("passive");
		lesson.style.display = "block";
	}

	function show8() {
		document.title = "Правоведенье | Easy learn";
		namePage.innerHTML = "Правоведенье";
		chooseSubDiv.classList.add("passive");
		lesson.style.display = "block";
	}

	function show9() {
		document.title = "География | Easy learn";
		namePage.innerHTML = "География";
		chooseSubDiv.classList.add("passive");
		lesson.style.display = "block";
	}

	function show10() {
		document.title = "Экономика | Easy learn";
		namePage.innerHTML = "Экономика";
		chooseSubDiv.classList.add("passive");
		lesson.style.display = "block";
	}

	function show11() {
		document.title = "Украинская литература | Easy learn";
		namePage.innerHTML = "Украинская литература";
		chooseSubDiv.classList.add("passive");
		lesson.style.display = "block";
	}

	function show12() {
		document.title = "Зарубежная литература | Easy learn";
		namePage.innerHTML = "Зарубежная литература";
		chooseSubDiv.classList.add("passive");
		lesson.style.display = "block";
	}

	function show13() {
		document.title = "Биология | Easy learn";
		namePage.innerHTML = "Биология";
		chooseSubDiv.classList.add("passive");
		lesson.style.display = "block";
	}

	function show14() {
		document.title = "Химия | Easy learn";
		namePage.innerHTML = "Химия";
		chooseSubDiv.classList.add("passive");
		lesson.style.display = "block";
	}

	function show15() {
		document.title = "Физика | Easy learn";
		namePage.innerHTML = "Физика";
		chooseSubDiv.classList.add("passive");
		lesson.style.display = "block";
	}

	function show16() {
		document.title = "Информатика | Easy learn";
		namePage.innerHTML = "Информатика";
		chooseSubDiv.classList.add("passive");
		lesson.style.display = "block";
	}

	function show17() {
		document.title = "Трудовое обучение | Easy learn";
		namePage.innerHTML = "Трудовое обучение";
		chooseSubDiv.classList.add("passive");
		lesson.style.display = "block";
	}
}

let bLess1 = document.getElementById("less1");
let bLess2 = document.getElementById("less2");
let bLess3 = document.getElementById("less3");
let bLess4 = document.getElementById("less4");
let bLess5 = document.getElementById("less5");
let allRec = document.getElementsByClassName("rec-choose__lesson");

if (lesson) {
	function showLess1() {
		for(let i = 0; i < allRec.length; i++) {
			allRec[i].classList.remove("rec-active__lesson");
			allRec[i].classList.add("rec-passive__lesson");
			allRec[0].classList.add("rec-active__lesson");
			allRec[0].classList.remove("rec-passive__lesson");
			bLess1.style.display = "block";
			bLess2.style.display = "none";
			bLess3.style.display = "none";
			bLess4.style.display = "none";
			bLess5.style.display = "none";
		}
	}

	function showLess2() {
		for(let i = 0; i < allRec.length; i++) {
			allRec[i].classList.remove("rec-active__lesson");
			allRec[i].classList.add("rec-passive__lesson");
			allRec[1].classList.add("rec-active__lesson");
			allRec[1].classList.remove("rec-passive__lesson");
			bLess2.style.display = "block";
			bLess1.style.display = "none";
			bLess3.style.display = "none";
			bLess4.style.display = "none";
			bLess5.style.display = "none";
		}
	}

	function showLess3() {
		for(let i = 0; i < allRec.length; i++) {
			allRec[i].classList.remove("rec-active__lesson");
			allRec[i].classList.add("rec-passive__lesson");
			allRec[2].classList.add("rec-active__lesson");
			allRec[2].classList.remove("rec-passive__lesson");
			bLess3.style.display = "block";
			bLess1.style.display = "none";
			bLess2.style.display = "none";
			bLess4.style.display = "none";
			bLess5.style.display = "none";
		}
	}

	function showLess4() {
		for(let i = 0; i < allRec.length; i++) {
			allRec[i].classList.remove("rec-active__lesson");
			allRec[i].classList.add("rec-passive__lesson");
			allRec[3].classList.add("rec-active__lesson");
			allRec[3].classList.remove("rec-passive__lesson");
			bLess4.style.display = "block";
			bLess1.style.display = "none";
			bLess2.style.display = "none";
			bLess3.style.display = "none";
			bLess5.style.display = "none";
		}
	}

	function showLess5() {
		for(let i = 0; i < allRec.length; i++) {
			allRec[i].classList.remove("rec-active__lesson");
			allRec[i].classList.add("rec-passive__lesson");
			allRec[4].classList.add("rec-active__lesson");
			allRec[4].classList.remove("rec-passive__lesson");
			bLess5.style.display = "block";
			bLess1.style.display = "none";
			bLess2.style.display = "none";
			bLess3.style.display = "none";
			bLess4.style.display = "none";
		}
	}
}

let studSurname = document.getElementById("surname-info");
let studName = document.getElementById("name-info");
let studClass = document.getElementById("class-info");
let studMail = document.getElementById("mail-info");
let personPhoto = document.getElementById("personDiv");
let personClip = document.getElementById("personClip");
let personImg = document.getElementById("personImg");

if(personPhoto) {
	personPhoto.onmouseover = function() {
	personClip.style.display = "block";
	};

	personPhoto.onmouseout = function() {
	personClip.style.display = "none";
	}
};

// function studentsIdent() {
// 	for (let i = 0; i < students9A.length; i++) {
// 		// let search = password.innerHTML;
// 		if (students9A[i].password === passwordValue) {
// 			let index = i;
// 			studSurname.innerHTML = students9A[index].surname;
// 			studName.innerHTML = students9A[index].name;
// 			studClass.innerHTML = "9-A";
// 			studMail.innerHTML = students9A[index].email;
// 			console.log(surname);
// 		} else {
// 			console.log(password.value);
// 			console.log(passwordValue);
// 		}
// 	}
// }
// studentsIdent();

if(personPhoto) {
	$(document).ready(function () {
 
		function readImage (input) {
		  if (input.files && input.files[0]) {
			 var reader = new FileReader();
	  
			 reader.onload = function (e) {
				$('#personImg').attr('src', e.target.result);
				personImg.style.borderRadius = "50%";
				personImg.style.objectFit = "cover";
				personImg.style.height = "375px";
				personImg.style.width = "375px";
				$('#profile').attr('src', e.target.result);
				profile.style.borderRadius = "50%";
				profile.style.objectFit = "cover";
				profile.style.height = "40px";
				profile.style.width = "40px";
			 }
	  
			 reader.readAsDataURL(input.files[0]);
		  }
		}
	  
		function printMessage(destination, msg) {
	  
		  $(destination).removeClass();
	  
		  if (msg == 'success') {
			 $(destination).addClass('alert alert-success').text('Файл успешно загружен.');
		  }
	  
		  if (msg == 'error') {
			 $(destination).addClass('alert alert-danger').text('Произошла ошибка при загрузке файла.');
		  }
	  
		}
	  
		$('#personProf').change(function(){
		  readImage(this);
		});
	  
		$('#upload-image').on('submit',(function(e) {
		  e.preventDefault();
	  
		  var formData = new FormData(this);
	  
		  $.ajax({
			 type:'POST', // Тип запроса
			 url: 'handler.php', // Скрипт обработчика
			 data: formData, // Данные которые мы передаем
			 cache:false, // В запросах POST отключено по умолчанию, но перестрахуемся
			 contentType: false, // Тип кодирования данных мы задали в форме, это отключим
			 processData: false, // Отключаем, так как передаем файл
			 success:function(data){
				printMessage('#result', data);
			 },
			 error:function(data){
				console.log(data);
			 }
		  });
		}));
	 });
}
