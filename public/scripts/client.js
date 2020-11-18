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
 }

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

    const $tweet = createTweetElement(tweetData)
    console.log($tweet);

    $(".tweet-container").append($tweet)

 });
