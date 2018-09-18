const config = {
    plugins: ['jsx-a11y', 'react'],
    extends: ['plugin:jsx-a11y/recommended'],
    rules: {
        'no-unused-vars': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-uses-react': 'error'
    }
};

module.exports = config;
