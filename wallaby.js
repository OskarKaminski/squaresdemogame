module.exports = function (wallaby) {
    return {
        files: [
            "bower_components/angular-mocks/angular-mocks.js",
            {pattern: "node_modules/sinon/pkg/*.js", instrument: false},
            "src/**/module.ts",
            "src/app.ts",
            "src/**/*.ts"
        ],
        tests: [
            "tests/**/*.ts"
        ]
    }
}
