//PART 2
//Use request-promise to retreive articles from https://reddit.com/r/popular.json.
const rp = require('request-promise')
const fs = require('fs');
const path = require('path');

const redditPath = path.join(__dirname, 'popular-articles.json')
const redditPosts = []

//Extract from each article title, url, and author and append to array
rp('https://reddit.com/r/popular.json')
.then (res => redditPosts.push(res))
.then(() => {
    JSON.parse(redditPosts).data.children.forEach(item => {
        fs.appendFileSync(redditPath, item.data.title + '\n', (err) => {
            if (err) console.log(err);
        })
        fs.appendFileSync(redditPath, item.data.author + '\n', (err) => {
            if (err) console.log(err);
        })
        fs.appendFileSync(redditPath, item.data.url + '\n', (err) => {
            if (err) console.log(err);
        })
    });
    
})
