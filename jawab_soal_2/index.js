const readline = require('readline');

function getInput(prompt) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve, reject) => {
        rl.question(prompt, (input) => {
            resolve(input);
            rl.close();
        });
    });
}

async function main() {
    const students = [];
    
    console.log(" Program Nilai UTS Kalkulus Mahasiswa");
    console.log(" (Ketik 'E' untuk mengakhiri program)");
    console.log("--------------------------------------");
    console.log("Masukkan data mahasiswa!");
    
    while (true) {
        const name = await getInput("Nama mahasiswa: ");
        if (name.toUpperCase() === 'E') {
            break;
        }
        const gradeString = await getInput("Nilai: ");
        const grade = parseFloat(gradeString);
        if (!isNaN(grade)) {
            students.push({ name, grade });
        } else {
            console.log("Nilai tidak valid. Mohon masukkan nilai yang valid!");
        }
        console.log()
    }
    
    console.log("\nDaftar Nilai UTS Kalkulus Mahasiswa:");
    console.log("-----------------------------------------------");
    students.forEach((student, index) => {
        console.log(`${index + 1}. ${student.name}, Nilai: ${student.grade}`);
    });
    
    function calculateAverageGrade(students, callback) {
        let totalGrade = 0;
        students.forEach(student => {
            totalGrade += student.grade;
        });
        const averageGrade = totalGrade / students.length;
        callback(averageGrade);
    }

    await new Promise(resolve => {
        calculateAverageGrade(students, (averageGrade) => {
            console.log("Rata-rata Nilai UTS Kalkulus Mahasiswa:", averageGrade.toFixed(3));
            resolve();
        });
    console.log("-----------------------------------------------");
    console.log("Terima Kasih Telah Menggunakan Program Ini!");
    });
}

main().catch(error => console.error(error));
