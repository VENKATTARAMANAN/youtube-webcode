// <--------------Video Code-------------------->

const videoCard = document.querySelector('.video1');
const heading = document.querySelector('.container');

var retrieve=fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC1exNUUAIMvRPxZFH_yKKPw&key=AIzaSyDwQ6_BZKvgoG_Uzn1u07WD3UBzjZqmGyc");
retrieve.then((user)=>user.json())
.then((user1)=>makeHeading(user1))
.catch((error)=>console.log(error));




const makeHeading = (user1) => {
heading.innerHTML = ` <div class="left "><img src="${user1.items[0].snippet.thumbnails.high.url}" alt=""></div>
<div class="center"><h2>${user1.items[0].snippet.title}</h2>
<span>${user1.items[0].snippet.customUrl}</span>  <span>${user1.items[0].statistics.subscriberCount} ${`Subscribers`}</span>  <span>${user1.items[0].statistics.videoCount} ${`Video`}</span>
<div>More about this channel ></div></div>
<div class="right1">customized channel</div>
<div class="right2">Manage Videos</div>
`  
}


// search bar

const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
})

fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=PLoU1f0q2cnQhTCfueO0PramJZcNZpVh2U&&key=AIzaSyDwQ6_BZKvgoG_Uzn1u07WD3UBzjZqmGyc`)
.then(sum => sum.json())
.then(list => makeVideo(list));


const makeVideo= (list) => {
        for(i=0;i<=50;i++){
    videoCard.innerHTML += `
    <div class="video" >
        <img src="${list.items[i].snippet.thumbnails.high.url}" class="thumbnail" alt="">
        <div class="content">
            <img src="${list.items[i].snippet.thumbnails.high.url}" class="channel-icon" alt="">
            <div class="info">
                <h4 class="title">${list.items[i].snippet.title}</h4>
                <p class="channel-name">${list.items[i].snippet.channelTitle}</p>
            </div>
        </div>
    </div>
    `;
    }
}