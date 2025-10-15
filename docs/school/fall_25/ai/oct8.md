# Oct 8
## With-open-file
```lisp
(with-open-file (myInputStream "data.dat")
  (read myInputStream)
)
```

```lisp
(with-open-file (myInputStream "data.dat" :direction output)
  (print myInputStream)
)
```

```lisp
(with-open-file (myInputStream "data.dat" :direction io)
  (print myInputStream)
)
```

```lisp
(with-open-file (myInputStream "data.dat" :if-does-not-exist :create)
  <body>
)
```

```
(read in-file)
(if (eq in-file 'eof) <body>)
```

## Member
checks whether a lisp expression is a member of a list
```lisp
(member 'c '(a b c d)) => (c d)
(member 'e '(a b c d)) => nil
```

`:test` - if a test is not specified (eq) is used
`:test-not` - if specified, member returns a list beginning with the first unmatched element of <list> 

```lisp
(member 'b '(a b c d))                                    => (b c d)
(member 'f '(a b c d))                                    => Nil
(member '(e f) '((a b) (c d) (e f) (g h)))                => error (tests with eq)
(member '(e f) '((a b) (c d) (e f) (g h)) :test #'equal)  => ((e f) (g h))
(member 'a '(a b c d) :test-not #'eq)                     => (b c d)
(member 'f '((a b) (c d) (e f) (g h)) :key #'cadr)        => ((e f) (g h)) (tests with eq)
(member 'f '((a b) (c d) (e f) (g h)) :key #'cadr :test #'equal) => ((e f) (g h))
```

## Apply
- takes its first argument  and uses it as a function on the list comprising its second arg

```lisp
(apply '+ '(1 2 3))
(apply 'min '(3 4 5 1))
```

## Funcall
```lisp
(funcall '+ 1 2 3)
(funcall 'min 3 4 5 1)
```

## Mapcar
```lisp
(mapcar 'atom '(dog (cat horse) fish))      => (T Nil T)
(mapcar 'log '(3 10 10))                    => (1.0986123 2.3025851 2.3025851)
(mapcar 'cdr '((a b c) (d e f) (g h i)))    => ((B C) (E F) (H I))
```

## Backquotes
- allow evaluation of items that are preceded by commas. any number of commas may appear

```lisp
`(2 ,(+ 3 4))                 => (2, 7)
`(4 ,(+ 1 2) '(3 ,(+ 1 2)) 5) => (4 3 '(3 3) 5)
```

## Defmacro
```lisp
(defmacro 2plus (x) (+ x 2))
(2plus 3)
(setf a (2plus 3))
```

## Sort
```lisp
# optimized sort
(sort <list> <test> :key <key>)

(sort '(3 4 1 2 5 4) '<)                           => (1 2 3 4 5 6)
(sort '(3 4 1 2 5 4) '>)                           => (6 5 4 3 2 1)
(sort '((5 2) (4 3) (2 4) (6 1)) '<)               => error, cant apply < to list
(sort '((5 2) (4 3) (2 4) (6 1)) '< :key #'car)    => ((2 4) (4 3) (5 2) (6 1))
(stable-sort '((5 2) (4 3) (2 4) (6 1)) '< :key #'cdr)    => ((2 4) (4 3) (5 2) (6 1))
```
