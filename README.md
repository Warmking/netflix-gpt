# Netflix-Gpt
- created react app using vite 
  - npm create vite@latest Netflix-Gpt -- --template react
- Configure Tailwind CSS in the project
- created Body , Header and browser
- Provided routing to the app
- created login page ( both sign in and sign up forms are created in the same page)
- validation is done for the form 
- FireBase set up is completed
- Hosted the web site on firebase
- after sign in or sign up , user details are stored on the redux store.
- Based on the login user we need to show the datails on browse page.
- Sign out feature in header
- Bug -1 profile update in body leads to error and it was changed to the login page in the api call   itself 
- Bug -2 
- Implementing the browse page
    - maincontainer
     - backgroungVideo
    -secondarycontainer 
      - n*n cards -- displays the movie title
-created maincontainer beautifully with tailwind css
-movieSlice created and used the TMDB Api for movies list
-implemented the autoplay feature and background video in maincontainer as same as netflix 
- 

# Features
- Login page
    - sign in
- watch page(after auth)
    - videoplay on back-ground 
    - title and discription 
    - video tabs * N

