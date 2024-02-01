module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/jsx-runtime',
        '@feature-sliced/eslint-config/rules/import-order',
        '@feature-sliced/eslint-config/rules/public-api',
        '@feature-sliced/eslint-config/rules/layers-slices',
        'plugin:i18next/recommended'
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    'plugins': [
        '@typescript-eslint',
        'react',
        'i18next'
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        '@typescript-eslint/no-unused-vars': 1,
        '@typescript-eslint/ban-ts-comment': 0,
        'max-len': ['error', {
            'ignoreComments': true,
            'code': 100,
        }]
    }
};
