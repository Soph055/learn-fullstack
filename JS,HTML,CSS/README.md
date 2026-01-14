# Hydroponic Quiz Game

A simple and interactive **Hydropnic Quiz Game** based on my own personal hobby of hydroponics. It is built with **HTML, CSS, and JavaScript**. Test your knowledge with multiple-choice questions and see your score instantly! This project also includes a **Dockerfile** to easily containerize and run the app.

## Demo

https://github.com/user-attachments/assets/369e82b8-a60e-442d-9238-565e5642be29



## Features

- Interactive multiple-choice quiz  
- Real-time score tracking  
- Progress bar for quiz completion  
- Dynamic feedback messages based on performance  
- Responsive design for mobile and desktop  
- Dockerized for easy deployment  

## How It Works
- Start Quiz: Clicking the "Start Quiz" button hides the start screen and shows the first question.
- Answer Selection: Selecting an answer highlights it green if correct, red if incorrect, and updates the score.
- Progress Tracking: The progress bar and question counter update as you advance.
- Results Screen: After the last question, your total score and a performance message are displayed.
- Restart Quiz: Clicking "Restart Quiz" resets everything so you can play again.

### Run with Docker

To run the quiz game using Docker, make sure you have the project code on your computer (either by cloning the GitHub repo or downloading it). Then follow these steps:

1. **Build the Docker image**  
   Open a terminal in the project folder and run:
   
   docker build -t quiz-game .

3. **Run the container**

   Start the app in a container and map it to your local port 80:
   
   docker run -p 80:80 quiz-game
   
5. **Open the app in your browser**
   Visit http://localhost to play the quiz game.


