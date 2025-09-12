# Sep 11
## Tags
- Hyperlink
- Image


## Hyperlink (anchor)
```html
<a href="url"></a>
<a href="#some-id"></a>
```

Note:<br>
`a` is the **tag**<br>
`href` is the **attribute**<br>

## Image
```html
<img src="path"></img>
<img src="url"></img>
```
## Attributes
### Universal
`id`, `class`, `style`
- these attributes can be used with any tag

### Tag Specific
#### a
`href`, `target`
  - target controls whether the link opens in a new tab or not
#### img
`img` - src, width, height<br>
  - has no closing tag


## Div
### Purpose
- Block level container for grouping elements
- Commonly used with CSS to apply styles/arrange page sections

### Key Points
- Flexible wrapper for headings, paragraphs, etc.
- Can hold classes/ids just like other tags

### Example
```html
<div class="container">
  <h2>title</h2>
  <p>some other content</p>
</div>
```

## Form

### Example
```html
<form action="" method="">
    <input type="text" placeholder="username"><br>
    <input type="text" placeholder="password"><br>
    <input type="submit" value="Submit"><br>
</form>
```

```html
<form action="" method="">
    <input type="checkbox"><label>Label 1</label><br>
    <input type="checkbox"><label>Label 2</label><br>
    <input type="checkbox"><label>Label 3</label><br>
    <input type="submit" value="Submit"><br>            <!-- This is a fancy button tag -->
</form>
```

```html
<form action="" method="">
    <label for="course">Choose a course</label><br>     <!-- This labels the form -->
    <select>                                            <!-- This creates a spinner -->
        <option value="course1">CS101</option>
        <option value="course2">CS201</option>
        <option value="course3">CS301</option>
        <option value="course4">CS401</option>
    </select>
    <input type="submit" value="Submit"><br>            <!-- This creates a submit button -->
</form>
```
- input *type* can be many values ([See MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types))
- the `value` attribute of the option can make retrieving the options simpler in the case of a form
