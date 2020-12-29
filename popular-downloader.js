//ADVANCED 
//Using request-promise, pull articles from https://reddit.com/r/popular.json. If the article is a .jpg, .gif, or a .png. Use request-promise to download the media.
const rp = require('request-promise')
const fs = require('fs');
const path = require('path');

const downloadsDir = path.join(__dirname, 'downloads')
const redditURL = 'https://reddit.com/r/popular.json'

const fileTypes = ['gif', 'jpeg', 'jpg', 'gifv', 'png']

rp(redditURL)
    .then(redditResponse => {
        let newData = JSON.parse(redditResponse);
        let parsedData = newData.data.children;
        parsedData.forEach(post => {
            let fileExt = path.extname(post.data.url)
            if (fileTypes.includes(fileExt)) {
                let fileName = `${post.data.name}${fileExt}`
                let newFile = path.join(downloadsDir, fileName)
                rp(post.data.url).pipe(fs.createWriteStream(newFile))
            }
        });
    })