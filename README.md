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

```
npm install # ensure npm version 3 as it is more chilled out about dependency conflicts
npm test 
```

#Notes
------

- I've taken a rather measures slow approach as I think it's important to show how I would deliver features and my normal habits of working on non throwaway projects.
- Using leaflet as the platform client seems to use it and there is a react integration I would like to explore. React may be overkill but if I get to the final features it will be alot easier and it can be quite difficult to cleanly retrofit in my experience.
- Using skeleton - I want to try it out!
- Copying css and image assets to public which may not be the best solution but it gets things up and running quickly. 
- I think there would be advantages in the react approach in the long run but there is a learning curve I didn't expect with some of these dependencies - particularly clusting. Taking longer than expected.
