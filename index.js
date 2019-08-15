const config = {
    env: {
        es6: true,
        jest: true,
        browser: true,
        node: true
    },
    plugins: ['jsx-a11y', 'package-json', 'react', 'react-hooks'],
    extends: [
        'eslint:recommended',
        'prettier',
        'plugin:jsx-a11y/recommended',
        'plugin:package-json/recommended'
    ],
    rules: {
        'getter-return': 'off',
        'prefer-const': 'error',
        'no-console': 'off',
        'no-empty': 'off',
        'no-unused-vars': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-uses-react': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error'
    }
};

module.exports = config;
