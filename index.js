const zodiacSigns = [
  { id: 1, name: "Овен1", img: "https://example.com/oven.jpg" },
  { id: 2, name: "Телець1", img: "Images/02-big.jpg" },
  { id: 3, name: "Близнюки1", img: "images/02-big.jpg" },
  { id: 4, name: "Ра1к", img: "images/02-big.jpg" },
  { id: 5, name: "Лев", img: "images/02-big.jpg" },
  { id: 6, name: "Діва", img: "https://example.com/diva.jpg" },
  { id: 7, name: "Терези", img: "https://example.com/terezi.jpg" },
  { id: 8, name: "Скорпіон", img: "https://example.com/scorpion.jpg" },
  { id: 9, name: "Стрілець", img: "https://example.com/strelec.jpg" },
  { id: 10, name: "Козеріг", img: "https://example.com/kozerog.jpg" },
  { id: 11, name: "Водолій", img: "https://example.com/vodoliy.jpg" },
  { id: 12, name: "Риби", img: "https://example.com/ribi.jpg" }
];

const table = document.getElementById('zodiacTable');

// Функція для додавання рядків у таблицю
function populateTable() {
  zodiacSigns.forEach(sign => {
    const row = table.insertRow();
    row.id = `row-${sign.id}`;

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

    // Колонка з кнопкою видалення/відновлення
    const cell4 = row.insertCell(3);
    const button = document.createElement('button');
    button.textContent = 'Видалити';
    button.onclick = () => toggleRowStatus(sign.id, button); // Викликаємо функцію
    cell4.appendChild(button);

    // Перевіряємо, чи рядок неактивний
    if (isRowInactive(sign.id)) {
      row.classList.add('inactive'); // Додаємо клас для неактивного статусу
      button.textContent = 'Відновити'; // Змінюємо текст кнопки
    }
  });
}

// Функція для перевірки, чи рядок неактивний
function isRowInactive(id) {
  const inactiveRows = JSON.parse(localStorage.getItem('inactiveRows')) || [];
  return inactiveRows.includes(id);
}

// Функція для перемикання статусу рядка
function toggleRowStatus(id, button) {
  const password = prompt('Введіть пароль для видалення/відновлення :');
  const row = document.getElementById(`row-${id}`);
  
  if (password === '1771') {
    if (row.classList.contains('inactive')) {
      // Відновлюємо рядок
      row.classList.remove('inactive'); // Видаляємо клас неактивності
      button.textContent = 'Видалити'; // Повертаємо текст кнопки
    } else {
      // Видаляємо рядок
      row.classList.add('inactive'); // Додаємо клас для неактивного статусу
      button.textContent = 'Відновити'; // Змінюємо текст кнопки

      // Зберігаємо неактивний рядок у Local Storage
      const inactiveRows = JSON.parse(localStorage.getItem('inactiveRows')) || [];
      inactiveRows.push(id);
      localStorage.setItem('inactiveRows', JSON.stringify(inactiveRows));
    }
  } else {
    alert('Невірний пароль!');
  }
}

// Функція для видалення id з Local Storage
function removeInactiveRow(id) {
  const inactiveRows = JSON.parse(localStorage.getItem('inactiveRows')) || [];
  const updatedRows = inactiveRows.filter(rowId => rowId !== id);
  localStorage.setItem('inactiveRows', JSON.stringify(updatedRows));
}

// Виклик функції для заповнення таблиці
populateTable();
