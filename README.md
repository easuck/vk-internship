# Тестовое задание на стажировку VK на позицию frontend-разработчик
### Использованные библиотеки:
- json server (для api)
- axios (для работы с сетью)
- tanstack query (для работы с сетью, а также для реализации infinite loader)
- react hook form (для работы с формой)
- scss (для стилизации, совсем немного)
Не нашел целесообразным использовать клиентский state manager: все приложение находится на одной странице, не нужно хранить глобальное состояние компонентов.
### Структура JSON:
```
{
  data: [
    {id: string, ...anyOtherFields},
    {id: string, ...anyOtherFields},
    {id: string, ...anyOtherFields},
    ...
 ]
}
```
Форма и таблица имеют гибкую структуру и подстраиваются под струкруту JSON. Главное указать id в формате строки, потому что JSON Server автоматически добавляет их к записям в таком виде. 
У меня не получилось сделать гибкие инпуты, я не совсем понял как это можно реализовать, чтобы учесть любой тип данных, поэтому они все по умолчанию с type=text. Валидация на required есть на каждом поле.
Изначально в db.json хранятся данные со следующей структурой:
```
{
      id: string
      name: string
      surname: string
      email: "string
      sex: string
      birthdate: Date (но по факту string)
    },
```
### Запуск приложения:
1. Скачать и распаковать архив
2. Установить зависимости с помощью команды ```npm install```
3. Заполнить db.json своими данными, если необходимо
4. Запустить JSON Server с помощью команды ```npx json-server db.json ```
