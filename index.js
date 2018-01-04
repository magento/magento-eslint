const config = {
    plugins: ['jsx-a11y', 'react'],
    extends: ['plugin:jsx-a11y/recommended'],
    rules: {
        'no-unused-vars': [
            'error',
            {
                varsIgnorePattern: 'createElement'
            }
        ],
        'react/jsx-uses-vars': 'error'
    }
};

module.exports = config;
