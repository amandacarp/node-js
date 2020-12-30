//PART 2
//Use request-promise to retreive articles from https://reddit.com/r/popular.json.
const rp = require('request-promise')
const fs = require('fs');
const path = require('path');

const redditPath = path.join(__dirname, 'popular-articles.json')
const redditPosts = []
const parsedPosts = []

//Extract from each article title, url, and author and append to array
rp('https://reddit.com/r/popular.json')
.then (res => redditPosts.push(res))
.then(() => {
    JSON.parse(redditPosts).data.children.forEach(item => {
        const cleanedUpPost = {
            title: item.data.title,
            author: item.data.author,
            url: item.data.url
        }
        parsedPosts.push(cleanedUpPost);
    });
    fs.appendFileSync(redditPath, JSON.stringify(parsedPosts), (err) => {
        if (err) console.log(err);
})
});
