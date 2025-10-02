# Sep 15
## Lisp
### Load from file
```lisp
(load "filename")
```

### Run Directly
1. Create lsp file
```lisp
;; main.lsp
(setq x '(a b c d))
(print x)
```

2. Run clisp
```bash
clisp main.lsp
```

## Predicates
- functions that return true or false (nil)
- lisp has many primitive predicates
    - atom
    - listp
    - numberp
    - symbolp

### Atom
- a predicate that determines if an argument is an atom
```lisp
(atom 'a)                  -> T   (True)
(atom a)                   -> Nil (Err)
(atom 4.2)                 -> T   (True)
(atom "This is a string")  -> T   (True)
(atom '(a b c))            -> Nil (Err)
(atom nil)                 -> T   (True)
```

### Listp
- a predicate that determines if an argument is a list
```listp
(listp '(1 2 3))          -> T   (True)
(listp 'a)                -> Nil (Err)
(listp a)                 -> Error
(listp '(car '(a b)))     -> T   (True)
(listp (car '(a b)))      -> Nil (Err)
(listp (car '((a) b)))    -> T   (True)
(listp nil)               -> T   (True)
```

### Numberp
- a predicate that determines if an argument is a number
```lisp
(numberp a)               -> Error
(numberp 4)               -> True
(numberp 4.2)             -> True
(numberp 0)               -> True
(numberp 1/3)             -> True      (1/3 represents a ratio, avoids roundoff error)
(numberp nil)             -> False
```

### Symbolp
- a predicate that determines if an argument has a unique name (binding)
- something that can be a variable name
```lisp
(symbolp 'a)              -> True
(symbolp a)               -> Error
(symbolp 4.4)             -> Nil
(symbolp nil)             -> True  (just is)
(symbolp '())             -> True  (just is)
(symbolp "hello")         -> Nil
```

### Equality Predicates
#### Setup
```lisp
(setq a '(1 2 3 4))
(setq b '(1 2 3 4))
(setq c b)
```

#### =
```lisp
(= 3 3.0)                  -> True
(= 3/1 6/2)                -> True
(= 3 6/2)                  -> True
(= a b)                    -> Error
(= b c)                    -> Error
(= (car a) (car b))        -> True
```

#### equal
```lisp
(equal 3 3.0)               -> Nil
(equal 3/1 6/2)             -> True
(equal 3 6/2)               -> True
(equal a b)                 -> True
(equal b c)                 -> True
(equal (car a) (car b))     -> True
```

#### eq
- compares to see if the same object
```lisp
(eq 3 3.0)                  -> Nil
(eq 3/1 6/2)                -> True
(eq 3 6/2)                  -> True
(eq a b)                    -> Nil
(eq b c)                    -> True
(eq (car a) (car b))        -> True
```
- lisp doesn't compare memory address
    - if its a numeric value it will compare the simplified value
    - if its a bound symbol it will compare the address

#### eql
- true iff arguments are `eq` <u>or</u> numbers of the same type and value
```lisp
(eql 3 3.0)                 -> Nil
(eql 3/1 6/2)               -> True
(eql 3 6/2)                 -> True
(eql a b)                   -> Nil
(eql b c)                   -> True
(eql (car a) (car b))       -> True
```

#### null
- use null for checking for empty list and not for boolean
```lisp
(null '(a b c))             -> Nil
(null nil)                  -> True
(null '())                  -> True
(not (= 1/3 0.333))         -> True    (not nil)
(not (car '(a b c d)))      -> Nil
```

### Boolean Functions
#### Or/AND
```lisp
(and 1 2 3 4)               -> 4        (returns last evaluated value)
(and a b (setq x 4))        -> 4        (returns last evaluated value)
x                           -> 4
(and (cdr nil) (setq y '4)) -> nil      (short circuits (cdr nil), y isnt bound)
(or 0 1)                    -> 0        (0 is not nil -> true)
(or nil nil 2)              -> 2
(or (rest '(a)) (equal 3 4))-> nil
```

### Setf
- **Destructive** operation
- it changes the memory contents of a variable binding
- has the same functionality of setq

```lisp
(setq r '(a b c d))
(setf r '(a b c d))
(setf (car r) 'z)           r now is (Z B C D)
(setf (cdr r) '(y x w))     r now is (Z Y X W)
(setf s '(a b c d))         s is (A B C D)
```
