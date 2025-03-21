# 🚀 Spaceman - A Hangman Variant Game

The game dynamically selects a **random word** based on the chosen **difficulty level** and challenges the user to guess it **letter by letter** or by **attempting the full word** within **7 incorrect guesses**.

---

## **🌟 Features**

✅ **Fully Functional Spaceman Game:** Play with randomly generated words.  
✅ **Difficulty Selection:** Choose between **Easy, Medium, and Hard**.  
✅ **Win & Lose Conditions:** Intuitive UI feedback on victory and defeat.  
✅ **New Game Option:** Start a fresh round anytime.  
✅ **Repeated Guess Handling:** Shows a toast when a guessed letter is repeated.  
✅ **Optimized Game Logic:** Efficient state management using React hooks.  
✅ **Responsive & Intuitive UI:** Clean layout, visual feedback, and interactive elements.  
✅ **Live deployed Version:** https://spaceman-se0c.onrender.com/

---

## **🛠️ Tech Stack**

- **Language:** JavaScript
- **Frontend:** React (Vite)
- **UI/UX:** CSS, Styled Components

---

## **📜 Game Rules**

1. The **computer picks a random word** from a predefined word bank based on difficulty.
2. The word is displayed as **underscores (\_)**, with each underscore representing a letter.
3. The player can:
   - **Guess a single letter** → If correct, it's revealed in all matching positions.
   - **Guess the full word** → If correct, they win instantly. Otherwise, they lose a turn.
4. Players get **7 incorrect guesses** before losing.
5. **If all letters are guessed**, the player wins! 🎉
6. **If all 7 mistakes are used**, the game ends in a loss. 😢
7. Players can **start a new game** at any time or **change difficulty** mid-game.

---

## **🚀 Getting Started**

### **1️⃣ Prerequisites**

Ensure you have:

- **Node.js (v14+ recommended)**
- **npm or yarn package manager**

### **2️⃣ Installation**

Clone the repository and install dependencies:

```bash
git clone https://github.com/HetP1742431/spaceman.git
cd spaceman
npm install
```

### **3️⃣ Run Locally**

```bash
npm run dev
```

The app will be accessible at http://localhost:5173

## 📁 Project Structure

> A quick overview of major files and folders

| File/Folder                 | Description |
|----------------------------|-------------|
| `App.jsx`                  | Root component that tracks total wins/losses and renders the game UI. |
| `components/Game.jsx`      | Main game logic wrapper. Handles difficulty selection, modal popups, and game resets. |
| `components/SpacemanFigure.jsx` | Renders the visual stick-figure (spaceman) drawing based on incorrect guesses. |
| `components/WordDisplay.jsx`    | Displays the word with guessed and unguessed letters. |
| `components/GuessControls.jsx`  | Input forms for guessing a letter or a word. |
| `components/Modal.jsx`     | Reusable modal used to display win/lose messages. |
| `hooks/useSpacemanGame.js` | Custom hook that handles all core game logic: word generation, guesses, win/loss state. |
| `data/words.js`            | Contains categorized word lists (easy, medium, hard). |
| `styles/`                  | Contains custom CSS files and global styles. |
| `public/`                  | Contains static assets like the favicon. |
| `vite.config.js`           | Vite configuration for local dev server and build process. |

