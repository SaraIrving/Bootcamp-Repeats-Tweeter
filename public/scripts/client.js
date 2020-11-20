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
// const data = [
//     {
//       "user": {
//         "name": "Newton",
//         "avatars": "https://i.imgur.com/73hZDYK.png"
//         ,
//         "handle": "@SirIsaac"
//       },
//       "content": {
//         "text": "If I have seen further it is by standing on the shoulders of giants"
//       },
//       "created_at": 1461116232227
//     },
//     {
//       "user": {
//         "name": "Descartes",
//         "avatars": "https://i.imgur.com/nlhLi3I.png",
//         "handle": "@rd" },
//       "content": {
//         "text": "Je pense , donc je suis"
//       },
//       "created_at": 1461113959088
//     }
//   ];

  //this function formats timestamp into a fuzzy date
  const formatDate = function(timestamp) {
    const dateCreated = moment(timestamp).fromNow();

    return dateCreated;
  };

  // this function returns the html structure of the individual tweets
  const createTweetElement = function(tweetObject) {

    console.log("createTweet runs, tweetObject = ", tweetObject)
  
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
                      <p>${formatDate(tweetObject.created_at)}</p>
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


  // this function renders all the posted tweets in the tweet-container section tag
  const renderTweets = function(tweetArray) {
    console.log("render tweets runs tweetArray = ", tweetArray)
    //loop through array and pull out each tweet object
    for (let tweetObj of tweetArray) {
      // create the html for that tweet
      console.log("in RENDER TWEETS, tweetOBJ = ", tweetObj)
      const $tweet = createTweetElement(tweetObj);

      // append it to the tweet-container 
      $(".tweet-container").prepend($tweet);
    };
  };

  //renderTweets(data);

  // AJAX POST request to add new tweet 
  $(".tweet-form").submit(function(event) {
    event.preventDefault();

    //validation of form submission
    $(".empty-alert").slideUp(1000);
    $(".over-alert").slideUp(1000);

    if($("#tweet-text").val().length <= 0) {
      $(".empty-alert").slideDown(250);
    }

    if($("#tweet-text").val().length > 140) {
      $(".over-alert").slideDown(250);
    }


    console.log("form has been submitted!");
    
    $.ajax({url: "/tweets", 
          type: "POST",
          data: $(this).serialize()})
      .then((response) => {
        console.log("success!");
        loadTweets();
        $("#tweet-text").val("");
        $(".counter").val(140);
        
      });
  });

  // AJAX GET request to get all tweets 
  const loadTweets = function() {
    console.log("load tweets runs")
    $.ajax({
            url: "/tweets",
            type: "GET", 
            dataType: "json"})
      .then((res) => {
        console.log('res = ', res)
        $(".tweet-container").empty();
        renderTweets(res);
      })
         
  }
  loadTweets();

 });
