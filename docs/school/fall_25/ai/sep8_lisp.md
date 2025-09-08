# Sept 8 - Lisp (Part 1)
## List Selectors

`car` - first item of a list
`cdr` - tail of a list

```lisp
(car `(4 2 1)) => 4
(cdr `(4 2 1)) => (2 1)
(cdr '(a (4 1) 3)) => ((4 1) 3)
(cdr (cdr '(a b c d)) => (c d)
(cadr '(a b c d)) ~= (car (cdr '(a b c d))
(caddr '(a b c d)) ~= (car (cdr (cdr '(a b c d))))

(cons 'a nil) => (a)
```


## List
```lisp
(list 'a 'b) => (a b)
(list 1 2 3 4) => (1 2 3 4)
(list '(1) '(2 3) 4) => ((1) (2 3) 4)
(list '(a) '(b) '(c)) => ((a) (b) (c))
```

## Append
```lisp
(append '(a) '(b) '(c))  => (a b c)
(append '((1)) '(2 3 4)) => ((1) 2 3 4)
(append '(a) '(b))       => (a b)
# Note: if an atom is the last argument, it becomes a dotted pair
```

## Nth Cdr
```lisp
(nthcdr 0 '(a (b c) d)) => (a (b c) d)
(nthcdr 1 '(a (b c) d)) => ((b c) d)
(nthcdr 3 '(a (b c) d)) => nil
```

## Nth
car of the nth cdr
```lisp
(nth 0 '(a (b c) d)) => a
(nth 1 '(a (b c) d)) => (car ((b c) d)) => (b c)
(nth 2 '(a (b c) d)) => (car (d)) => d
(nth 3 '(a (b c) d)) => nil
```
