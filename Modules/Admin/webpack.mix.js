const dotenvExpand = require('dotenv-expand');
dotenvExpand(require('dotenv').config({path: '../../.env'/*, debug: true*/}));

const mix = require('laravel-mix');
require('laravel-mix-merge-manifest');

mix.webpackConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'Resources/assets/js'),
        }
    }
});

mix.react(__dirname + '/Resources/assets/js/app.js', 'js/admin.js')
    .sass(__dirname + '/Resources/assets/sass/app.scss', 'css/admin.css')
    .setResourceRoot('../../public')
    .setPublicPath('../../public')
    .mergeManifest();

if (mix.inProduction()) {
    mix.version();
}
