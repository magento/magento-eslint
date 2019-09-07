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
        'no-unused-vars': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-uses-react': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react-hooks/rules-of-hooks': 'error'
    }
};

module.exports = config;
