# Prompt Enhancer

A powerful tool that helps you create better prompts for Large Language Models using advanced prompt engineering techniques.

## Features

- 🪄 Enhance prompts with expert prompt engineering techniques
- 🌓 Dark/Light theme support
- 📋 Easy copy-to-clipboard functionality
- 💨 Fast and responsive UI
- 🔄 Fallback to mock data when API is unavailable

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Google's Gemini AI API
- Lucide Icons

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and add your Gemini API key:
   ```bash
   VITE_GEMINI_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Development

- Built with Vite for fast development and building
- Uses TypeScript for type safety
- Implements modern React patterns and hooks
- Follows a component-based architecture

## Project Structure

```
src/
├── components/       # React components
├── contexts/        # React contexts (theme)
├── services/        # API and enhancement services
├── utils/           # Utility functions
└── prompts/         # Prompt templates
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT