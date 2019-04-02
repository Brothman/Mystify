# Mystify
A fullstack clone of Spotify built in React, Redux, Node, and Express along with MongoDB.

#  A Monday DPS Is Over Day! Did we miss it?

<img src="./Mystify-Demo.gif" />

<details>
  <summary> Click me for awesomeness. </summary>
  
  # Awesomeness coming soon!
</details>

<h1 align="center"> Centered Header With Align </h1>

## Access
Coming soon!

## Key Features
Coming soon!

#### Limit Network Requests

###### Web Audio API

Code Snippet HERE

#### Express Routing to interact with ```Mongoose``` and the ```mongodb``` database.

###### Setup of Express Routers

```JWT``` is a library on NPM that provides a clean, declarative way to use JSON Web Tokens. When a user is logged in, ...

###### Individual Routers mount specialized Controllers

```JWT``` is a library on NPM that provides a clean, declarative way to use JSON Web Tokens. When a user is logged in, ... 

###### Individual Controllers talk to the ```mongodb``` database through the use of the ```Mongoose``` Object-wrapper

```JWT``` is a library on NPM that provides a clean, declarative way to use JSON Web Tokens. When a user is logged in, ...

###### Setup of Mongoose Model Schema to interact with the ```mongodb``` database

```JWT``` is a library on NPM that provides a clean, declarative way to use JSON Web Tokens. When a user is logged in, ...




#### JSON Web Token Authentication

###### JWT



#### Play Queue State Throughout The Entire Site

###### playQueue && newPlayQueue

When a ```Track``` component is created, it adds itself to the ```newPlayQueue```. The ```newPlayQueue``` is an array that contains the song order for all ```tracks``` **on the current page***. The ```newPlayQueue``` is used exclusively to know the track order of songs on **pages that the user has navigated to, but has not yet clicked on a track to play.** 

Once a user clicks on a track to play, the ```newPlayQueue``` is merged into the ```playQueue```, the active playQueue from which all currently playing songs know their order. 

``` 
if (clicked && this.props.newPlayQueue.length > 0) {
            //...
            this.props.replacePlayQueue(newPlayQueue);
     }
 ```
 
If the ```playQueue``` has elements in it, they are overwritten by the ```newPlayQueue```. 

```
const playQueueReducer = (state = [], action) => {
    Object.freeze(state);
    
    switch (action.type) {
       //...
        case (REPLACE_PLAY_QUEUE):
            return action.newPlayQueue;
        default:
            return state;
    };
};
```

The ```newPlayQueue``` is turned back into an empty array, to be filled upon a visit to a new page. As well, whenever an ```Artist```, ```Album```, or ```HomeTrack``` page leave the DOM, they clean up their ```tracks``` and ```newPlayQueue``` slice of state.

``` 
   componentWillUnmount(){
        this.props.clearTracks();
        this.props.clearNewPlayQueue();
    }
```

These components clean up after themselves to ensure a fresh state ([]) for incoming ```tracks```. In turn, these ```tracks``` create a ```newPlayQueue```. 

```
 class Track extends React.Component {
   componentDidMount() {
          //...
          const song = { title, albumImgURL, artist, song: new Audio(trackURL) }
          this.props.addSongToNewPlayQueue(song);

          this.setState({ song });
   }
 }
```
Holding these two arrays ```playQueue``` and ```newPlayQueue``` in state solved the annoying and difficult problem of maintaining a ```playQueue``` as a ```User``` navigates the pages as well as retaining the interactivity of the ```tracks``` on the current page to create a ```newPlayQueue``` if clicked.



#### Limit Unnecessary Network Requests for Songs

###### Web Audio API, Set Preload to None

```
 const song = new Audio();
    
 song.preload = 'none';
 song.src = trackURL;
```

This ensures the song does not issue a network request until it is played. This saves the user from issuing too many conflicting network requests, as well as saves me money because I do not have my S3 Amazon AWS Bucket sending unnecessary data to each user. 

## To Do
Figure out why the uncaught in DOM Promise exception occurs.
What we know:
After switching pages, a track sometimes loses its trackURL, which causes no Audio element to be created. But where does that trackURL go? That is the million dollar question. 

1. Update ReadMe
2. Erase the NewPlayQueue in ReadMe as we only have one PlayQueue
3. Abstract out similar logic into Higher Order Components -> put into PlayQueue
4. Show the abstracted DOM Editing logic.
5. Explain the logic behind how Songs are tracked in Redux state
6. Fix the volume bar to continue to work on new songs. 

## Updates Coming Later Today!
