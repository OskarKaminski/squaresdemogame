var angularTemplatePreprocessor = require('wallaby-ng-html2js-preprocessor');

module.exports = function (wallaby) {
    return {
        files: [
            "bower_components/angular/angular.js",
            "bower_components/jquery/dist/jquery.min.js",
            "bower_components/angular-mocks/angular-mocks.js",
            {pattern: "node_modules/sinon/pkg/*.js", instrument: false},
            "src/**/module.ts",
            "src/app.ts",
            "src/**/*.ts",
            "src/**/*.html"
        ],
        tests: [
            "tests/**/*.ts"
        ],
        preprocessors: {
            'src/**/*.html': function (file) {
                return angularTemplatePreprocessor.transform(file, {
                    stripPrefix: 'src/',
                    moduleName: 'app'
                });
            }
        }
    }
}
