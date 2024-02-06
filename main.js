// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//handleFetch Function

function handleFetch() {
  const likeButtons = Array.from(document.querySelectorAll(".like-glyph"));

  likeButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      if (e.target.textContent === EMPTY_HEART) {
        e.target.textContent = FULL_HEART;
        e.target.classList.remove("like-glyph");
        e.target.classList.add("activated-heart");

        mimicServerCall()
          .then(response => {
            // Success
            console.log(response);
          })
          .catch(error => {
            // Error
            let errorMessage = document.querySelector("#modal")
            errorMessage.classList.remove("hidden")
            setTimeout(() => {errorMessage.classList.add("hidden")}, 3000)

            console.error(error);
          });

      } else {
        e.target.textContent = EMPTY_HEART;
        e.target.classList.remove("activated-heart");
        e.target.classList.add("like-glyph");
      }
    });
  });
}

handleFetch();


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
