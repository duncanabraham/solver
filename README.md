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

```
░░░░░░░░░░░░░░
░     ░░     ░
░ ░ ░    ░░ ░░
░O░ ░░░░ ░   ░
░░░    ░ ░ ░ ░
░ ░ ░░ ░ ░ ░ ░
░ ░ ░  ░     ░
░ ░ ░░ ░░░ ░ ░
░ ░ ░      ░ ░
░   ░░░░░░ ░ ░
░ ░         X░
░░░░░░░░░░░░░░
[
  Cell { x: 0, y: 2, entryPoint: 0, value: 0, counter: 0 },
  Cell { x: 0, y: 1, entryPoint: 1, value: 4, counter: 1 },
  Cell { x: 0, y: 0, entryPoint: 1, value: 4, counter: 2 },
  Cell { x: 1, y: 0, entryPoint: 2, value: 8, counter: 3 },
  Cell { x: 2, y: 0, entryPoint: 2, value: 12, counter: 4 },
  Cell { x: 3, y: 0, entryPoint: 2, value: 8, counter: 5 },
  Cell { x: 4, y: 0, entryPoint: 2, value: 8, counter: 6 },
  Cell { x: 4, y: 1, entryPoint: 4, value: 1, counter: 7 },
  Cell { x: 5, y: 1, entryPoint: 2, value: 8, counter: 8 },
  Cell { x: 6, y: 1, entryPoint: 2, value: 8, counter: 9 },
  Cell { x: 7, y: 1, entryPoint: 2, value: 12, counter: 10 },
  Cell { x: 7, y: 0, entryPoint: 1, value: 4, counter: 11 },
  Cell { x: 8, y: 0, entryPoint: 2, value: 8, counter: 12 },
  Cell { x: 9, y: 0, entryPoint: 2, value: 8, counter: 13 },
  Cell { x: 10, y: 0, entryPoint: 2, value: 8, counter: 14 },
  Cell { x: 10, y: 1, entryPoint: 4, value: 1, counter: 17 },
  Cell { x: 10, y: 2, entryPoint: 4, value: 9, counter: 18 },
  Cell { x: 11, y: 2, entryPoint: 2, value: 8, counter: 19 },
  Cell { x: 11, y: 3, entryPoint: 4, value: 1, counter: 20 },
  Cell { x: 11, y: 4, entryPoint: 4, value: 1, counter: 21 },
  Cell { x: 11, y: 5, entryPoint: 4, value: 9, counter: 22 },
  Cell { x: 11, y: 6, entryPoint: 4, value: 1, counter: 23 },
  Cell { x: 11, y: 7, entryPoint: 4, value: 1, counter: 24 },
  Cell { x: 11, y: 8, entryPoint: 4, value: 1, counter: 25 },
  Cell { x: 11, y: 9, entryPoint: 4, value: 9, counter: 26 }
]
```
