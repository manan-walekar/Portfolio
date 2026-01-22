# Contributing Guidelines

Thank you for your interest in contributing to this project!

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Create a new branch for your feature: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Commit with clear messages: `git commit -m "feat: add new feature"`
6. Push to your fork: `git push origin feature/your-feature-name`
7. Open a Pull Request

## Development Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run linter
npm lint

# Type checking
npm run type-check

# Build for production
npm run build
```

## Code Standards

- Follow the existing code style
- Use TypeScript for type safety
- Write meaningful commit messages
- Add comments for complex logic
- Keep components small and focused

## Commit Message Format

```
type(scope): description

[optional body]
[optional footer]
```

Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Build, dependencies

## Pull Request Process

1. Update documentation as needed
2. Ensure no build errors: `npm run build`
3. Add descriptions of your changes
4. Reference any related issues
5. Be responsive to review feedback

## Questions?

Feel free to open an issue for discussion!
