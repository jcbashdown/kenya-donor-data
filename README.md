Coding exercise involving markers for development projects in kenya on open street map + clustering and choropleth shaded according to number of projects in county.

#How to run
-----------

- As the bundle.js is included it is possible to simply go to `<path>/<to>/kenya-donor-data/index.html`


- If you wish to make changes:

```
npm install # ensure npm version 3 as it is more chilled out about dependency conflicts
npm start
```

- After this, go to http://localhost:3000/

#Tests
-----------

- Not testing in the browser - all tests are console tests with mocha and chai

```
npm install # ensure npm version 3 as it is more chilled out about dependency conflicts
npm test 
```

#Notes
------

- I took the initial boilerplate from a previous app to get up and running more quickly and give me some flexibility regarding the approach I take (e.g. using es6 with webpack, using npm).
- I've taken a rather measured slow approach as I think it's important to show how I would deliver features and my normal habits of working on non throwaway projects.
- I'm Using leaflet as the platform client seems to use it and there is a react integration - react-leaflet - I would like to explore. React may be overkill but if I get to the final features it will be alot easier and it can be quite difficult to cleanly retrofit in my experience.
- Using skeleton - I want to try it out!
- Copying css and image assets to public which may not be the best solution but it gets things up and running quickly. 
- I think there would be advantages in the react approach in the long run but there is a learning curve I didn't expect with some of these dependencies - particularly clustering. Taking longer than expected.
- I would have liked to do some filtering and graphing with c3 of dc.js to make redux more appropriate but haven't quite got there.
- Noticed there is an issue with clicking to open popups and them pushing up the map pane and then closing themselves!
