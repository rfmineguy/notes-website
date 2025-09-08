# Sep 8 Agents
## Definitions
`Environment` - Where the agent is/What problem is it solving?
`Agent` - rational machine or program
`Percept` - Agent input at a given moment or step
`Action` - Agent output at a given moment or step
`Percept Sequence` - Complete history of everything the agent perceives (`percept*` regex, 0 or more percepts)
`Agent Function` - agent's behavior
`Performance Measure` - the criteria which determines how successful an agent is

## Model


## Percept Sequence
- think of a slide puzzle
- if we want to make progress in solving it we have to know what moves we've done to know where to go next

## Agent Function
`f: percept* -> action`
- map an agent's percept sequence to an action

## Agent Table
- the tabulation of the agent function
- for most agents, the table is very large (or even infinitely large)

## Agent Program
- the implementation of the [agent function](#agent-function)

## Rationality
### Rational Agent
- does the <u>right thing</u>
- every entry in the agent table is filled out correctly (theoretically)

### What is the right thing?
- the action that has the highest change of making the agent successful in its goal
- this is a complicated question to answer
- may not always be the right thing, but we want an action that has the highest chance


### Rationality != Omniscience (know everything)
> [!NOTE]
> Rational agents dont know actual outcome of its actions<br>
> Omniscient agents do

### Rationality != Perfection
> [!NOTE]
> Rational agents can only maximize expected performance <br>
> Perfection agents would maximize actual outcome (impossible)

### Performance Measure
#### Examples
- how much money does a blackjack agent win?
- how short of a tour does the agent find in the traveling salesman problem?

#### Traveling Salesman
- Goal: try to find the shortest cost hamiltonian circuit in an undirected weighted graph


# Definition of a rational agnet
for each posssible percept sequence, a rational agent should select an action that is expected<br>
to maximimize its performance measure, given the evidence provided by the percept sequence and<br>
whatever builtin knowledge the agent has

The proposed definition requires the following:
- `information gathering (exploring)` to maximize future rewards
- `learning` to extend the prior knowledge that we have
- `autonomy` to conpensate for incorrect prior knowledge

# Task Environment
## PEAS Description
- `P`erformance Measure
- `E`nvironment
- `A`ctuators
- `S`ensors

## Example (Automated Taxi)
- `P`erformance Measure
  - safety
  - correct destination
  - timing
  - profit
  - legality
  - comfort
- `E`nvironment
  - streets
  - crosswalks
  - traffic
  - traffic lights
  - weather
- `A`ctuators
  - gas peddle
  - brakes
  - steering
  - signals
  - horn
- `S`ensors
  - camera
  - speedometer
  - engine sensors
  - lights
  - gps

|              | Crossword | Chess | Assembly line robot | Automated taxi |
| --           | --        | --    | --                  | --             |
| Observable   | Fully     | Fully | Fully               | Partially      |

* Fully observable - when sensors can detect all aspects relevant to choice of action
* Partially observable - when sensors get some information
