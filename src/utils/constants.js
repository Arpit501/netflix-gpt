

export const LOGO="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR="https://occ-0-7721-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const USER_AVATAR1="https://occ-0-7721-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e";

export const API_OPTIONS= {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY,
    }
  };


export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500/";

export const BG_URL="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_small.jpg";


export const SUPPORTED_LANAGUAGES=[

  {identifier:"en",name:"English"},
  {identifier:"hindi",name:"Hindi"},
  {identifier:"spanish",name:"Spanish"}

]

 export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY;


 export const INITIALSTATE={
  adult: false,
  backdrop_path: "/kti9ufHhCKaOLjg2to4RKfrlkmh.jpg",
  id: 1263421,
  original_language:"ja",
  original_title: "範馬刃牙VSケンガンアシュラ",
  overview: "It's the ultimate showdown. The toughest fighters from \"Baki Hanma\" and \"Kengan Ashura\" clash in this unprecedented, hard-hitting martial arts crossover.",

poster_path:"/etbHJxil0wHvYOCmibzFLsMcl2C.jpg",
release_date: "2024-06-05",
title: "Baki Hanma VS Kengan Ashura"
 }


 export const GET_DIFFERENT_MOVIES=[
  "Act as a Movie Recommendation system and suggest some movies for the query : provide horror movies names . only give me name of 10 best,latest and most rated movie, with comma seperated like the example result given ahead. Example Result: Stree 2 , Kill , Sanam Teri Kasam , Ashiqui 2 , Golmaal.",

  "Act as a Movie Recommendation system and suggest some movies for the query : provide action movies name . only give me name of 10 best,latest and most rated movie, with comma seperated like the example result given ahead. Example Result: Stree 2 , Kill , Sanam Teri Kasam , Ashiqui 2 , Golmaal. ",

  "Act as a Movie Recommendation system and suggest some movies for the query : provide adeventure movies name . only give me name of 10 best,latest and most rated movie, with comma seperated like the example result given ahead. Example Result: Stree 2 , Kill , Sanam Teri Kasam , Ashiqui 2 , Golmaal.",

  "Act as a Movie Recommendation system and suggest some movies for the query : provide crime movies name . only give me name of 10 best,latest and most rated movie, with comma seperated like the example result given ahead. Example Result: Stree 2 , Kill , Sanam Teri Kasam , Ashiqui 2 , Golmaal. ",

  "Act as a Movie Recommendation system and suggest some movies for the query : provide thriller movies name . only give me name of 10 best,latest and most rated movie, with comma seperated like the example result given ahead. Example Result: Stree 2 , Kill , Sanam Teri Kasam , Ashiqui 2 , Golmaal. ",

  "Act as a Movie Recommendation system and suggest some movies for the query : provide mysterious movies name . only give me name of 10 best,latest and most rated movie, with comma seperated like the example result given ahead. Example Result: Stree 2 , Kill , Sanam Teri Kasam , Ashiqui 2 , Golmaal. ",

  "Act as a Movie Recommendation system and suggest some movies for the query : provide romance movies name . only give me name of 10 best,latest and most rated movie, with comma seperated like the example result given ahead. Example Result: Stree 2 , Kill , Sanam Teri Kasam , Ashiqui 2 , Golmaal. ",

  "Act as a Movie Recommendation system and suggest some movies for the query : provide emotional movies name . only give me name of 10 best,latest and most rated movie, with comma seperated like the example result given ahead. Example Result: Stree 2 , Kill , Sanam Teri Kasam , Ashiqui 2 , Golmaal.",

  "Act as a Movie Recommendation system and suggest some movies for the query : provide netflix movies name . only give me name of 10 best,latest and most rated movie, with comma seperated like the example result given ahead. Example Result: Stree 2 , Kill , Sanam Teri Kasam , Ashiqui 2 , Golmaal. ",

  "Act as a Movie Recommendation system and suggest some movies for the query : provide amazon prime video movies name . only give me name of 10 best,latest and most rated movie, with comma seperated like the example result given ahead. Example Result: Stree 2 , Kill , Sanam Teri Kasam , Ashiqui 2 , Golmaal. ",

  "Act as a Movie Recommendation system and suggest some movies for the query : provide war movies name . only give me name of 10 best,latest and most rated movie, with comma seperated like the example result given ahead. Example Result: Stree 2 , Kill , Sanam Teri Kasam , Ashiqui 2 , Golmaal. ",

  "Act as a Movie Recommendation system and suggest some movies for the query : provide south indian hindi dubbed movies name . only give me name of 10 best,latest and most rated movie, with comma seperated like the example result given ahead. Example Result: Stree 2 , Kill , Sanam Teri Kasam , Ashiqui 2 , Golmaal. ",

  "Act as a Movie Recommendation system and suggest some movies for the query : provide tollywood movies name . only give me name of 10 best,latest and most rated movie, with comma seperated like the example result given ahead. Example Result: Stree 2 , Kill , Sanam Teri Kasam , Ashiqui 2 , Golmaal. ",

  "Act as a Movie Recommendation system and suggest some movies for the query : provide bollywood movies name . only give me name of 10 best,latest and most rated movie, with comma seperated like the example result given ahead. Example Result: Stree 2 , Kill , Sanam Teri Kasam , Ashiqui 2 , Golmaal. ",

  "Act as a Movie Recommendation system and suggest some movies for the query : provide hollywood movies name . only give me name of 10 best,latest and most rated movie, with comma seperated like the example result given ahead. Example Result: Stree 2 , Kill , Sanam Teri Kasam , Ashiqui 2 , Golmaal. ",

  "Act as a Movie Recommendation system and suggest some movies for the query : provide punjabi movies name . only give me name of 10 best,latest and most rated movie, with comma seperated like the example result given ahead. Example Result: Stree 2 , Kill , Sanam Teri Kasam , Ashiqui 2 , Golmaal. ",

  "Act as a Movie Recommendation system and suggest some movies for the query : provide detective movies name . only give me name of 10 best,latest and most rated movie, with comma seperated like the example result given ahead. Example Result: Stree 2 , Kill , Sanam Teri Kasam , Ashiqui 2 , Golmaal. ",

  "Act as a Movie Recommendation system and suggest some movies for the query : provide  movies name of disney hotstar . only give me name of 10 best,latest and most rated movie, with comma seperated like the example result given ahead. Example Result: Stree 2 , Kill , Sanam Teri Kasam , Ashiqui 2 , Golmaal. ",

  "Act as a Movie Recommendation system and suggest some movies for the query : provide  movies  name of sonyliv. only give me name of 10 best,latest and most rated movie, with comma seperated like the example result given ahead. Example Result: Stree 2 , Kill , Sanam Teri Kasam , Ashiqui 2 , Golmaal. ",

  "Act as a Movie Recommendation system and suggest some movies for the query : provide  movies  name of different genres. only give me name of 10 best,latest and most rated movie, with comma seperated like the example result given ahead. Example Result: Stree 2 , Kill , Sanam Teri Kasam , Ashiqui 2 , Golmaal. ",

  "act as a movie suggestion system and provide 10 moviesnames.everytime the provided names should be comma seperated. ex dune,stree2,rrr,pushpa.these 10 movies should be latest and trending.the result provided should include newest and latest movies.always be up to date.keep in mind that you have to provide top rated.everytime sends different 10 movie names for ex sometime send bollywood movie name, sometimes send hollywood movies name, sometime send netflix movies, sometime send amazon prime movies, sometime send hotstar movies, sometimes sends south indian movies, sometimes sends south indian hindi dubbed movies, sometimes sends tollywood movies name."
]
