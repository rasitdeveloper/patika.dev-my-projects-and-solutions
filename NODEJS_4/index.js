const fs = require('fs');

fs.open('employees.json', 'w', function (err) {
    if (err) { console.log(err);} else { console.log("DOSYA OLUŞTURULDU");}
});

fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
    if (err) { console.log(err);} else { console.log("DOSYAYA YAZILDI");}
});

fs.readFile('employees.json', 'utf8', (err, data) => {
    if (err) {console.log(err);} else {console.log(data); console.log("DOSYA OKUNDU");}                    
});

fs.appendFile('employees.json', '\n {"name": "Employee 2 Name", "salary": 2500}', 'utf8', (err) => {
    if (err) {console.log(err);} else {console.log("DOSYA GÜNCELLENDİ");}    
});

fs.unlink('employees.json', (err) => {
    if (err) {console.log(err);} else {console.log("DOSYA SİLİNDİ");}
});