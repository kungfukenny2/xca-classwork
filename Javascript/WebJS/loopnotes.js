//There are various types of Loops in JavaScript: "for", "for of", "while", "do while", and "forEach".

//If you wanted to console.log something 5 times, without loops, you'd have to write it 5 times:

//console.log('loop' );
//console.log('loop');
//console.log('loop');
//console.log('loop');
//console.log('loop');

//so using a loop makes its easier
for(let i = 0; i < 5; i++ ){
    console.log('loop'+ i);
}

//(let i = 0) is the initializer. i stands for index.
//(i < 5) is the condition, which means keep going until the "condition" is under 5. 