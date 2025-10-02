# Sep 23
## Midterm Exam
- October 4th-12th
- ~3 hour length
- Any time, but its a continuous exam.

## CSS
### Flexbox
- a layout module that allows to create flexible and responsive layout
- provides a one dimensional layout model for arranging items in a row/column
- consists of a parent container and children, which are called flex items

![flexbox](/flexbox.png)
- `justify-content` is specificly for horizontal
- `align-content` vs `align-items`
    - align all together vs individually



### Grid
- two dimensional
- flex is content-first, grid is layout-first
- flex can be using within grid

![grid](/grid.png)

```html
<!DOCTYPE html>
    <head>
        <style>
        .container {
            display: grid;
            width: 500px;
            margin: auto;
            grid-template-columns: 20% 80%;
            grid-template-rows: 150px 400px 50px;
            grid-gap: 0px;
            grid-template-areas:
            "hd hd"
            "mb ct"
            "ft ft"
            justify-content: space-between;
            border: 2px solid yellow;
        }
        .flexbox {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
            border: 1px solid red;
        }
        #header {
            grid-area: hd;
        }
        #sidebar {
            grid-area: mb;
        }
        #content {
            grid-area: ct;
        }
        #footer {
            grid-area: ft;
        }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="flexbox" id="header">Header</div>
            <div class="flexbox" id="sidebar">Sidebar</div>
            <div class="flexbox" id="content">Content</div>
            <div class="flexbox" id="footer">Footer</div>
        </div>
    </body>
</html>
```


### Media (responsive layout design)
- media query can be used to completely change layout depending on the screen size

```html
<html>
    <head>
    </head>
    <body>
    </body>
</html>
```
