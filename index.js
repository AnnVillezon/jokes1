function welcome(message) {
    // Define an array of programming jokes as objects
    const programmingJokes = [
      { id: 0, question: "Why don't programmers like nature?", answer: "It has too many bugs." },
      { id: 1, question: "Why did the CSS developer go to therapy?", answer: "To get rid of his margins." },
      { id: 2, question: "How do you comfort a JavaScript developer?", answer: "You console them." },
      { id: 3, question: "Why did the CSS developer leave the restaurant?", answer: "Because it had no class." },
      { id: 4, question: "Why did the JavaScript developer go missing?", answer: "Because he didn't know when to return." },
      { id: 5, question: "Why did the HTML tag go to the party?", answer: "Because it wanted to break the line." },
      { id: 6, question: "Why do JavaScript developers wear glasses?", answer: "Because they don't C#." },
      { id: 7, question: "Why don't programmers like to use inline styles?", answer: "Because they want to be classy." },
      { id: 8, question: "Why did the CSS selector break up with the HTML element?", answer: "It found someone more specific." },
      { id: 9, question: "Why did the CSS developer apply for a job?", answer: "They wanted to get a position." }
    ];
  
    // Function to get a random joke object
    function getRandomJoke() {
      // Generate a random index to select a joke
      const randomNumber = Math.floor(Math.random() * programmingJokes.length);
      // Remove the selected joke from the array and store it
      const selectedJoke = programmingJokes.splice(randomNumber, 1)[0];
      return selectedJoke;
    }
  
    // Get two random unique jokes
    const joke1 = getRandomJoke();
    const joke2 = getRandomJoke();
  
    // Print the jokes
    console.log("Here are two randomly selected programming jokes for you:");
    console.log(`Joke ${joke1.id + 1}: ${joke1.question}`);
    console.log(`Answer: ${joke1.answer}`);
    console.log();
    console.log(`Joke ${joke2.id + 1}: ${joke2.question}`);
    console.log(`Answer: ${joke2.answer}`);
  }
  
  // Define the paragraph message
  const paragraphMessage = `############################
  Welcome to the joke factory!
  Let me tell you something about programming:`;
  
  // Call the function with the paragraph message
  welcome(paragraphMessage);