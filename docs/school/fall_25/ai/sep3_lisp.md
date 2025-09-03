# September 3 (Lisp)
> [!INFO]
> Lisp is worth learning for the profound enlightenment experience you will have when you finally get it; that experience will make you a better programmer for the rest of your days, even if you never actually use lisp again


# Why?
- widely uses in AI
- can modify lisp code during execution

# What is Lisp?
- a `LISt Processor`
- developed by John McCarthy
- many dialects including `Scheme` and `Common Lisp`
- first functional programming language

# The Lisp Listener
- Lisp is an interpretted language
- the interpretter evaluates what you type into it
- it is compilable, but rarely done

# Which Listener?
- a `Common Lisp Listener`
- `GNU Clisp` is a good one and will be used for grading

# S-Expressions
- all programs are a combination of `symbolic expressions`
- no max length and have a nested structure
- lisp programs and data are *homogeneous* (the same thing)
- anything surrounded by parens

# Types of S-Expressions
## Atoms
- single entities represented as a sequence of characters
- a "variable"

## Lists
- recursively constructed from atoms and are enclosed in parenthesis

```lisp
(atom (atom atom))
```

### Empty List
- represented as either `()` or `nil`
- both an atom and a list

# Atoms
- single entities represented as a sequence of characters
```lisp
4               # output (4)
3.14159         # output (3.14159)
c               # error (no value associated)
AI-is-fun       # error (no value associated)
t               # output (T)
nil             # output (NIL)
```

# Supress evaluation
```lisp
'c
'AI-is-fun
```

# Lists
```lisp
(a b c d e)                               # undefined function. this means 'a' is not a function
'(a b c d e)                              # output (A B C D E)
(+ 4 2 6)                                 # output 12
(4 + 2)                                   # undefined function. this means '4' is not a function
(This (contains (many levels) of lists))  # undefined function. this means 'This' is not a function
()                                        # output NIL
```

# List Evaluation
```lisp
'(a b c d e)        # output: (a b c d e)
'(+ 4 2 6)          # output: (+ 4 2 6)
'()                 # output: () or nil
```

# Binding Values
To assign a value to an atom, use the functions `set`, `setq`, or `setf`
- set evaluates both the atom and the value you are assigning
- setq only evaluates the value your assigning

```lisp
(set 'x 'y)        # output: Y    - sets 'x' to 'y', and returns the last thing evaluated (y)
x                  # output: Y
y                  # error: y wasnt set to a value (no binding)
(set x 'hello)     # output: HELLO
x                  # output: Y    (this didnt work because we didnt quote the x when setting it)
y                  # output: HELLO
```

```lisp
# setq automatically adds the qutote
(setq x 'y)        # equivalent to (set 'x 'y)
x                  # output: Y
(setq y 'hello)    # output: HELLO
x                  # output: Y
y                  # output: HELLO
```

```
(setq x '(+ 4  1 3))
x
(eval x)           # evaluate the s-expression given (unquoted)
(setq y 'x)        # set y to be data x
(eval y)           # evaluate y (which is essentially evaluating data x) => (+ 4 1 3)
(eval (eval y))    # evaluate the evaluation of y (which is 8)
```

# Primitive Functions
These are built into the Lisp language

## Math
- `+`, `-`, `*`, `/`
- `exp`, `expt`, `log`, `sqrt`
- `sin`, `cos`, `tan`
- `max`, `min`


```lisp
(* (+ 3 1 2) (/ 6 2) 2)     # output 36 | multiply the 3 atoms given to it
(max 4 1 (min 7 3))         # output 4
```

## List Selectors
`car` returns first item of the list
`cdr` returns the tail of the list

```lisp
(car '(4 2 1))        # output 4
(cdr '(a 4 1 3))      # output (4 1 3)
(cdr '(a (4 1) 3))    # output ((4 1) 3)
(car (cdr '(a b c d)) # output b
```

multiple car/cdr can be combined
regex: `c(a|d)+r`

caddr - car of the cdr of the cdr
cadar - car of the cdr of the car

```lisp
(caddr '(a b c d))    # output C
```

`cons`

```lisp
(cons 'a '(b c d))    => (a b c d)
(cons 'a nil)         => (a)
(cons 1 (cons 2 nil)) => (1 2)
```

## Dotted Pairs

```lisp
(cons 1 2)             => (1.2)
```
