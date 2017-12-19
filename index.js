module.exports = {
    "globals": {},
    "rules": {
        "radix": "error",
        "no-restricted-syntax": [
            "error",
            {
                "selector": "CallExpression[callee.object.name='console'][callee.property.name=/^(log|warn|info|trace)$/]",
                "message": "Prefer more controllable 'Debug' module to console.*"
            }
        ],
        "no-unused-vars": "error"
    },
    "extends": "eslint-config-hapi",
}
