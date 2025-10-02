# Sep 17
## Length
```lisp
(length '(1 2 3))            => 3
(length (setq a '(1 2 3)))   => (1 2 3)
(length a)                   => 3
(length '(list a a))         => 3 (supressed evaluation, length of (list a a))
(length (list a a))          => 2
(length nil)                 => 0
```

## Reverse
```lisp
(reverse '(cdr a))           => (a cdr)
(reverse (cdr a))            => (3 2)
(reverse 'a)                 => error
(reverse '(1 (2 3) 4))       => (4 (2 3) 1)
(reverse nil)                => nil
```

## Butlast
- returns copy of list with last n conses ommitted
```lisp
(setf x '(1 2 3 4 5 6))      => (1 2 3 4 5 6)
(butlast x)                  => (1 2 3 4 5)
(butlast x 3)                => (1 2 3)
(butlast x (+ 2 2))          => (1 2)
(butlast x 999)              => nil
(butlast nil)                => nil
(butlast x -3)               => error
```

## Nbutlast
- destructive version of butlast
```lisp
(setf x '(1 2 3 4 5 6))
(nbutlast x)            => (1 2 3 4 5)
x                       => (1 2 3 4 5)
(nbutlast x 3)          => (1 2)
x                       => (1 2)
(nbutlast x 999)        => nil
(nbutlast x 2)          => nil
```

## Defun
```lisp
(defun name param-list body)
```

```lisp
(defun square (x) 
    (* x x))
    
(square 2)              => 4
(square 9)              => 81
(setf x 3)              => 3
(square 453)            => 294849
x                       => 3
```

```lisp
(defun myplus (x)
    (+ x y)
)
(setq y 2)
(myplus 4)              => 6
(setq x 3)
(myplus 4)              => 6
x                       => 3
y                       => 2
```

```lisp
(defun fourth-power (x)
    (square (square x))
(defun powers-of (x)
    (setq y (square x))         -- side effect
    (fourth-power x)
)
(setf y 2)
(powers-of 3)
y
```

## Conditionals
```lisp
(defun absdiff (x y)
    (if (> x y)
        (- x y)
        (- y x)))

(absdiff 4 2)       => 2
(absdiff 2 4)       => 2
```

```lisp
(cond 
    (<testa> <formla > <form2a > ... <resulta >)
    (<testb> < formlb> < form2b> ... <resultb>)
    ...
    (<testk> <formlk> <form2k> ... <resultk>))
```

```lisp
(defun absdiff (x y)
    (cond ((> x y) (- x y))
          (t (- y x))
    )
)
(defun whatever (x)
    (cond ((listp x) (car x))
          ((numberp x) (+ x 1))
          (t x)
    )
)
```

## Recursion
```lisp
(defun power (base exp)
    (cond 
        ((eq 0 exp) 1)
        ((eq 1 exp) base)
        (t (* base (power base (- exp 1))))
    )
)
```

```lisp
(defun fact (n)
    (cond
        ((eq 1 n) 1
        (t (* n (fact (- n 1))))
     )
 )

- uses the runtime stack to keep track of recursive calls
