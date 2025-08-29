# Aug 28
## Topics
- HTML Tags

## HTML Tags
| Type           | Tags                          | Example                                  |
| ---            | ---                           | ---                                      |
| General syntax | `<tag>...</tag>`              | N/A                                      |
| Structural     | `<html>, <head>, <body>`      | Skeleton of the page                     |
| Formatting     | `<b>, <strong>`               | Bold                                     |
| ^^             | `<i>, <em>`                   | Italic                                   |
| ^^             | `<u>, <h1-h6>, <span>, <pre>` | Underline, header, inline, preformatted  |
| List           | `<li>, <ul>, <ol>`            | List Item, Unordered List, Ordererd List |

## HTML Doc Structure
```html
<!DOCTYPE html>                <!-- specify the filetype -->
<html>                         <!-- begin html document -->
  <head>                       <!-- begin heading information -->
    <meta charset="utf-8">     <!-- specify the encoding technique to be used (utf-8 is the default) -->
    <title>My webpage</title>  <!-- set the web browser tab name -->
  </head>                      <!-- end heading information -->
  <body>                       <!-- begin web page content -->
    <!-- content goes here -->
  </body>                      <!-- end web page content -->
</html>                        <!-- end html document -->
```

- the content within the `<head></head>` block *doesn't* get rendered by the browser
- the content within the `<body></body>` block *does* get rendered by the browser

## Formatting tags
- `<p>` -> Paragraph
- `<h1>...<h6>` -> Headers
- `<b>`, `<strong>` -> Bold
- `<i>`, `<em>` -> Italic
- `<u>` -> Underline
- `<pre>` -> Preformatted text; preserves styles as typed
- `<span>` -> Inline container; used to style specific part of text

### Example
#### Lists
```html
<!-- Unordered list -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<!-- Ordered list -->
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
</ol>
```


## Inline Styling Via Attributes
```html
<p style="color:red;">Some text</p>
<div style="background-color:gray; width:600px; height:700px;"><div>
```

The `style` attribute works with semicolon separated property/value pairs
| Word     | Definition                                                  |
| ---      | ---                                                         |
| property | what is the characteristic we want to change                |
| value    | what is the value we want to change that characteristic to? |

> [!WARN]
> While `style` works, it is *not* the recommended way of working with styling
> You used prefer the use of linked CSS



<HTMLRenderer code="<p>hi</p>"/>
## Full Example
```html
<DOCTYPE html>
<html lang="en" dir="ltr"> <!-- lang default = "en", dir default = "left to right" -->
  <head>
    <meta charset="utf-8">
    <title>My webpage</title>
  </head>
  <body style="background-color: gray">
    <h1 style="color:blue; text-align:center">CSU East Bay</h1>
    <h2 style="text-align:center">Website Development</h2>
    
    <p>We <span style="color: red">will</span> learn:</p>
    <ul>
      <li><b>HTML HyperText</b> Markup Language</li>
      <li><u>CSS</u></li>
      <li><i>JavaScript</i></li>
    </ul>
  </body>
</html>
```
