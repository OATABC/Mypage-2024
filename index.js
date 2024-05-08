function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
 }
 function checkAnswer2(answer) {
    const result = document.getElementById('result2');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง 7-11 เป็นธุรกิจของบริษัท CPALL";
        result.style.color = 'green';
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
 }
 