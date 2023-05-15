# Forms

## [Link to course page](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-form-basics)

## \<form> element
~~~
<form action="example.com/path" method="post">

</form>
~~~

* action - takes a URL value that tells the form where it should send its data to be processed.
* method - tells the browser which HTTP request method it should use
    - GET - when we want to retrieve something from a server
    - POST - is used when we want to change something on the server

## \<input> and \<label> elements

~~~
<form action="example.com/path" method="post">
  <label for="first_name">First Name:</label>
  <input type="text" id="first_name" placeholder="Bob..." name="first_name">
</form>
~~~

* Labels accept a **for** attribute, which associates it with a particular input. The input we want to associate with a label needs an **id** attribute with the same value as the label’s **for** attribute.
* **placeholder** - "default" value
* **name** - serves as a reference to the data inputted into a form control after submitting it. (variable name for the input)

**[Example: You can use form elements outside of form](https://codepen.io/TheOdinProjectExamples/pen/PoJjNYr)**

* **type** - we have various types of input fields
    * type="email"
    * type="password"
    * type="number"
    * type="date"
## Other Types
* Text Area
    ~~~
    <textarea rows="20" cols="60">Some initial content</textarea>
    ~~~
* selection
    ~~~
    <select name="Car">
        <option value="mercedes" selected>Mercedes</option>
        <option value="tesla">Tesla</option>
        <option value="volvo">Volvo</option>
        <option value="bmw">BMW</option>
        <option value="mini">Mini</option>
        <option value="ford">Ford</option>
    </select>
    ~~~
    with optgroup
    ~~~
    <select name="fashion">
    <optgroup label="Clothing">
        <option value="t_shirt">T-Shirts</option>
        <option value="sweater">Sweaters</option>
        <option value="coats">Coats</option>
    </optgroup>
    <optgroup label="Foot Wear">
        <option value="sneakers">Sneakers</option>
        <option value="boots">Boots</option>
        <option value="sandals">Sandals</option>
    </optgroup>
    </select>
    ~~~
* Radio button
    ~~~
    <h1>Ticket Type</h1>
    <div>
        <input type="radio" id="child" name="ticket_type" value="child">
        <label for="child">Child</label>
    </div>

    <div>
        <input type="radio" id="adult" name="ticket_type" value="adult" checked>
        <label for="adult">Adult</label>
    </div>

    <div>
        <input type="radio" id="senior" name="ticket_type" value="senior">
        <label for="senior">Senior</label>
    </div>
    ~~~
* Checkboxes
    ~~~
    <h1>Pizza Toppings</h1>

    <div>
        <input type="checkbox" id="sausage" name="topping" value="sausage">
        <label for="sausage">Sausage</label>
    </div>

    <div>
        <input type="checkbox" id="onions" name="topping" value="onions">
        <label for="onions">Onions</label>
    </div>

    <div>
        <input type="checkbox" id="pepperoni" name="topping" value="pepperoni">
        <label for="pepperoni">Pepperoni</label>
    </div>

    <div>
        <input type="checkbox" id="mushrooms" name="topping" value="mushrooms">
        <label for="mushrooms">Mushrooms</label>
    </div>
    ~~~
* Button
    ~~~
    <button type>Click Me</button>
    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
    <button type="button">Click to Toggle</button>
    ~~~

## Organizing form

### Fieldset
~~~
<fieldset>
  <label for="first_name">First Name</label>
  <input type="text" id="first_name" name="first_name">

  <label for="last_name">Last Name</label>
  <input type="text" id="last_name" name="last_name">
</fieldset>
~~~

### Legend
~~~
<fieldset>
    <legend>Contact Details</legend>
    <!-- Some elements -->
</fieldset>
<fieldset>
    <legend>Delivery Details</legend>
    <!-- Some elements -->
</fieldset>
~~~

**Used for grouping radio buttons**

### [Assignment](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-form-basics#assignment)
    