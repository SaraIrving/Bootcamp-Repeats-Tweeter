/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 $(document).ready( function() {

  const tweetData =    {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
  };

  // Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

  const createTweetElement = function(tweetObject) {
  
    const $tweet = `
                    <article class="tweet-article">
                    <header>
                      <div class="avatar-name-wrapper">
                        <img src=${tweetObject.user.avatars} alt="*PIC*">
                        <p>${tweetObject.user.name}</p>
                      </div>
                      <p class="handle">${tweetObject.user.handle}</p>
                    </header>
                    <div class="tweet-body">
                      <p>${tweetObject.content.text}</p>
                    </div>
                    <footer>
                      <p>${tweetObject.created_at}</p>
                      <div class="icons">
                        <i class="fa fa-flag" aria-hidden="true"></i>
                        <i class="fa fa-retweet" aria-hidden="true"></i>
                        <i class="fa fa-heart" aria-hidden="true"></i>
                      </div>
                    </footer>
                  </article> 
                  `
    return $tweet
  };


  const renderTweets = function(tweetArray) {

    //loop through array and pull out each tweet object
    for (let tweetObj of tweetArray) {
      // create the html for that tweet
      const $tweet = createTweetElement(tweetObj);

      // append it to the tweet-container 
      $(".tweet-container").append($tweet);
    };
  };

  renderTweets(data);



    // const $tweet = createTweetElement(tweetData)
    // console.log($tweet);

    // $(".tweet-container").append($tweet)



 });
