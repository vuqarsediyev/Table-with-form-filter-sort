// Этап 1. В HTML файле создайте верстку элементов, которые будут статичны(неизменны).

// Этап 2. Создайте массив объектов студентов.Добавьте в него объекты студентов, например 5 студентов.

const studentsList = [ 
    // Добавьте сюда объекты студентов
{
    name: 'Vuqar',
    surname: 'sediyev',
    middleName: 'mikayil',
    birthDate: new Date(2002,10,10),
    startStudyDate: 2022,
    faculty: 'Statistics'
},
{
    name: 'Ferid',
    surname: 'sediyev',
    middleName: 'mikayil',
    birthDate: new Date(2000,10,10),
    startStudyDate: 2002,
    faculty: 'Finance'
},
{
    name: 'Mikayil',
    surname: 'sediyev',
    middleName: 'mikayil',
    birthDate: new Date(2000,10,10),
    startStudyDate: 2020,
    faculty: 'Audit'
},
{
    name: 'Nizami',
    surname: 'sediyev',
    middleName: 'mikayil',
    birthDate: new Date(2000,12,10),
    startStudyDate: 2020,
    faculty: 'management'
},
{
    name: 'Jason',
    surname: 'Derulo',
    middleName: 'mikayil',
    birthDate: new Date(2000,10,10),
    startStudyDate: 2020,
    faculty: 'management'
}
]


// Этап 3. Создайте функцию вывода одного студента в таблицу, по аналогии с тем, как вы делали вывод одного дела в модуле 8. Функция должна вернуть html элемент с информацией и пользователе.У функции должен быть один аргумент - объект студента.

const app = document.getElementById('app');

const table = document.createElement('table');
 thead = document.createElement('thead'),
                 headertr = document.createElement('tr'),
              headerthFio = document.createElement('th'),
         headertBirthDate = document.createElement('th'),
   headerthStartStudyDate = document.createElement('th'),
          headerthFaculty = document.createElement('th'),
 tbody = document.createElement('tbody'),


headerthFio.textContent = 'FIO'
headertBirthDate.textContent = 'Vozrast'
headerthStartStudyDate.textContent = 'Start Study Date'
headerthFaculty.textContent = 'Faculty'

table.classList.add('table', 'table-striped', 'table-dark');
headerthFio.setAttribute('role', 'button')
headertBirthDate.setAttribute('role', 'button')
headerthStartStudyDate.setAttribute('role', 'button')
headerthFaculty.setAttribute('role', 'button')

app.append(table);
table.append(thead);
table.append(tbody);
thead.append(headertr);

headertr.append(headerthFio);
headertr.append(headertBirthDate);
headertr.append(headerthStartStudyDate);
headertr.append(headerthFaculty);




function getStudentItem(studentObj) {

    for (const user of studentObj) {

              const bodytr = document.createElement('tr'),
                  tdataFio = document.createElement('td'),
            tdataBirthDate = document.createElement('td'),
       tdataStartStudyDate = document.createElement('td'),
              tdataFaculty = document.createElement('td');

        function returnDate(user) {
            const year = new Date(user.birthDate).getFullYear();
            const month = new Date(user.birthDate).getMonth();
            const day = new Date(user.birthDate).getDate();
            const age = new Date().getFullYear() - year;

            return ` ${day}.${month}.${year} ( ${age} лет )  ` ;
        }

        function studyDate(user) {
            let currentYear = new Date().getFullYear();
            let startYear = user.startStudyDate;
            let finishYear = Number(startYear) + 4;

            if (currentYear > finishYear) {
                return `(${startYear} - ${finishYear}) Закончил`
            } else {
                return `(${startYear} - ${finishYear}) ${finishYear - currentYear} курс `
            }
        }

        user.fio = user.name + ' ' + user.surname + ' ' + user.middleName;

        tdataFio.textContent = user.fio;
        tdataBirthDate.textContent = returnDate(user);
        tdataStartStudyDate.textContent = studyDate(user);
        tdataFaculty.textContent = user.faculty;

        tbody.append(bodytr);
        bodytr.append(tdataFio);
        bodytr.append(tdataBirthDate);
        bodytr.append(tdataStartStudyDate);
        bodytr.append(tdataFaculty);

    }

}

// Этап 4. Создайте функцию отрисовки всех студентов. Аргументом функции будет массив студентов.Функция должна использовать ранее созданную функцию создания одной записи для студента.Цикл поможет вам создать список студентов.Каждый раз при изменении списка студента вы будете вызывать эту функцию для отрисовки таблицы.

getStudentItem(studentsList);

// Этап 5. К форме добавления студента добавьте слушатель события отправки формы, в котором будет проверка введенных данных.Если проверка пройдет успешно, добавляйте объект с данными студентов в массив студентов и запустите функцию отрисовки таблицы студентов, созданную на этапе 4.

let form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let today = new Date();

    let inpName = document.getElementById('name')
    let inpSurname = document.getElementById('surname')
    let inpMiddleName = document.getElementById('middle-name')
    let inpBirthDate = document.getElementById('birth-date')
    let inpStartYear = document.getElementById('start-year')
    let inpFaculty = document.getElementById('faculty')
    let validateError = document.createElement('p');
    validateError.classList.add('error', 'text-danger');


    document.querySelectorAll('.error').forEach(el => el.remove())

    form.append(validateError);

    if (inpName.value.trim() == '') {
        validateError.textContent = 'Заполните Имя'
        return;
    }
    
    if (inpSurname.value.trim() == '') {
        validateError.textContent = 'Заполните Фамилию'
        return;
    }
    
    if (inpMiddleName.value.trim() == '') {
        validateError.textContent = 'Заполните Отчество'
        return;
    }
    
    
    if (inpBirthDate.value == '') {
        validateError.textContent = 'Заполните год рождения'
        return;
    }
    

    if (inpStartYear.value.trim() == '') {
        validateError.textContent = 'Заполните год начала обучения'
        return;
    }
    

    if (inpFaculty.value.trim() == '') {
        validateError.textContent = 'Заполните Факультет!'
        return;
    } 



    inpStartYear.setAttribute('max', today.getFullYear());
    

    let newItem = {
        name: inpName.value.trim(),
        surname : inpSurname.value.trim(),
        middleName: inpMiddleName.value.trim(),
        birthDate: inpBirthDate.value,
        startStudyDate: inpStartYear.value.trim(),
        faculty: inpFaculty.value.trim()
    }

    tbody.textContent = ''
    
    studentsList.push(newItem);
    
    getStudentItem(studentsList);
    
    document.getElementById('name').value = ''
    document.getElementById('surname').value = ''
    document.getElementById('middle-name').value = ''
    document.getElementById('birth-date').value = ''
    document.getElementById('start-year').value = ''
    document.getElementById('faculty').value = ''
    

});

// Этап 5. Создайте функцию сортировки массива студентов и добавьте события кликов на соответствующие колонки.
headerthFio.addEventListener('click', function() {
    tbody.innerHTML = '';
  
    let sortedListData = studentsList.sort((a,b) => {
      if(a.fio < b.fio) return -1
    })
    return getStudentItem(sortedListData)
  });

headertBirthDate.addEventListener('click', function() {
    tbody.innerHTML = '';
  
    let sortedListData = studentsList.sort((a,b) => {
        let first = a.birthDate.getFullYear();
        let second = b.birthDate.getFullYear();
        if(first > second) return -1
    })
    return getStudentItem(sortedListData)
  });

headerthStartStudyDate.addEventListener('click', function() {
    tbody.innerHTML = '';

    let sortedListData = studentsList.sort((a,b) => {
        let first = a.startStudyDate
        let second = b.startStudyDate
        if(first < second) return -1
    })
    return getStudentItem(sortedListData)
  });

  headerthFaculty.addEventListener('click', function() {
    tbody.innerHTML = '';
  
    let sortedListData = studentsList.sort((a,b) => {
      if(a.faculty < b.faculty) return -1
    })
    return getStudentItem(sortedListData)
  });

// Этап 6. Создайте функцию фильтрации массива студентов и добавьте события для элементов формы.

let fioFilterInp = document.getElementById('fio-filter');
let facultyFilterInp = document.getElementById('faculty-filter');
let startStudyDateFilterInp = document.getElementById('startyear-filter');
let finishStudyDateFilterInp = document.getElementById('finishyear-filter');

fioFilterInp.addEventListener('input', function() {
    let filteredStudentlist = [...studentsList]
    if(fioFilterInp.value.trim() !== '') {
    filteredStudentlist = filteredStudentlist.filter((item) => {
        if(item.fio.includes(fioFilterInp.value.trim())) return true
    })
    tbody.innerHTML = '';
    console.log(filteredStudentlist);
    return getStudentItem(filteredStudentlist)
    }
});

 facultyFilterInp.addEventListener('input', function() {
    let filteredStudentlist = [...studentsList]
    if(facultyFilterInp.value.trim() !== '') {
    filteredStudentlist = filteredStudentlist.filter((item) => {
        if(item.faculty.includes(facultyFilterInp.value.trim())) return true
    })
    tbody.innerHTML = '';
    console.log(filteredStudentlist);
    return getStudentItem(filteredStudentlist)
    }
    
})

startStudyDateFilterInp.addEventListener('input', function() {
    let filteredStudentlist = [...studentsList]
    if(startStudyDateFilterInp.value.trim() !== '') {
    filteredStudentlist = filteredStudentlist.filter((item) => {
        let StartDate = Number(item.startStudyDate);
        console.log(StartDate);
        if(StartDate == startStudyDateFilterInp.value.trim()) return true
    })
    tbody.innerHTML = '';
    return getStudentItem(filteredStudentlist)
    }
})

finishStudyDateFilterInp.addEventListener('input', function() {
    let filteredStudentlist = [...studentsList]
    if(finishStudyDateFilterInp.value.trim() !== '') {
    filteredStudentlist = filteredStudentlist.filter((item) => {
        let finishDate = Number(item.startStudyDate) + 4;
        if(finishDate == finishStudyDateFilterInp.value.trim()) return true
    })
    tbody.innerHTML = '';
    return getStudentItem(filteredStudentlist)
    }
})
