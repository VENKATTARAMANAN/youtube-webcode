const subscriberList = document.querySelector('.subscrib');


var sub=fetch(" https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&channelId=UC1exNUUAIMvRPxZFH_yKKPw&maxResults=50&key=AIzaSyDwQ6_BZKvgoG_Uzn1u07WD3UBzjZqmGyc")
sub.then((use)=>use.json() )
.then((use1)=>Subscribe(use1))
.catch((error)=>console.log(error));

const Subscribe =(use1) =>{
    console.log(use1);
    for(i=0;i<=50;i++){   
        subscriberList.innerHTML +=`
        <div class="video" >
            <img src="${use1.items[i].snippet.thumbnails.high.url}" class="thumbnail" alt="">
            <div class="content">
                <img src="${use1.items[i].snippet.thumbnails.default.url}" class="channel-icon" alt="">
                <div class="info">
                    <h4 class="title">${use1.items[i].snippet.title}</h4>
                </div>
            </div>
        </div>
        `;
}
}

const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
})
