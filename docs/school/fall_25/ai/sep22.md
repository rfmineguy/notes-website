# List Depth
```lisp
(defun list-depth (a)
    (cond 
        ((null a) 0)
        ((atom a) 0)
        (t (max ((+ 1 list-depth (car a)))
                (list-depth (cdr a))))
    )
    
)

(list-depth '(1 2 (3)))         => 2
(list-depth '(1 (2 ((3) 4)) 5)) => 4
(list-depth '(1 (2) 3 4))       => 0
  ; (list-depth 1)              => 0
  ; (list-depth ((2) 3 4)       => 2
  ;   (list-depth (2))          => 1
  ;      (list-depth 2)         => 0
  ;   (list-depth (3 4))
  ;      
```

# Count Item
```lisp
(defun count-item (lst item)
    (cond
        ((equal lst item) 1)
        ((atom lst) 0)
        (t (+ (count-item (car lst) item)
              (count-item (cdr lst) item)))
    )
)
```

# Chapter 3
- AI as "simple" search
## Definition
A state of a search problem is an abstract representation of all relevant problem features
- may not be necessary to examine each state
- may not be possible to reach every state

The state space of a problem is the set of all possible state of the problem.
- you can view this as a directed graph where each state is a node and each edge is an action.

State space search is a process in which successive configuration (or states) are considered, with the intention
of finding a goal state with a desired property.

## Missionaries and Cannibals Problem
- a boat can only hold 2 people
- this boat is between two shores
    - Left shore:  3 missionaries, and 3 cannibals
- GOAL: we need to ferry everyone to the right bank without ever leaving more cannibals than missionaries on either shore

### State
- (3 3 True)
- 3 missionaries on the left, 3 cannibals on the left, boat (True is on left shore, Nil on right)


Start state: (3 3 True)
Goal state:  (0 0 Nil)

(3 3 True) ---Row 2M   --> (1 3 Nil) Illegal
(3 3 True) ---Row 2C   --> (3 1 Nil) Legal
                              ---2M
                              ---2C
                              ---1M 1C
                              ---1M
                              ---1C
(3 3 True) ---Row 1M 1C--> (2 2 Nil) Legal
    ...
(3 3 True) ---Row 1M   --> (2 3 Nil) Illegal
(3 3 True) ---Row 1C   --> (3 2 Nil) Legal
    ...
    
### State Space Search Environment
- static
- fully observable
- discrete
- deterministic or strategic doesnt matter here
- being single agent/episodic doesnt matter here
- 


## AI Search Problem
- Defined by 5 things
1. states
2. start state
3. successor function
4. goal test
5. path cost

### The start state
- where the agent begins
- specially designated
- root of the state space tree

### The action
- how the agent moves between states

### Successor function
- applies each possible action to the current state of search
- generates the set of legal, reachable states
- may also generate states which have already been 
