# Oct 1

## Strings
- Represented as a list of characters
- In lisp, they are an atom (not a list)

## Print
```lisp
(print S-expression)
```


```lisp
(print 'this)            => THIS
(print "that")           => \n"that"
(setf dummy '(a b c))    => (A B C)
(print dummy)            => \n(A B C)
(print (+ 1 2))          => "\n3\n3"
(+ (print 1) (print 2))  => "\n1\n2\n3"
```

## Prin1
```lisp
(prin1 'this)            => this\nthis\n
(prin1 "that")           => that\nthat\n
(prin1 (+ 1 2))          => 3\n3\n
(+ (prin1 1) (prin1 2))  => 1 2\n3
```

## Princ
```lisp
(princ 'this)
(princ "that")
(princ (+ 1 2))
(+ (princ 1) (princ 2)) => 12\n3\n
```

## Terpri
```lisp
(terpri)              => "\n"
```
- all this does is give us a new line

```lisp
(defun myprint (x)
  (terpri)
  (terpri)
  (prin1 x)
)

(myprint 1)         => "\n\n11"
```

## Read
```lisp
(read &optional-input-stream)
```

```lisp
(setf x (read))

(defun my-fun ()
  (princ "Input a number")
  (setf inp (read))
  (terpri)
  (dotimes (myvar inp) (print myvar))
)
```

```lisp
(defun area-of-circle ()
  (princ "Enter radius")
  (setq radius (read))
  (setq area (* 3.1416 radius radius))
  (princ "Area:")
  (print area)
)
```

## Let
```lisp
(let ((expr-1) (expr-2) .... (expr-n)) <body>)
```

```lisp
(let ((local1 4) (local2 (+ 4 3)))
  (- local1 local2)
)

local1    => Error, not bound

(let ((local1 4) (local2 (+ local1 3)))
  (- local1 local2)
) => Error, we can't use local1 until the body
```

- let binds in parallel, so its defining locals potentially out of order

## Let*
```lisp
(let* ((expr-1) (expr-2) ... (expr-n)) <body>)
```

```lisp
(let* ((local1 4) (local2 (+ local1 2)))
  (princ local1)
)

(let* ((var1) (var2 (cons 'a var1)))
  (list var2 var2)
)
```
- var1 in the second example is bound to nil when no value is specified

## Iteration
*Note: It is best to use recursion over direct iteration)*
### Dotimes
```lisp
(dotimes (counter limit result) <body>)
```

```lisp
(dotimes (a 10) (print a))
```

```lisp
(let ((value nil))
  (dotimes (number 7 value)
           (setf value (cons number value))))
           
(defun power-i (x y)
  (let ((result 1))
      (dotimes (count y result)
        (setf result (* x result)))))
        \
        
(defun power-j (x y)
  (case ((equal x 1) (x))
        (t (* (power-j (- x 1) y) x))))
```


### Dolist
```lisp
(dolist (next-list target-list result) <body>)
```

```lisp
(dolist (next-list '(a b (c d) e f))
  (print next-list)
)
```

```lisp
(defun num-sublists (this-list)
  (let ((result 0))
       (dolist (next this-list result)
          (if (listp next)
              (setf result (+ result 1))))))
```

### Do
```lisp
# test - when to stop
(do ((var1 initial1 update1) ... (varn initialn updaten)) (test <body1) <body2>)
```

```lisp
(do ((i 0 (+ i 1)))
    ((= i 9) i)
    (print i))

(defun my-exp (m n)
    (do ((result 1 (* result m))
        (exp n (- exp 1)))
        ((= exp 0) result)))

(my-exp 5 6)

(defun my-exp2 (m n)
  (do ((result 1)
       (exp n))
      ((= exp 0) result)
      (setq result (* result m))
      (setq exp    (- exp 1))))
```
