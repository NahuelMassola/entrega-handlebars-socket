/* realtime
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">


<h2>Add products </h2>
<form id='add-prod' class='add-prod'>
    <div>
        <label for="prod-title">Name
            <input type="text" name='title'>
        </label>
    </div>
    <div>
        <label for="prod-desc">Description
            <input type="text" name='description'>
        </label>
    </div>
    <div>
        <label for="prod-price">Price
            <input type="number" name='price'>
        </label>
    </div>
    <div>
        <label for="prod-code">Code
            <input type="text" name='code'>
        </label>
    </div>
    <div>
        <label for="prod-stock">Stock
            <input type="number" name='stock'>
        </label>
    </div>
    <button id='btn-form'>Add</button>
</form>
<main class="container mt-5">
    <div id="rowProducts" class="row d-flex d-flex justify-content-between">
    
    </div>
</main>

<script src="/socket.io/socket.io.js"></script>
<script src="/js/index.js"></script>


*/