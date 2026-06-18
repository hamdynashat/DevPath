# DevPath Flutter Development Track

## Track Overview
The Flutter Development track takes a learner from mobile development fundamentals to job-ready portfolio work. The track is designed around progressive modules, milestone checks, guided tasks, mini-projects, and portfolio-grade capstones.

### Track Outcomes
- Build production-style Flutter applications with clean structure
- Understand Dart, widgets, state management, routing, persistence, APIs, testing, and deployment basics
- Ship multiple portfolio-ready projects
- Demonstrate the ability to plan, build, debug, and present Flutter apps

### Completion Rules
A learner completes the track when they:
- Finish all core modules
- Complete every required milestone
- Deliver all mini-projects
- Publish the required portfolio projects
- Pass the final capstone criteria

---

## Module 1: Flutter and Dart Foundations

### Goal
Build a strong base in Dart syntax, Flutter fundamentals, and app structure.

### Milestones
#### 1.1 Dart Basics
**Tasks**
- Learn variables, types, null safety, collections, functions, classes, and enums
- Practice control flow, loops, and exception handling
- Write small Dart exercises to reinforce syntax

**Mini-Project**
- Console habit tracker that stores entries in memory and prints summaries

**Completion Criteria**
- Can explain Dart syntax and write simple programs without guidance
- Can use classes, constructors, and null safety correctly

#### 1.2 Flutter Basics
**Tasks**
- Understand Flutter architecture and the widget tree
- Learn `StatelessWidget` and `StatefulWidget`
- Build basic layouts with `Row`, `Column`, `Stack`, `Container`, and `ListView`

**Mini-Project**
- Simple profile app with cards, images, and a scrollable layout

**Completion Criteria**
- Can create a basic Flutter screen from scratch
- Can compose widgets into a responsive layout

#### 1.3 Flutter Tooling
**Tasks**
- Set up Flutter SDK and development environment
- Run on emulator and physical device
- Learn hot reload, debug console, and pub package basics

**Completion Criteria**
- Can launch and debug a Flutter app independently

---

## Module 2: UI Construction and Design Systems

### Goal
Create polished interfaces and reusable UI components.

### Milestones
#### 2.1 Layout Mastery
**Tasks**
- Build responsive layouts for different screen sizes
- Learn padding, alignment, constraints, and media queries
- Practice common mobile UI patterns

**Mini-Project**
- Responsive onboarding screen set

**Completion Criteria**
- Can build mobile-first layouts that avoid overflow issues

#### 2.2 Reusable Components
**Tasks**
- Create reusable buttons, cards, forms, and list items
- Pass data into widgets using constructors
- Organize component files cleanly

**Mini-Project**
- UI component library for a sample app theme

**Completion Criteria**
- Can identify repeated UI and convert it into reusable widgets

#### 2.3 Theming and Visual Consistency
**Tasks**
- Apply app-wide theme configuration
- Use colors, typography, spacing, and iconography consistently
- Understand light and dark mode basics

**Mini-Project**
- Branded landing screen with theme variants

**Completion Criteria**
- Can apply a consistent visual identity across screens

---

## Module 3: Interaction, Forms, and Local State

### Goal
Build interactive screens that respond to user input and changing state.

### Milestones
#### 3.1 User Input Handling
**Tasks**
- Use text fields, checkboxes, switches, dropdowns, and buttons
- Validate form inputs
- Handle focus and keyboard behavior

**Mini-Project**
- Sign-up form with validation and success state

**Completion Criteria**
- Can build and validate a multi-field form

#### 3.2 Local State Management
**Tasks**
- Use `setState` effectively
- Manage toggles, counters, filters, and selected items
- Separate view state from business logic where possible

**Mini-Project**
- Task manager with add, complete, and filter functionality

**Completion Criteria**
- Can update UI based on local state changes cleanly

#### 3.3 User Experience Basics
**Tasks**
- Add loading, empty, and error states
- Use snackbars, dialogs, and confirmation actions
- Improve accessibility and tap targets

**Completion Criteria**
- Can build screens that handle common UI states gracefully

---

## Module 4: Navigation and App Architecture

### Goal
Structure multi-screen apps with scalable navigation and clear code organization.

### Milestones
#### 4.1 Navigation Fundamentals
**Tasks**
- Navigate between screens
- Pass data between routes
- Handle back navigation correctly

**Mini-Project**
- Multi-screen recipe browser

**Completion Criteria**
- Can build a multi-page Flutter app with predictable navigation

#### 4.2 App Structure
**Tasks**
- Organize features, models, widgets, and services
- Separate presentation from data logic
- Learn basic architectural boundaries

**Mini-Project**
- Structured notes app with feature-based folders

**Completion Criteria**
- Can explain and apply a maintainable project structure

#### 4.3 Routing Strategy
**Tasks**
- Use named routes or declarative routing
- Support deep-linked navigation concepts at a basic level
- Handle unknown routes and redirect behavior

**Completion Criteria**
- Can define a routing approach suitable for a growing app

---

## Module 5: State Management and Data Flow

### Goal
Manage application state in a way that supports real product features.

### Milestones
#### 5.1 Shared State Concepts
**Tasks**
- Understand app state vs. local state
- Learn when state should be lifted or shared
- Observe data flow across widgets

**Completion Criteria**
- Can identify state ownership in a Flutter app

#### 5.2 Chosen State Management Pattern
**Tasks**
- Implement a scalable state management solution
- Connect UI to shared state through a clean pattern
- Separate data fetching and presentation logic

**Mini-Project**
- Shopping list app with shared categories and item state

**Completion Criteria**
- Can manage shared state without overusing `setState`

#### 5.3 Feature Data Flow
**Tasks**
- Model app features around state changes
- Handle optimistic updates and refresh states
- Preserve state across screen transitions where needed

**Completion Criteria**
- Can build a feature where multiple screens depend on shared state

---

## Module 6: APIs, Networking, and Persistence

### Goal
Integrate remote data and save user data locally.

### Milestones
#### 6.1 API Consumption
**Tasks**
- Make HTTP requests to REST APIs
- Parse JSON into models
- Handle request loading, success, and error states

**Mini-Project**
- Weather dashboard or public content browser

**Completion Criteria**
- Can fetch, parse, and display remote data reliably

#### 6.2 Persistence
**Tasks**
- Save local preferences and user settings
- Store app data offline where appropriate
- Restore app state after restart

**Mini-Project**
- Bookmark manager with local persistence

**Completion Criteria**
- Can persist data between sessions

#### 6.3 Offline-First Thinking
**Tasks**
- Recognize cache vs. source-of-truth patterns
- Handle no-network states
- Design for graceful fallback behavior

**Completion Criteria**
- Can describe how the app behaves when offline

---

## Module 7: Authentication, Profiles, and Product Features

### Goal
Add real product capabilities that users expect in a portfolio-quality app.

### Milestones
#### 7.1 Authentication Flows
**Tasks**
- Build sign-up, sign-in, sign-out, and password reset flows
- Handle authenticated and unauthenticated app states
- Protect restricted screens

**Mini-Project**
- Member-only app shell with auth gating

**Completion Criteria**
- Can implement a complete auth flow with appropriate screen states

#### 7.2 User Profiles
**Tasks**
- Display profile data and preferences
- Edit profile settings
- Link profile data to learning progress

**Mini-Project**
- User profile center with editable details and settings

**Completion Criteria**
- Can build profile features tied to user identity

#### 7.3 Product-Grade Behaviors
**Tasks**
- Add notifications, badges, progress indicators, and saved items
- Support search, filtering, and sorting
- Refine empty states and user feedback patterns

**Completion Criteria**
- Can add common product features that improve usability

---

## Module 8: Testing, Quality, and Release Readiness

### Goal
Prepare apps for real-world use through testing, debugging, and release discipline.

### Milestones
#### 8.1 Testing Fundamentals
**Tasks**
- Write unit tests for models and logic
- Write widget tests for key UI behavior
- Understand what not to test in the UI layer

**Mini-Project**
- Test suite for a prior mini-project

**Completion Criteria**
- Can write meaningful tests that protect core behavior

#### 8.2 Debugging and Quality
**Tasks**
- Inspect logs and exceptions
- Fix layout overflows and state bugs
- Review performance and rebuild behavior

**Completion Criteria**
- Can isolate and resolve common Flutter issues

#### 8.3 Release Readiness
**Tasks**
- Prepare app metadata and release checklist
- Review app performance, accessibility, and polish
- Understand store submission concepts at a high level

**Completion Criteria**
- Can explain what is needed to ship a production-ready Flutter app

---

## Portfolio Projects

### Portfolio Project 1: Habit Tracker
**Purpose**
Show fundamentals, local state, forms, and persistence.

**Required Features**
- Add and complete habits
- Daily streak tracking
- Local storage for saved habits
- Clean, branded UI

**Completion Criteria**
- App works end-to-end and demonstrates basic product thinking

### Portfolio Project 2: Recipe or Content Discovery App
**Purpose**
Show navigation, API integration, loading states, and detail pages.

**Required Features**
- Browse a list of items from an API
- View detail screens
- Search or filter results
- Handle loading and errors well

**Completion Criteria**
- App uses remote data and includes polished UX states

### Portfolio Project 3: Learning or Productivity App
**Purpose**
Show shared state, auth concepts, profile handling, and multi-feature architecture.

**Required Features**
- Auth-gated experience or simulated account flow
- Progress tracking
- Saved items or favorites
- Profile/settings screen

**Completion Criteria**
- App demonstrates a scalable architecture and realistic product flow

### Final Capstone: Flutter Portfolio App
**Purpose**
Combine the track into one complete, presentation-ready product.

**Suggested Scope**
- Login and profile
- Dashboard with progress summary
- Roadmap or content browsing experience
- Saved items or completion tracking
- Offline-friendly local persistence
- Testing for core flows

**Completion Criteria**
- Clearly defined user problem
- Polished UI and navigation
- At least one remote data source or API integration
- At least one persistence layer
- At least three meaningful tests
- Deployed or demo-ready version with documentation

---

## Suggested Learning Sequence
1. Flutter and Dart Foundations
2. UI Construction and Design Systems
3. Interaction, Forms, and Local State
4. Navigation and App Architecture
5. State Management and Data Flow
6. APIs, Networking, and Persistence
7. Authentication, Profiles, and Product Features
8. Testing, Quality, and Release Readiness
9. Portfolio Projects
10. Final Capstone

---

## Track Completion Standard
To complete the Flutter track, a learner must demonstrate:
- Core programming fluency in Dart
- Ability to build responsive Flutter UIs
- Ability to manage state and data flow across a multi-screen app
- Ability to work with APIs and persistence
- Ability to test and validate app behavior
- A portfolio with multiple polished projects
- A final capstone that feels credible to a hiring manager or technical reviewer

