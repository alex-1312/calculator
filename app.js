// JS
// const numbers = document.querySelectorAll('.number');
let display = document.querySelector('.display p');
const container = document.querySelector('.grid-container');
// NUMBER AND OPERATOR VARS
let num1 = '';
let num2 = '';
let operator = '';

// BASIC CALCULATOR FUNCTIONS
const add = function(a,b){
  return parseFloat(a) + parseFloat(b);
};
const sub = function(a,b){
  return parseFloat(a) - parseFloat(b);
};
const mul = function(a,b){
  return parseFloat(a) * parseFloat(b);
};
const div = function(a,b){
  if(b==0){
    return 'Don\'t divide by 0!';
  }else{
    return parseFloat(a) / parseFloat(b);
  };
};

// OPERATE
const operate = function(op,n1,n2){
  switch(op){
    case '+':
      return add(n1,n2);
    case '-':
      return sub(n1,n2);
    case '*':
      return mul(n1,n2);
    case '/':
      return div(n1,n2);
  };
};

// GET THE VALUE OF THE CLICKED NUMBER BUTTON
const getNumber = function(e){
  return e.target.textContent;
};
// GET THE VALUE OF THE CLICKED OPERATOR BUTTON
const getOperator = function(e){
  return e.target.textContent;
};

// FILL NUMBER VARS
const setNumbers = function(number){  
  // IF NO OPERATOR IS SET FILL VAR num1 ELSE num2 
  if(operator === ''){
    num1 += number;
    toDisplay(num1);
  }else{
    num2 += number;
    toDisplay(num2);
  };
  // TEST
  testVars();
};
// SET THE OPERATOR VARS VALUE
const setOperator = function(op){
  // IF VAR num1 IS SET  =>  FILL THE VAR operator
  // ELSE => return
  if(num1 !== ''){
    operator = op;
  }else{
    return;
  };
};

// SEND STUFF TO THE CALC DISPLAY 
const toDisplay = function(num){  
  display.textContent = num;
};

// CLEAR
const clearNumbers = function(){
  num1 = '';
  num2 = '';
};
const clearAll = function(){
  num1 = '';
  num2 = '';
  operator = '';
  display.textContent = '0';
};

// EVENTLISTENER CLICK EVENT  BUTTONS
container.addEventListener('click', (e) => {
  // IF NUMBER BUTTON IS CLICKED
  if(e.target.classList == 'number'){
    setNumbers(getNumber(e));
  };
  // IF OPERATOR BUTTON IS CLICKED
  if(e.target.classList == 'operators'){
    // IF OPERATOR BUTTON IS CLICKED AND BOTH NUMBER VARS ARE FILLED
    // CALL OPERATE()
    if(num1 !== '' && num2 !== ''){
      toDisplay(operate(operator,num1,num2));
      clearNumbers(); 
      num1 = display.textContent;
      setOperator(getOperator(e));
    }else{
      setOperator(getOperator(e));
    };
  };
  // IF EQUALS IS CLICKED
  if(e.target.classList == 'equals'){
    if(display.textContent === '' 
        || num1 === ''
        || num2 === ''){return;};
                
    toDisplay(operate(operator,num1,num2));
  };
  // IF DOT BUTTON IS CLICKED
  if(e.target.classList == 'dec'){
    if(!display.textContent.includes('.')){
      setNumbers('.');
    }else{
      return;
    };
  };
  // IF CLEAR IS CLICKED 
  if(e.target.classList == 'clear'){
    clearAll();
  };
  // IF DEL IS CLICKED
  if(e.target.classList == 'delete-digit'){
    if(num2 === ''){
      num1 = num1.slice(0,-1);      
    }else{
      num2 = num2.slice(0,-1);
    };
    display.textContent = display.textContent.slice(0,-1);
    // TEST
    testVars();
  };
});

  
// TEST
const testVars = function(){
  console.log('-------------------------------------------------');
  console.log('num1: ' + num1);
  console.log('num2: ' + num2);
  console.log('operator: ' + operator);
  console.log('-------------------------------------------------');
  console.log('display: ' + display.textContent);
  console.log('=================================================');
};
