const sharp = require('sharp');

sharp('./img/2.webp')
    .resize({width: 200})
    .toFile('2-small.webp')
    .then(() => console.log('done...'));

    