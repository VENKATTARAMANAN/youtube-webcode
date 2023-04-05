const useract = document.querySelector('.user');


var sub2=fetch("https://youtube.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=UC1exNUUAIMvRPxZFH_yKKPw&maxResults=25&key=AIzaSyDwQ6_BZKvgoG_Uzn1u07WD3UBzjZqmGyc ")
sub2.then((use1)=>use1.json() )
.then((use2)=>Subscribe(use2))
.catch((error)=>console.log(error));

const Subscribe =(use1) =>{
    for(i=0;i<=50;i++){   
useract.innerHTML +=`
        <div class="video" >
            <img src="${use1.items[i].snippet.thumbnails.high.url}" class="thumbnail" alt="">
            <div class="content">
                <img src="${use1.items[i].snippet.thumbnails.default.url}" class="channel-icon" alt="">
                <div class="info">
                    <h4 class="title">${use1.items[i].snippet.title}</h4>
                    <p class="channel-name">${use1.items[i].snippet.channelTitle}</p>
                </div>
            </div>
        </div>
        `;

}
}

// var sub1=fetch("https://youtube.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=UC1exNUUAIMvRPxZFH_yKKPw&maxResults=25&key=AIzaSyDwQ6_BZKvgoG_Uzn1u07WD3UBzjZqmGyc")
// sub1.then((use2)=>use2.json() )
// .then((use3)=>console.log(use3))
const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
})