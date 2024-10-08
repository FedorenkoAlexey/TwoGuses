const tmcItems = [
  { id: 1, name: "Ванна мийна ВМ - 1Н 600*700(300)*850", img: "Images/001.jpg", count: "1" },
  { id: 2, name: "Ванна мийна ВМ - 2Н 1200*600*(300)*850", img: "Images/002.jpg", count: "1" },
  { id: 3, name: "Вітрина для викладки риби BBPH-1.4/0.7 1400*700*850 №36", img: "Images/003.jpg", count: "1" },
  { id: 4, name: "Вітрина кондитерська MAWI WCHCN 1.4/0.9 Інв.№280", img: "Images/004.jpg", count: "1" },
  { id: 5, name: "Вітрина холодильна CD-1/2 1200*700/1000*1700 №37", img: "Images/005.jpg", count: "1" },
  { id: 6, name: "Диван одинарний флай", img: "Images/006.jpg", count: "16" },
  { id: 7, name: "Льодогенератор кубикового льоду GB 902 A-Q(Brema) Інв. №321", img: "Images/007.jpg", count: "1" },
  { id: 8, name: "Марміт 2-х страв МЕ (за розміром). Інв.№ 372", img: "Images/008.jpg", count: "1" },
  { id: 9, name: "Марміт 2-х страв МЕУ OPECT (за розміром). Інв.№ 375", img: "Images/009.jpg", count: "1" },
  { id: 10, name: "Підставка н/ж 400*650*500", img: "Images/010.jpg", count: "1" },
  { id: 11, name: "Підставка н/ж під посудомийку 600*600*600", img: "Images/011.jpg", count: "1" },
  { id: 12, name: "Підставка під піч для піци 910/745/750 № 51", img: "Images/012.jpg", count: "1" },
  { id: 13, name: "Піч для піци E4+4/A №52", img: "Images/013.jpg", count: "1" },
  { id: 14, name: "Піч конвекційна Інв.№368", img: "Images/014.jpg", count: "1" },
  { id: 15, name: "Плита електрична ПЕ-4-Н 700, ТМ OPECT №54", img: "Images/015.jpg", count: "1" },
  { id: 16, name: "Полиця для сушки ПНСП-1 1500*330, піддон", img: "Images/016.jpg", count: "1" },
  { id: 17, name: "Посудомийка (Elektrobar PV 260, Італія) Інв. №363", img: "Images/017.jpg", count: "1" },
  { id: 18, name: "Стелаж С-4 1200*600*1800", img: "Images/018.jpg", count: "1" },
  { id: 19, name: "Стіл В-5 1500*500*850", img: "Images/019.jpg", count: "1" },
  { id: 20, name: "Стіл В-5 з звич. мийкою 1300*700*(400)*850", img: "Images/020.jpg", count: "1" },
  { id: 21, name: "Стіл В-6 900*700*850", img: "Images/021.jpg", count: "1" },
  { id: 22, name: "Стіл В-6 1160*700*850/1400", img: "Images/022.jpg", count: "1" },
  { id: 23, name: "Стіл В-6 1500*700*850", img: "Images/023.jpg", count: "1" },
  { id: 24, name: "Стіл В-6 1800*500*850 (з мийкою)", img: "Images/024.jpg", count: "1" },
  { id: 25, name: "Стіл для збирання відходів В-5 1300*700*850", img: "Images/025.jpg", count: "1" },
  { id: 26, name: "Стіл холодильний", img: "Images/026.jpg", count: "3" },
  { id: 27, name: "Стіл 1200*750*750 (100) з вставкою  із плитки ", img: "Images/027.jpg", count: "19" },
  { id: 28, name: "Стіл 'Кантрі - ексклюзив'", img: "Images/028.jpg", count: "12" },
  { id: 29, name: "Лавки зі спинкою 'Кантрі - ексклюзив' ", img: "Images/029.jpg", count: "13" },
  { id: 30, name: "Стілець з фігурною спинкою", img: "Images/030.jpg", count: "24" },
  { id: 31, name: "Стілець мадрас дк. браун", img: "Images/031.jpg", count: "32" },
  { id: 32, name: "Телевізор SAMSUNG UE-32EH4000 Інв.№381", img: "Images/032.jpg", count: "1" },
  { id: 33, name: "Телевізор Saturn LED 32 O Black № 73", img: "Images/033.jpg", count: "1" },
  { id: 34, name: "Тестомес Alimacchine SM30FT2V Інв.№268", img: "Images/034.jpg", count: "1" },
  { id: 35, name: "Шафа холодильна ШХ R 700M", img: "Images/035.jpg", count: "4" }
];

const table = document.getElementById('zodiacTable');
//localStorage.clear();

// Функція для додавання рядків у таблицю
function populateTable() {
  tmcItems.forEach(sign => {
    const row = table.insertRow();
    row.id = `row-${sign.id}`;
		row.classList.add(row.id); //Клас строки, для inactive   row-6

    // Колонка з нумерацією
    const cell1 = row.insertCell(0);
    cell1.textContent = sign.id;

    // Колонка з назвою знаку
    const cell2 = row.insertCell(1);
    cell2.textContent = sign.name;

    // Колонка з фото
    const cell3 = row.insertCell(2);
    const img = document.createElement('img');
    img.src = sign.img;
    img.style.width = "50px"; // Задайте ширину фото
    img.style.height = "50px"; // Задайте висоту фото
    cell3.appendChild(img);
		
		// Колонка з кылькыстю
    const cell4 = row.insertCell(3);
    cell4.textContent = sign.count;

    // Колонка з кнопкою видалення/відновлення
    //const cell4 = row.insertCell(3);
    //const button = document.createElement('button');
    //button.textContent = 'Видалити';
    //button.onclick = () => toggleRowStatus(sign.id, button); // Викликаємо функцію
    //cell4.appendChild(button);

    // Перевіряємо, чи рядок неактивний
    if (isRowInactive(sign.id)) {
      row.classList.add('inactive'); // Додаємо клас для неактивного статусу
      button.textContent = 'Відновити'; // Змінюємо текст кнопки
    }
  });
  
  // Додаємо обробники для зображень
  addImageToggleListeners();
}

// Функція для перевірки, чи рядок неактивний
function isRowInactive(id) {
  const inactiveRows = JSON.parse(localStorage.getItem('inactiveRows')) || [];
  return inactiveRows.includes(id);
}

// Функція для перемикання статусу рядка
//function toggleRowStatus(id, button) {
//  const password = prompt('Введіть пароль для видалення/відновлення:');
//  const row = document.getElementById(`row-${id}`);
//  
//  if (password === '1771') {
//    if (row.classList.contains('inactive')) {
//      // Відновлюємо рядок
//      row.classList.remove('inactive'); // Видаляємо клас неактивності
//      button.textContent = 'Видалити'; // Повертаємо текст кнопки
//      
      // Видаляємо ID з Local Storage
//      removeInactiveRow(id);
//    } else {
     // Видаляємо рядок
//      row.classList.add('inactive'); // Додаємо клас для неактивного статусу
 //     button.textContent = 'Відновити'; // Змінюємо текст кнопки

      // Зберігаємо неактивний рядок у Local Storage
//      const inactiveRows = JSON.parse(localStorage.getItem('inactiveRows')) || [];
//      inactiveRows.push(id);
//      localStorage.setItem('inactiveRows', JSON.stringify(inactiveRows));
//    }
//  } else {
//    alert('Невірний пароль!');
//  }
//}

// Функція для видалення id з Local Storage
function removeInactiveRow(id) {
  const inactiveRows = JSON.parse(localStorage.getItem('inactiveRows')) || [];
  const updatedRows = inactiveRows.filter(rowId => rowId !== id);
  localStorage.setItem('inactiveRows', JSON.stringify(updatedRows));
}

// Функція для додавання обробників натискання на зображення
function addImageToggleListeners() {
  const images = document.querySelectorAll('img');  // Отримуємо всі зображення з таблиці

  images.forEach(image => {
    image.addEventListener('click', () => {
      const row = image.closest('tr');
      if (!row.classList.contains('inactive')) {
        // Перемикаємо клас "expanded" тільки для активних рядків
        image.classList.toggle('expanded');
      }
    });
  });
}

// Ініціалізація таблиці
populateTable();
