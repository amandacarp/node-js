//ADVANCED 
//Using request-promise, pull articles from https://reddit.com/r/popular.json. If the article is a .jpg, .gif, or a .png. Use request-promise to download the media.
const rp = require('request-promise')
const fs = require('fs');
const path = require('path');

const extPath = path.join(__dirname, 'downloads')
const redditPosts = []

rp('https://reddit.com/r/popular.json')
.then (res => redditPosts.push(res))
.then(() => {
    fs.writeFile(extPath, JSON.stringify(redditPosts), (err) => {
    if (err) console.log(err);
})
});
