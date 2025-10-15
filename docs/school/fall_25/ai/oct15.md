# Oct 15
## Informed Search
- uses a *heuristic* function f(x)
- `heuristic f(x)`: estimate of how far from a goal state any intermediate state 'x' is

### Heuristic
`h(x) = 0`

### Eight Puzzle Heuristic
1. Number of tiles out of place
2. Manhattan distance
  - the number of positions each tile is from the goal

#### Problem with number of tiles out of place
- it doesn't give any indication of how far away we are from the goal
- no indication of how many moves we might need

## Two Main Methods for Heuristic Search
1. Greedy **Best First Search**
2. A* Search

The only difference between these two methods is the format of the evaluation function

### Greedy Best First Searcb
- The `evaluation function f(x)` just applies the heuristic, and nothing more
  - f(x) = h(x)
  - we use the heuristic to prioritize the nodes in the frontier (open list)

#### Example
##### Start State
```
1 2 3
4   6
7 5 8
```

##### Options
```
1   3   |   1 2 3|   1 2 3|   1 2 3
4 2 6   |     4 6|   4 6  |   4 5 6
7 5 8   |   7 5 8|   7 5 8|   7   8
-------- --------------------------
h(x)=2  | h(x)=3 | h(x)=3 | h(x)=1
```

```
1 2 3   |   1 2 3|   1 2 3
4 5 6   |   4   6|   4 5 6
7 8     |   7 5 8|     7 8
-------- ------------------
h(x)=0  | h(x)=2 | h(x)=2
```

##### Manhattan
| Closed List | Open List (priority) |
| S           | D A B C              |
| D           | A B C                |

#### Analysis
- complete: no
- optimal:  no
- time:     O(b^n)
- space:    O(bm)

### A* Search
- the `evaluation function f(x) = g(x) + h(x)`
- `g(x) = total cost from start to node x`
- `h(x) = estimated total cost from x to a goal node`

#### Example
```
        S
       /|\
      N N N
      |
      X
     / \
    N   N
        |
        G
```
- cost of going from S to X is `g(x)`
- cost of going from X to G is `h(x)`
- `f(x) = g(x) + h(x)`

#### Admissibility & Consistency
- a heuristic is `admissible` if it **never** over estimates the cost to reach the goal
  - map directions
    - h(x) = straight line distance between you and the goal (will always be lower than the actual)
- a heuristic is `consistent` if for every node x and every successor node x' of x, h(x) <= c(x) + h(x') where c(x) is the real cost of reaching x' from x

```
        S
       / \
      X   N
     /|
    x'x'
      |
      G
```
- cost of S -> X is `g(x)`
- cost of X -> X' is `c(x)`
- `h(x) <= c(x) + h(x')`

##### Example
- Map directions straight line distance
  - taking a direct route in a straight line is more efficient than going in a less straight line
  - think triangle hypoteneous

```
S---O---O---O
|   |   |   |
|   |   |   |
X---O---O---O
|   |   |   |
|   |   |   |
O---O---O---O
|   |   |   |
|   |   |   |
O---O---O---G
```
- straight line time S->G 5 minute
- its impossible to go in a straight line to get from S to G

`f(x) = g(x) + h(x)`

##### Analysis
Complete? Yes, if h(x) is admissible
Optimal?  Yes, if h(x) is consistent
Time?     O(b^(d+1))
Space?    O(b^(d+1))

d is depth of longest path between nodes

## Pruning
- the process whereby a node is not expanded because its `f(x)` value is higher than other choices at a higher depth
- no point in traversing further if this path is already worse than other choices

## Local Search
- type of informed search (heuristic search) in which the path from the start to the goal doesn't matter
- good for determining whether a problem is solvable at all
- operates with a single state, x
- can move only to neighboring states of x
- does not store path between states

### Pros
1. Uses low amount of memory

### Types
- hill climbing (maximum)/gradient descent (minimum)
- local beam search
- simulated annealing

#### Hill Climbing
- `f(x) = <something>`
- we want to know what x gives us its maximum value
- this can be solved by plugging numbers into the derivative function and finding where the slopes are close to 0 within some eps
- there may be many local maximums, which means it can get stuck in a local maximum

#### Local Beam Search
- this solves the problem of getting stuck in local maximums
