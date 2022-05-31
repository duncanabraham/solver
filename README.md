# Solver

I had/have a need to solve a binary maze in a way that each step along the route is returned allowing a quadruped robot to follow
the path or at least move in the right direction.  In my use case the maze will change everytime a new object/obstruction is found
so I intend to use the solver to get me the next step, which will become the currentPos in the next call.

For a simple example of how it working, clone the repo, then:
```
npm i
node index.js
```

This should show a simple maze map followed by the solution to the maze.  It's not the most efficient (I know) but it does seem to give 
me a what I need for now.

The edges of the maze are implied by the dimensions, ie there must be a wall at maze.width as you can't go there.

<img width="611" alt="image" src="https://user-images.githubusercontent.com/5994927/171209166-2cce8d7d-a94d-4107-abd0-8ba1c08bd784.png">
