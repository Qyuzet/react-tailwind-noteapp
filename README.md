# React Tailwind Note App

This is a simple React note-taking app that allows users to add, edit, and delete notes. It features a clean, interactive interface built with React and styled using Tailwind CSS. The app includes a navbar, footer, and task management features, providing an intuitive user experience. [TRY NOW!](https://react-tailwind-noteapp.vercel.app/)

## Features

- **Note Management**: Add, edit, and delete notes.
- **Alerts**: Display success, error, and warning messages for actions.
- **Interactive Navbar**: Includes a typewriter effect and links to your social media.
- **Responsive Design**: Built with Tailwind CSS for a mobile-friendly, flexible layout.
- **Modal for Note Input**: A modal form is used to input new notes or edit existing ones.

## Tech Stack

- **React**: The core library for building the user interface.
- **Tailwind CSS**: A utility-first CSS framework for styling the app.
- **React Icons**: For adding vector icons (e.g., GitHub, Edit, Trash).
- **React Type Animation**: For the typewriter effect in the navbar.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (which includes npm)
- A modern browser

### Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Qyuzet/react-tailwind-noteapp.git
   ```

2. Navigate into the project directory:
   ```bash
   cd react-tailwind-noteapp
   ```

3. Install the necessary dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

   Your app should now be running at `http://localhost:3000`.

## Project Structure

- `main.jsx`: The entry point of the app where the `Navbar`, `App`, and `Footer` components are rendered.
- `App.jsx`: Contains the main logic for handling notes (adding, editing, deleting).
- `NoteModal.jsx`: A modal component for note input and editing.
- `NoteCard.jsx`: A component to display each note.
- `Alert.jsx`: A component to display alerts on note actions.
- `index.css`: The global stylesheet using Tailwind CSS for styling.


## How it Works

1. **Navbar**: Includes links to GitHub, Medium, and Instagram, with a typewriter effect displaying the message "made by Qyuzet".
2. **Notes**: Notes are stored in the app state, and users can add a new note or edit an existing one via the modal form. Each note has edit and delete buttons.
3. **Alerts**: After actions like adding, editing, or deleting notes, an alert message will appear to inform the user of the action's result.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Author

- **Qyuzet**: [GitHub](https://github.com/Qyuzet)

## Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Type Animation](https://www.npmjs.com/package/react-type-animation)
