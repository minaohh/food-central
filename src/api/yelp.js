import axios from 'axios';

const BASE_URL = 'https://api.yelp.com/v3/businesses';

//we can get some code reuse
const yelp = axios.create({
  baseURL: BASE_URL, //root URL sa API

  //To authorize, pass in a request header
  headers: {
    Authorization:
      'Bearer 04uUW6QhPLDJMyhwJbcU3PNvWKBk2pCvZuE02TwwFXK8Yfn2JGX4HW5kXPWoD5UK4bVosuhBDMeHA9kIvVIOX6Fpg0_x3L3_UHpVSuGVb1knS3SAcV6I5IlgCDhjX3Yx',
  },
});

// yelp.get('/search'); //won't have to write out the entire URL

const yelpFetch = (path) => {
  return fetch(`${BASE_URL}${path}`, {
    headers: {
      Authorization:
        'Bearer 04uUW6QhPLDJMyhwJbcU3PNvWKBk2pCvZuE02TwwFXK8Yfn2JGX4HW5kXPWoD5UK4bVosuhBDMeHA9kIvVIOX6Fpg0_x3L3_UHpVSuGVb1knS3SAcV6I5IlgCDhjX3Yx',
    },
  });
};

export { yelp, yelpFetch };
