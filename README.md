# Game Catalog

Toy front-end project displaying a list of games

## Quick start

Run the app:

    npm install
    npm start

Run the test suite:

    npm test

## Dependencies

This project uses these great open-source tools:

| Category   | Tools                           |
| ---------- | ------------------------------- |
| Bundling   | `parcel-bundler`                |
| UI         | `react`                         |
| Routing    | `react-router-dom`              |
| Styling    | `styled-components`             |
| Testing    | `jest`, `react-testing-library` |
| Formatting | `prettier`                      |

## Features

### 🎯 Must have...

- [x] automated tests
  - [x] unit tests
  - [x] snapshots
- [x] header with logo and title
- [x] gaming platform filter
- [x] game card grid
  - [x] game cards
  - [x] automatic layout
- [x] game details
- [x] in-app routing
  - [x] link to details on game card
  - [x] link to catalog in header
- [x] platform name in catalog header
- [x] read me

### 💪 Should have...

- [x] external font
- [x] game card grid
  - [x] responsive blank space
  - [x] responsive card size
- [x] mobile version
  - [x] margins
  - [x] element reflow
- [x] proper container sizing/background during image load
- [ ] favicon
- [ ] spinner when loading images
- [ ] fade in/out animations
- [ ] manual tests
  - [x] multiple resolutions
  - [ ] other browsers than chrome
  - [ ] other devices than my laptop

### 🕒 Could have...

- [ ] visual regression testing (screenshot comparison)
- [ ] server-side rendering
- [ ] fetch game data from a server
  - [ ] fetch the JSON files? (redux+thunk/saga?)
  - [ ] call a real API to avoid loading all descriptions at once? (graphql?)
- [ ] share typography and margin values instead of duplicating them
- [ ] enable code splitting for catalog/details routes
- [ ] i18n
- [ ] a11y
