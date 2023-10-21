const calculateBtn = document.getElementById('calc-btn');
const resetBtn = document.getElementById('reset-btn');
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');
const resultArea = document.getElementById('result');
const historyBtn = document.getElementById('history-btn');

const resultHistory = [];

const resetInput = () => {
    heightInput.value = '';
    weightInput.value = '';
};

const calaculateBmi = () =>{
    const enteredHeight = +heightInput.value;
    const enteredWeight = +weightInput.value;

    const bmi = enteredWeight / (enteredHeight * enteredHeight);

    if(isNaN(bmi)){
        alert('Not a number, please check inputs!');
        return;
    }

    const existingResultCard = document.getElementById('result-card');
    if(existingResultCard){
        existingResultCard.remove();
    };

    const resultElement = document.createElement('ion-card');
    resultElement.id = 'result-card';
    resultElement.innerHTML = `
    <ion-card-content>
    <h2>${bmi}</h2>
    </ion-card-content>
    `;
    resultArea.innerHTML='';
    resultArea.appendChild(resultElement);
    resultHistory.push(bmi);
};

calculateBtn.addEventListener('click', calaculateBmi);
resetBtn.addEventListener('click', resetInput);
historyBtn.addEventListener('click', ()=> {
    if(resultHistory.length > 0){
        alert('History: '+resultHistory.join(', '));
    }else{
        alert('No history available.');
    }
})