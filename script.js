let salary, bonus, otherIncome, deductions = 0, totalIncome, tax;

function nextPage() {
    salary = parseFloat(document.getElementById('salary').value);
    bonus = parseFloat(document.getElementById('bonus').value);
    otherIncome = parseFloat(document.getElementById('other-income').value);

    if (isNaN(salary) || isNaN(bonus) || isNaN(otherIncome)) {
        alert("กรุณากรอกข้อมูลทั้งหมด");
        return;
    }

    // Save data to sessionStorage and go to deductions page
    sessionStorage.setItem('salary', salary);
    sessionStorage.setItem('bonus', bonus);
    sessionStorage.setItem('otherIncome', otherIncome);

    window.location.href = 'deductions.html';
}

function calculateTax() {
    // Retrieve data from sessionStorage
    salary = parseFloat(sessionStorage.getItem('salary'));
    bonus = parseFloat(sessionStorage.getItem('bonus'));
    otherIncome = parseFloat(sessionStorage.getItem('otherIncome'));

    totalIncome = salary + bonus + otherIncome;

    // Get deductions
    if (document.getElementById('personal-deduction').checked) {
        deductions += 60000;
    }
    if (document.getElementById('parents-deduction').checked) {
        deductions += 30000;
    }
    if (document.getElementById('disabled-deduction').checked) {
        deductions += 60000;
    }

    // Calculate taxable income
    let taxableIncome = totalIncome - deductions;

    // Tax rate example: 10% on income above 150,000
    if (taxableIncome > 150000) {
        tax = (taxableIncome - 150000) * 0.1;
    } else {
        tax = 0;
    }

    alert(`รายได้ทั้งหมด: ${totalIncome} บาท\nลดหย่อน: ${deductions} บาท\nภาษีที่ต้องจ่าย: ${tax} บาท`);
}
