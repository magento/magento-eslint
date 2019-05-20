const config = {
    plugins: ['jsx-a11y', 'package-json', 'react', 'react-hooks'],
    extends: ['plugin:jsx-a11y/recommended', 'plugin:package-json/recommended'],
    rules: {
        'prefer-const': 'error',
        'no-unused-vars': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-uses-react': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error'
    }
};

module.exports = config;
