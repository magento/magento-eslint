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
        'prefer-const': 'error',
        'no-console': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'error',
        'no-useless-escape': 'off',
        'react/jsx-uses-vars': 'error',
        'react/jsx-uses-react': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'no-duplicate-imports': 'error',
        'one-var': ['error', 'never']
    }
};

module.exports = config;
