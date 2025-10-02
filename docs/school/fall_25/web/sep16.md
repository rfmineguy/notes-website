# Sep 16
## CSS Fundamentals
- selector, property, value
- id, class
- linking css and html
- specificity of the attributes
- CSS flexbox
- CSS grid
- CSS media

## Syntax
```css
/* 
 - This css targets "selector" p (in this case p selects a tag), 
   sets the "value" red to the "property" color 
 - The styles supplied get applied to DOM elements that match the
   selector pattern
*/
p {
  color: red;
  color: #ffaabb;   /* alternative color scheme */
}
```

## ID and Class
- ids are used to label a unique element so it can be used by javascript and/or css
- ids should be strictly unique (only one element with a particular id)
- classes are used strictly to apply a particular set of css styling rules
```html
<head>
  <style>
    /* selects all p tags */
    p {
      color: red;
      font-family: "Courier New";
    }
    /* selects elements with the 'large' id */
    #large {
      font-size: 30px;
    }
    /* selects elements with the 'small' class in the class-list */
    .small {
      font-size: 20px;
    }
  </style>
</head>
<body>
  <p id="large">A paragraph with large font size.</p>
  <p class="small">A paragraph with small font size.</p>
</body>
```

## Linking
- we need to tell the html file that we want to link a stylesheet
```css
.some_class {
    font-size: 1rem;
}
```
```html
<html>
  <head>
    <link rel="stylesheet" href="path/to/css_file">
  </head>
  <body>
    <p class="some_class">This is the paragraph content</p>
    ...
  </body>
</html>
```

## Specificity
```
<--- Highest --->
Style
Id
Class
Tag
<--- Lowest  --->
```

### Example
```css
#para {
    color: green;
    font-size: 30px;
}
.para {
    color: red;
    font-size: 20px;
}
```
```html
<p id="para"></p>       <!--- green 30px -->
<p class="para"></p>    <!--- red 20px -->
<p style="color: red" id="para" class="para"></p> <!--- red 30px (30px is from #para) -->
```
