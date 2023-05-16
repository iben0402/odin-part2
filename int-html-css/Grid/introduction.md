# Example of grid layout

## html
~~~
<div class="grid-container">
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div> 
</div>
~~~
## css
~~~
.grid-container {
  display: grid;
  grid-template-columns: 75px 75px 75px;
  grid-template-rows: 75px 75px;
  gap: 32px;
}

.card {
  background-color: peachpuff;
  border: 1px solid black;
}
~~~

3 columns and 2 rows

## grid-template-columns and grid-template-rows

~~~
.container {
  display: grid;
  grid-template-columns: 50px 50px;
  grid-template-rows: 50px 50px;
}
~~~
2 columns and 2 rows

we can replace this with:
~~~
.container {
  display: grid;
  grid-template: 50px 50px / 50px 50px; /* rows / columns */
}
~~~

If we add more items - grid will create an extra row. We can define size of them by:
~~~
grid-auto-rows: 50px;
~~~

## Gap
~~~
column-gap: 10px;
row-gap: 100px;
~~~

