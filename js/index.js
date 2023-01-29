const sharp = require('sharp');

sharp('./img/atlanta-web-design-logo.webp')
    .resize({height: 100})
    .toFile('atlanta-web-design-logo-small.webp')
    .then(() => console.log('done...'));

    