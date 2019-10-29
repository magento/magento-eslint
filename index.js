const config = {
    env: {
        es6: true
    },
    plugins: ['jsx-a11y', 'package-json', 'react', 'react-hooks'],
    extends: [
        'eslint:recommended',
        'prettier',
        'plugin:jsx-a11y/recommended',
        'plugin:package-json/recommended'
    ],
    rules: {
        'no-console': 'off',
        'no-duplicate-imports': 'error',
        'no-unused-vars': 'error',
        'one-var': ['error', 'never'],
        'prefer-const': 'error',
        quote: 'single',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react-hooks/rules-of-hooks': 'error'
    }
};

module.exports = config;
