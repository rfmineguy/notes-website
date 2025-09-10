# Sep 10
## Remememeber
- PEAS description (see [Sep8 Agents](sep8_agents))

## Detailing the environment
1. Fully vs Partially observable
  - see [Sep8 Agents](sep8_agents#observability)
  - requires an agent function to map percepts to actions
2. Deterministic vs Stochastic
  - an environment is `deterministic` if the next state of the environment is only determined by the current state, and the choice of action (pure decision)
  - `strategic` environments depend only upon other agents
3. Episodic vs Sequential
  - an environment is episodic if the choice of action depends only on the current step and not what came before (only the latest percept)
  - an environment is seqential if the choice of action depends on the previous steps
4. Static vs semi-dynamic vs dynamic
  - an environment is static if the choice of the environment doesn't change while the agent function is begin determined
  - an environment is semi dynamic if it has only a performance score
  - an environment is dynamic if the environment is changing as you make decisions
5. Discrete vs continuous
  - an environment is discrete if the state of the environment can be characterized in a countable number of ways
  - an environment is continuous if the environment has an uncountable number of states
6. Single vs multi-agent
  - an environment is single agent if only one agent is involved with a task
  - an environment is multi agent if it is competitive or cooperative

## Observability
|                | Crossword     | Chess w/ clock | Single assembly line robot | Automated taxi |
| --             | --            | --             | --                         | --             |
| Observable     | Fully         | Fully          | Fully                      | Partially      |
| Deterministic? | Deterministic | Strategic      | Stochastic                 | Stochastic     |
| Episodic?      | Sequential    | Sequential     | Episodic                   | Sequential     |
| Static?        | Static        | Semi-Dynamic   | Dynamic                    | Dynamic        |
| Discrete?      | Discrete      | Continuous     | Continuous                 | Continuous     |
| Single?        | Single        | Competitive    | Single                     | Competitive    |

- `crossword`  we know everything about it (blank spaces, filled spaces)
- `chess w clock` we can see the board, and the clock
- `assembly line` we can see the robots, the arms, the conveyor
- `auto taxi` we can see the car details, but not really the outside environment


## Toy Problem
In AI, a toy problem is a deliberately oversimplified case of a challenging problem used to investigate or test algorithms for real problems
- can also be used decisively

### Grid-Space World
The environment is composed of discrete "cells" which may or may not contain an object

> ![NOTE] 
> in a rectangular room it may be seen as an m x n matrix
```
+---------------------+
|                     |
|                     |
|                     |
|                     |
|       ...           |
|       .x.           |
|       ...           |
+---------------------+
```
#### wall following robot
Assumptions:
- the room is rectangular
- there are no obstacles
- the robot can start anywhere in the room

#### PEAS
- Performance: successfully follows the wall
- Environment: rectangular room containing no obstacles with robot starting anywhere
- Actuators: has to move left,right,up,down
- Sensors: sensors for 8 spaces surrounding the robot where 0 indicates empty and 1 indicates a wall
  - Note: dots in the above graphic denotes the sensor positions

#### Detail the environment
- Observability 
- Fully observable
- Episodic
- Discrete
- Single Agent
- Static

`This is the simplest environment we can have`


#### Sensor Layout
```
     x0  
  +-----+
x3| 012 |
x3| 7x3 | x1
  | 654 | x1
  +-----+
    x2
```

A `feature` is an abstraction of sensor information
```
x0 = s1 || s2
x1 = s3 || s4
x2 = s5 || s6
x3 = s7 || s0
```

#### Agent Function
```
x3 ^ ~x0  -> move up          (x3 and not x0)
x0 ^ ~x1  -> move right       (x0 and not x1)
x1 ^ ~x2  -> move down        (x1 and not x2)
x2 ^ ~x3  -> move left        (x2 and not x3)
default   -> move up
