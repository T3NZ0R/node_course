const fs = require('fs');
const path = require('path');

//1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл,
// в вас вийде невеликий callback hell, пізніше я вам покажу
// як можна це обійти, але поки зробіть так


// fs.mkdir(path.join(__dirname, 'files'), (err) => {
//     if (err) {
//         console.log(err);
//     }
//     fs.writeFile(path.join(__dirname, 'files', 'file.txt'), 'hello my friends', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         fs.readFile(path.join(__dirname, 'files', 'file.txt'), 'utf-8', (err, data) => {
//             if (err) {
//                 console.log(err);
//             }
//             fs.writeFile(path.join(__dirname, 'files', 'file2.txt'), `${data}`, (err) => {
//                 if (err) {
//                     console.log(err);
//                 }
//             });
//         });
//     });
// });


// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній, старий файл
// видаліть після того як все завершиться. Також вийде callback hell

fs.mkdir(path.join(__dirname, 'new_files'), (err) => {
    if (err) {
        console.log(err);
    }
    fs.writeFile(path.join(__dirname, 'files2', 'file.txt'), 'HEllO MY FRIENDS', (err) => {
        if (err) {
            console.log(err);
        }
        fs.readFile(path.join(__dirname, 'files2', 'file.txt'), 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(data);
            fs.writeFile(path.join(__dirname, 'new_files', 'file.txt'), `${data}`, (err) => {
                if (err) {
                    console.log(err);
                    fs.unlink(path.join(__dirname, 'files2', 'file.txt'), (err) => {
                        if (err) {
                            console.log(err);
                            console.log("complete")
                        }
                    })
                }
            })
        })
    })
})


// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки
// і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно
// їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new