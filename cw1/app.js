const fs = require('fs');
const path = require('path');


const task1 = {
    files: path.join(__dirname, 'files'),
    file: path.join(__dirname, 'new_files', 'file.txt'),
    file3: path.join(__dirname, 'files2', 'file3.txt')
};

const task2 = {
    new_files: path.join(__dirname, 'new_files'),
    file_txt: path.join(__dirname, 'files', 'file.txt'),
    file2_txt: path.join(__dirname, 'files', 'file2.txt')
};

const task3 = {
    taskFile:path.join(__dirname, 'task3', 'task'),
    taskTxtFile:path.join(__dirname, 'task3', 'task.txt'),
    root:path.join(__dirname, 'task3')

};




//1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл,
// в вас вийде невеликий callback hell, пізніше я вам покажу
// як можна це обійти, але поки зробіть так


// fs.mkdir(task1.files, (err) => {
//     if (err) {
//         console.log(err);
//     }
//     fs.writeFile(task1.file, 'hello my friends', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         fs.readFile(task1.file, 'utf-8', (err, data) => {
//             if (err) {
//                 console.log(err);
//             }
//             fs.writeFile(task1.file3, `${data}`, (err) => {
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


// fs.mkdir(task2.new_files, (err) => {
//     if (err) {
//         console.log(err);
//     }
//     fs.writeFile(task2.file3, 'HEllO MY FRIENDS', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         fs.readFile(task2.file3, 'utf-8', (err, data) => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             }
//             fs.writeFile(task2.file, `${data}`, (err) => {
//                 if (err) {
//                     console.log(err);
//                 }
//                 fs.unlink(task2.file3, (err) => {
//                     if (err) {
//                         console.log(err);
//                     }
//                 });
//             })
//         })
//     })
// })


// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки
// і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно
// їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new

let fileCreate = Math.floor(Math.floor(Math.random() * (3 - 1) + 1));

if (fileCreate === 2) {
    fs.mkdir(task3.taskFile , (err) => {
        if (err) {
            console.log(err);
        }
    })
} else {
    fs.writeFile(task3.taskTxtFile, 'task', (err) => {
        if (err) {
            console.log(err);
        }
    })
}

fs.readdir(task3.root, (err, data)=>{
    if(err){
        console.log(err);
        throw err;
    }
    const nextStep = data[0];
    console.log(nextStep);

    if (nextStep.includes('txt')){
        fs.writeFile(path.join(task3.root, nextStep), '',(err) => {
            if (err) {
                console.log(err);
            }
        })
    }else {
        fs.rename(path.join(task3.root, nextStep),path.join(task3.root, `new_${nextStep}`), (err) => {
            if (err) {
                console.log(err);
                throw err;
            }
        });
    }

})