
function checkAnswer() {
    
    const correctAnswer = "4";

    
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    
    const feedback = document.getElementById("feedback");

    
    if (selectedOption) {
        const userAnswer = selectedOption.value;

    
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red";
        }
    } else {
        
        feedback.textContent = "Please select an answer!";
        feedback.style.color = "orange";
    }
}


const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);