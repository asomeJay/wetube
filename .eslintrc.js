module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["eslint:recommended", "plugin:prettier/recommended"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "indent":[
            "warn", 4
        ],
        "no-unused-vars": 1,
        "no-use-before-define": 1,
        "no-redeclare": 1,
        "no-console":0,
    }
};