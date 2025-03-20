# CLAUDE.md - Development Guide

## Build Commands
- `npm run dev` - Start development server with no caching
- `npm start` - Start development server
- `npm run build` - Build for production (not configured yet)

## Test Commands
- `npm test` - Run all tests
- `npm test -- -t "test name"` - Run specific test

## Lint/Format Commands
- `npm run lint` - Run linter
- `npm run format` - Format code

## Code Style Guidelines
- **Imports**: Group imports (1. external libraries 2. internal modules 3. types)
- **Naming**: camelCase for variables/functions, PascalCase for components/classes
- **Types**: Use TypeScript with explicit types when inference isn't clear
- **Error Handling**: Use try/catch blocks and meaningful error messages
- **Components**: One component per file, use functional components with hooks
- **State Management**: Prefer React Context for simple state, Redux for complex

## Architecture Notes
- Follow folder-by-feature structure
- Place shared components in `/components` directory
- Handle API calls in dedicated service files