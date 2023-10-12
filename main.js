const fs = require('fs');

// Функція для читання файлу JSON
function readJSONFile(filename) {
    try {
        const data = fs.readFileSync(filename, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Помилка при читанні файлу JSON:', error);
        return null;
    }
}

// Функція для запису результатів у файл output.txt
function writeOutputFile(data) {
    try {
        const formattedData = data.map(item => ${ item.exchangedate }: ${ item.rate }).join('\n');
        fs.writeFileSync('output.txt', formattedData);
        console.log('Результати збережено у файлі output.txt');
    } catch (error) {
        console.error('Помилка при записі у файл output.txt:', error);
    }
}

// Основна функція
function main() {
    const jsonData = readJSONFile('data.json');
    if (jsonData) {
        writeOutputFile(jsonData);
    }
}

main();