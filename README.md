## pKoru Data Visualization App 

You can check out the working model here --> [Website](https://praveen-k26.github.io/React-Visualization-Chart/)

This assessment was bespoke handcrafted for pkoru.

Read more about this assessment [here](https://react.eogresources.com)

### Installation
1. Clone the project.
2. `cd` into the project.
3. Install the `nodemodules` using `yarn install`.
4. `yarn start`

### Features
This is a simple data visualization chart.
You will allowed to metrics readings of the following.
# 1.Tubing Pressure
# 2.Casing Pressure
# 3.Oil Temperature
# 4.Water Temperature
# 5.Inj Valve Open

All the data is fetched from https://react.eogresources.com

Everytime you make a selection. that will dispach an action, which will trigger a `query` to get the latest readings of the particular selection.
I used Redux Sagas for making global state changes. Used Graphql to make queries based on the selection.
Also used github pages to deploy my app.


### Screenshot
![pkoru Data Visualization](https://user-images.githubusercontent.com/33136806/109527257-af3f0200-7a70-11eb-833e-d227738b85ed.png)


### Libraries Used
1.React
2.Redux
3.Graphql
4.gh-Pages
5.Material UI


### Folder Stucture
Now let's breakdown our `src` folder.
-src
 -api Folder
  -Components Folder
   -Chart
   -chartContainer
   -metricSelection
  -Reducer
   -heartBeat
   -measurementData
   -metricSelector
   -weather
  -Sagas
   -ApiErrors
   -index.js
  -Store
   -index.js
  -actions  

## Final Verdict:
I throughly enjoyed working on this app but unfotunately in a rush to complete this assesment I forget the fact that I should be committing my changes to the repo.
I realized when I reviewing the final product. I tried to differentiate my commits trying to explain what they are. I apologize for my mistake.
 
