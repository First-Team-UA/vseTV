const getDate = async ():Promise<string> => {
    const now = new Date();

// Получение отдельных компонентов даты и времени
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0'); // месяцы начинаются с 0
const day = String(now.getDate()).padStart(2, '0');
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');

// Форматирование даты и времени
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedDate
}
