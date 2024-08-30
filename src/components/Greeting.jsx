// import React, { useEffect } from 'react';

// const Greeting = () => {
//   useEffect(() => {
//     const sentences = [
//       "Welcome to My Portfolio",
//       "I'm a Full Stack Web Developer",
//       "Let's build something amazing together!"
//     ];

//     let currentSentence = 0;
//     let currentChar = 0;
//     const typewriterElement = document.getElementById("typewriter");

//     function type() {
//       const currentText = sentences[currentSentence];
//       typewriterElement.textContent = currentText.slice(0, currentChar + 1);
//       currentChar++;

//       if (currentChar === currentText.length) {
//         currentChar = 0;
//         currentSentence = (currentSentence + 1) % sentences.length;
//         setTimeout(() => {
//           typewriterElement.textContent = ''; // Clear text before typing the next sentence
//           setTimeout(type, 500); // Start typing the next sentence after a short delay
//         }, 2000); // Delay before starting the next sentence
//       } else {
//         setTimeout(type, 100); // Speed of typing
//       }
//     }

//     type();
//   }, []); // Empty dependency array to run the effect only once on mount

//   return (
//     <div className="greeting">
//       <h1 id="typewriter"></h1>
//     </div>
    
//   );
// };

// export default Greeting;



import React, { useEffect } from 'react';

const Greeting = () => {
  useEffect(() => {
    const sentences = [
      "Welcome to My Portfolio",
      "My Name is Eric Reyna",
      "Check Out My Work",
      "Let Me Know What You Think"
    ];

    let currentSentence = 0;
    let currentChar = 0;
    const typewriterElement = document.getElementById("typewriter");

    function type() {
      const currentText = sentences[currentSentence];
      typewriterElement.textContent = currentText.slice(0, currentChar + 1);
      currentChar++;

      if (currentChar === currentText.length) {
        currentChar = 0;
        currentSentence = (currentSentence + 1) % sentences.length;
        setTimeout(() => {
          typewriterElement.classList.remove("fade-in");
          typewriterElement.classList.add("fade-out");
          setTimeout(() => {
            typewriterElement.textContent = ''; // Clear text before typing the next sentence
            typewriterElement.classList.remove("fade-out");
            setTimeout(() => {
              typewriterElement.classList.add("fade-in");
              type();
            }, 500); // Delay before starting the next sentence
          }, 500); // Delay during fade-out effect
        }, 2000); // Delay before starting the next sentence
      } else {
        setTimeout(type, 75); // Speed of typing
      }
    }

    type();
  }, []);

  return (
    <div className="greeting">
      <h1 id="typewriter" className="fade-in"></h1>
    </div>
  );
};

export default Greeting;
