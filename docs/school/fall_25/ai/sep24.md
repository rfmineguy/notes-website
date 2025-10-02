# Sep 24
## State Space Search Problem Continued
AI search problem
1. states
2. initial state
3. successor function
4. goal test
5. path cost

`initial state (start state)` 
- where the search begins
- root of the state space search tree (eg (3 3 True))
- specially designated root node


## Action
- how the agent moves between states

## Successor Function
- applies each possible action to the current state
- generates all ***reachable*** states (not all states may be reachable or legal)
- will create states which have already been examined

> [!NOTE]  
> Highlights information that users should take into account, even when skimming.

## Path Cost
- calculated weight of the edges connecting two nodes in the state space
- for many simple problems, this is just the number of nodes in the path
- how many steps did we need to solve the problem


```
          A
        / | \
      B   C  D
     / \  |  |
    E   F G  H
```

ACG is the lowest path cost of getting from A to G

## Step Cost
- the path cost between two adjacent nodes when performing an action
- when the graph is weighted the step cost corresponds to the weight value

## Goal Test
- determines whether a given state is the goal or not
- a goal state is a state that satisfies the goal
- the goal test determines whether the current state
    1. meets some abstract property
    2. or is a member of an explicit state set

## The Eight Puzzle
states: the location of tiles numbered 1 through 8 and the blank tile in a 3x3 grid

```
+--+--+--+
| 5| 1| 6|
+--+--+--+
| 7| 2| 3|
+--+--+--+
| 4|  | 8|
+--+--+--+
```

`board`: (5 1 6 7 2 3 4 0 8)<br>
`initial-state`
- some abitrary state (scrambled state) in the state space
`successor-function`
- move tiles adjacent up,down,left,or right
`goal-test`
```
+--+--+--+
| 1| 2| 3|
+--+--+--+
| 4| 5| 6|
+--+--+--+
| 7| 8|  |
+--+--+--+
```
`path-cost`
- number of moves taken

### Example
```
+--+--+--+
| 1| 4| 3|
+--+--+--+
| 7|  | 6|
+--+--+--+
| 5| 8| 2|
+--+--+--+
```

`UP`
```
+--+--+--+
| 1|  | 3|
+--+--+--+
| 7| 4| 6|
+--+--+--+
| 5| 8| 2|
+--+--+--+
```

`Down`
```
+--+--+--+
| 1| 4| 3|
+--+--+--+
| 7| 8| 6|
+--+--+--+
| 5|  | 2|
+--+--+--+
```

`Left`
```
+--+--+--+
| 1| 4| 3|
+--+--+--+
|  | 7| 6|
+--+--+--+
| 5| 8| 2|
+--+--+--+
```

`Right`
```
+--+--+--+
| 1| 4| 3|
+--+--+--+
| 7| 6|  |
+--+--+--+
| 5| 8| 2|
+--+--+--+
```


## Eight Queens Problem
Challenge: Place 8 queens on a chess board, so that no queen could capture another queen

```
+--+--+--+--+--+--+--+--+
|  |  |  |  |  |  |  |  |
+--+--+--+--+--+--+--+--+
|  |  |  |  |  |  |Q |  |
+--+--+--+--+--+--+--+--+
|  | Q|  |  |  |  |  |  |
+--+--+--+--+--+--+--+--+
|  |  |  |  |  |Q |  |  |
+--+--+--+--+--+--+--+--+
|  |  | Q|  |  |  |  |  |
+--+--+--+--+--+--+--+--+
| Q|  |  |  |  |  |  |  |
+--+--+--+--+--+--+--+--+
|  |  |  | Q|  |  |  |  |
+--+--+--+--+--+--+--+--+
|  | Q|  |  |  |  |  |  |
+--+--+--+--+--+--+--+--+
|  |  |  |  | Q|  |  |  |
+--+--+--+--+--+--+--+--+
```

### States
Any arrangement of 0 to 8 queens on chess

`initial state` - empty board<br>
`successor function` - all possible chess boards obtained by adding a queen to an empty space<br>

```
                    empty board
                    /    |    \
            1  2  3  4  5  ... 62 63 64
                                    / | \
                               
```

`goal test` - a chess board with 8 queens with no queen that can capture another


## Routing Problem
`states` - location on the map, and current time
`initial state` - current location on map and time 0
`successor function` - location to every next intersection toward destination and the current total time to reach it 



```
                0
               /|\
              3 5 2
             /  |  \
          i1(3)i2(5)i3(2)
           /
          8
         /
       i4(11)
            
```

`goal test` - desired address, and shortest estimated travel time
`path cost` - total time it actually takes to each intersection


## Uninformed Search
- the algorithm has no additional information about the states beyond the problem definition
- algorithm operates "blindly"
- can only generate successor states and determine whether the goal is reached
- `NOTE: We will be asked to write an uninformed search in lisp`

### Algorithms
1. Breadth First Search (BFS)
2. Uniform Cost Search
3. Depth First Search (DFS)
4. Depth Limited Search
5. Iterative Deepening Search
6. Bidirectional Search

### Measuring Performance
1. Completeness
    - is the algorithm guaranteed to find a solution if one exists? 
2. Optimality
    - does the algorithm find the best solution? (smallest path cost)
3. Time Complexity
    - how long does it take to find a solution?
    - time is a more valuable resource
4. Space Complexity
    - how much memory do we need to perform the search?
    - space is a renewable resource

### Branching Factor
- branching factor ***b*** (of a tree) is the maximum number of successors any node can have
```
            A
           /|\
          B C D
           / \ \
          E   F G
```
b=3
```
            A
           / \
          B   C
         / \
        D   E
```
b=2


Note: For missionaries and cannibals, the branching factor is 5 (we can make 5 different actions)

### Depth
- the depth(d) of search, is the depth of the shallowest goal node
```
            .
           /|\
          . G .
         / \
        G   .
```
d=1 - the shallowest goal is 1 level deep

### Maximum Length
- the max length(m) is the maximum length of any path in the state space
```
            .
           /|\
          . G .
         / \   \
        G   .   .
               / \
              .   .
               \
                .
```
m=4
