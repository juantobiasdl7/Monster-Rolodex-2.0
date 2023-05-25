# Monster Rolodex 2.0

## Introduction
Monster Rolodex 2.0 is a React application that showcases the use of fundamental React concepts such as functional components, state, and props. The project also utilizes CSS for styling.

## Project Structure
The project's main codebase is located inside the src directory. It contains several JavaScript (.js) files that represent various components of the application, as well as corresponding CSS (.css) files for styling these components.

## Components

### Card Component
The Card component (card.component.js) is a React functional component that represents an individual monster card. It receives id, name, and email as props, and it uses these to render an image and some text inside a div element. The image URL is generated using the received id and the robohash.org service.

### SearchBox Component
The SearchBox component is a component that allows users to search through the monster cards filtering by name.

### CardList Component
CardList component renders the list of Card components.

## Lessons Learned
This project is a example of how to structure a simple React application and how to use props to pass data down to child components. Additionally, it demonstrates the use of external services (like robohash.org for generating images) in a React app. The code is modular and each component has a clear, specific role, which makes the project easy to understand and maintain.

## Future Improvements
Some potential improvements could include adding more interactivity (for example, clicking a card could show more details about the monster), or expanding the search functionality (it could be made more advanced, allowing users to search by different fields, not just names).


