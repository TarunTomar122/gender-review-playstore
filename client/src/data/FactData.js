// facts

import d1 from './mainData.json';
// console.log (d1);
// // pick reviews and put them in array
// const data_int_women_reviews = [];
// const data_int_men_reviews = [];
// for (const item in d1) {
//   // console.log(item);
//   // console.log(d1[item]["total_reviews"]);
//   // console.log(d1[item]["top_women_positive_reviews"]);
//   data_int_women_reviews.push (d1[item]['top_women_positive_reviews']);
//   data_int_men_reviews.push (d1[item]['top_men_positive_reviews']);
// }
// // generate a random integer x:
// let rand = Math.random () * 10;
// rand = Math.floor (rand);

// console.log ("breh",data_int_men_reviews);

console.log (d1);

const facts = [];

for(const item in d1){
    const positive_women = d1[item]['top_women_positive_reviews'];
    const negative_women = d1[item]['top_women_negative_reviews'];
    const positive_men = d1[item]['top_men_positive_reviews'];
    const negative_men = d1[item]['top_men_negative_reviews']

}

// export const Facts = [
//   {
//     id: 1,
//     name: 'Awesome drawing app it really gives you freedom to draw whatever you while staying completely free! If I had any complaint it would be that I would like a fill tool added, I find a tool like that extremely helpful. Otherwise great app',
//     tags: ['art&design', 'sexism'],
//     category: 'Art & Design',
//     imgSrc: 'https://codebucks.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1625552344293%2Fegwis0UIX.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75',
//     link: 'fact',
//   },
//   {
//     id: 2,
//     name: "I drone then I draw a big set in beat set I have done send then what areI don't know how to draw kids but now the kids are it it is so nice game so I can now make it in a paper also I like thiss",
//     tags: ['art&design', 'sexism'],
//     category: 'Art & Design',
//     imgSrc: 'https://codebucks.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1625552344293%2Fegwis0UIX.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75',
//     link: 'fact',
//   },

//   {
//     id: 3,
//     name: 'Had it 5 mins, Loving it!! Had this App, nearly a Year...and am still Super Happy with it. ',
//     tags: ['art&design', 'sexism'],
//     category: 'Art & Design',
//     imgSrc: 'https://codebucks.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1625552344293%2Fegwis0UIX.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75',
//     link: 'fact',
//   },
//   {
//     id: 4,
//     name: 'I had initially only rated the app and not written a review but it really deserves one. It has a nice, clean interface that makes reading various kinds of books and documents very easy ....',
//     tags: ['books', 'literature'],
//     category: 'Books',
//     imgSrc: 'https://codebucks.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1625552344293%2Fegwis0UIX.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75',
//     link: 'fact',
//   },
//   {
//     id: 5,
//     name: 'The convenience of having a Kindle is my favorite part of having it. Any book, magazine, etc. available at my fingertips any time. Kindle is also innovati....',
//     tags: ['books', 'literature'],
//     category: 'Books',
//     imgSrc: 'https://codebucks.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1625552344293%2Fegwis0UIX.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75',
//     link: 'fact',
//   },
//   {
//     id: 6,
//     name: "Amazing, it's completely free AND opens almost all formats! But: 1. I wish I could search in text without having to wait for the book to load itself....",
//     tags: ['books', 'literature'],
//     category: 'Books',
//     imgSrc: 'https://codebucks.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1625552344293%2Fegwis0UIX.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75',
//     link: 'fact',
//   },
//   {
//     id: 7,
//     name: "I have been using this app for a few months now and it is a great app. It's very easy to use and it's very easy to read. I love it!",
//     tags: ['books', 'literature'],
//     category: 'Books',
//     imgSrc: 'https://codebucks.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1625552344293%2Fegwis0UIX.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75',
//     link: 'fact',
//   },
//   {
//     id: 8,
//     name: 'Had a great and wonderful experience with duo. Not a single problem wi.....',
//     tags: ['communication', 'social'],
//     category: 'Communication',
//     imgSrc: 'https://codebucks.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1625552344293%2Fegwis0UIX.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75',
//     link: 'fact',
//   },
//   // more items
//   {
//     id: 9,
//     name: "Really useless app. There's no call history linked with a contact. If I wa",
//     tags: ['books', 'literature', 'negative comments'],
//     category: 'communication',
//     imgSrc: 'https://codebucks.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1625552344293%2Fegwis0UIX.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75',
//     link: 'fact',
//   },

//   {
//     id: 10,
//     name: "This app crashes or lags a lot. Whenever I use incognito tabs after opening two tabs it stuck there, can't close or open one or can't select other either. Also what kind of VPN is it that can'...",
//     tags: ['communication', 'social', 'negative comments'],
//     category: 'communication',
//     imgSrc: 'https://codebucks.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1625552344293%2Fegwis0UIX.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75',
//     link: 'fact',
//   },

//   {
//     id: 11,
//     name: 'I noticed, prior to the last update; while surfing the internet with this a...',
//     tags: ['communication', 'social', 'negative comments'],
//     category: 'communication',
//     imgSrc: 'https://codebucks.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1625552344293%2Fegwis0UIX.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75',
//     link: 'fact',
//   },

//   {
//     id: 12,
//     name: "I like this game and I also loved it's simplicity. Games are often expecte",
//     tags: ['games', 'positive comments'],
//     category: 'Games',
//     imgSrc: 'https://codebucks.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1625552344293%2Fegwis0UIX.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75',
//     link: 'fact',
//   },

//   {
//     id: 13,
//     name: "Really very nice and so relaxing game . Both Alto's Odyssey and Alto's....",
//     tags: ['games', 'positive comment'],
//     category: 'Games',
//     imgSrc: 'https://codebucks.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1625552344293%2Fegwis0UIX.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75',
//     link: 'fact',
//   },

//   {
//     id: 14,
//     name: 'Overall the game is good, but they force you to pay for it by ad at starting of a mission and when its done. I was able to finish most of.....',
//     tags: ['games'],
//     category: 'Games',
//     imgSrc: 'https://codebucks.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1625552344293%2Fegwis0UIX.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75',
//     link: 'fact',
//   },

//   {
//     id: 15,
//     name: 'This is just the best app ever!! Love singing songs and uploading it and bein',
//     tags: ['entertainment', 'positive comment'],
//     category: 'entertainment',
//     imgSrc: 'https://codebucks.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1625552344293%2Fegwis0UIX.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75',
//     link: 'fact',
//   },

//   {
//     id: 16,
//     name: "The ADS, man. That's really the only downside to this app. I understand...",
//     tags: ['education'],
//     category: 'education',
//     imgSrc: 'https://codebucks.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1625552344293%2Fegwis0UIX.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75',
//     link: 'fact',
//   },
// ];

// export const d1;