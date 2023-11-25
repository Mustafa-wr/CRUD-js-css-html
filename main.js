
//-------------------------> CARDS


// let names = ['ali', 'ahmed', 'zoo', 'lu'];
// let ages = ['11', '10', '22', '13'];
// let container = document.createElement('div');


// document.body.appendChild(container);
// container.style.textAlign = 'center';

// function create_Element(names, ages)
// {
// 	let btn = document.createElement('button');
// 	let card = document.createElement('div');
// 	let img = document.createElement('img');
// 	let name = document.createElement('h1');
// 	let age = document.createElement('p');
	
// 	let head = document.createTextNode(names);
// 	age.appendChild(document.createTextNode(ages));
// 	name.appendChild(document.createTextNode(names));
	
// 	img.src = 'll.png'

// 	card.style.width = '200px';
// 	card.style.background = '#444';
// 	card.style.color = '#fff';
// 	card.style.padding = '20px';
// 	card.style.margin = '5px';
// 	card.style.display = 'inline-block';
	
// 	img.style.width = '100%';
	
// 	card.appendChild(name);
// 	card.appendChild(age);
// 	card.appendChild(img);
	
// 	container.appendChild(card);
// 	container.appendChild(btn);
	
// 	card.appendChild(btn);
// 	btn.appendChild(document.createTextNode('Click Me'));
	// btn.addEventListener('click', function(){
	// 	if(card.style.backgroundColor != "green")
	// 		card.style.backgroundColor = "green";
	// 	else
	// 		card.style.backgroundColor = "#444";
	// });

// }

// container.style.backgroundColor = 'black';
// // document.body.style.background = 'black';
// for(let i = 0; i < 4; i++){
// 	create_Element(names[i],ages[i]);
// }

//----------------->   calc

// let inp = document.createElement('input');
// inp.id = 'dollar';
// inp.placeholder = 'Enter the cost';
// inp.type = 'number';
// document.body.appendChild(inp);

// let out = document.createElement('input');
// out.id = 'aed';
// document.body.appendChild(out);
// out.placeholder = 'output';
// out.type = 'number';

// let btn = document.createElement('button');

// document.body.appendChild(btn);
// btn.appendChild(document.createTextNode('enter'));

// btn.onclick = function() {
// 	out.value = inp.value * 3.65;
// }



//->>>>>>>>>>>>>>>>>>>>>    counter

// let head = document.getElementById('count');
// head.style.fontSize = '100px';
// head.style.textAlign = 'center';

// let num = document.getElementById('the number');
// let number = 0;
// document.body.appendChild(num);
// num.style.textAlign = 'center';
// num.style.fontSize = '50px';

// document.body.insertBefore(num, container);

// let increase = document.getElementById('increase');
// let decrease = document.getElementById('decrease');
// let reset = document.getElementById('reset');

// increase.addEventListener('click', function(){ //Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
// 	number++;
// 	console.log(num);
// 	num.innerHTML = number;
// });

// decrease.addEventListener('click', function(){
// 	number--;
// 	num.innerHTML = number;
// });

// reset.addEventListener('click', function(){
// 	number = 0;
// 	num.innerHTML = number;
// });
// btns.addEventListener('click', function(){
// })




let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

let flag = 'create';
let tmp;   // for updating the product

function get_total(){
	if(price.value != ''){
		let result = +price.value + +taxes.value + +ads.value
		 - +discount.value;
		total.innerHTML = result;
		total.style.backgroundColor = 'black';
	}
	else{
		total.innerHTML = '';
		total.style.backgroundColor = 'red';
	}
}

// create product

let data_products;
if (localStorage.products != null){
	data_products = JSON.parse(localStorage.products);
} else{
	data_products = [];
}

submit.onclick = function() {
	let new_product = {
		title:title.value.toLowerCase(),
		price:price.value,
		taxes:taxes.value,
		ads:ads.value,
		discount:discount.value,
		total:total.innerHTML,
		count:count.value,
		category:category.value.toLowerCase(),
	}

	if (title.value != ''
	&& price.value != ''
	&& category.value != ''
	&& new_product.count < 100) {
		if(flag === 'create'){
			if(new_product.count > 1){
				for (let i = 0; i < new_product.count; i++){
					data_products.push(new_product);
				}
			} else {
				data_products.push(new_product);
			}
		} else {
			data_products[tmp] = new_product;
			flag = 'create';
			submit.innerHTML = 'Create';
			count.style.display = 'block';
		}
		clear_data();
	}
	
	
	localStorage.setItem('products', JSON.stringify(data_products));


	show_data();
}

// clearing

function clear_data(){
	title.value = '';
	taxes.value = '';
	ads.value = '';
	price.value = '';
	discount.value = '';
	total.innerHTML = '';
	count.value = '';
	category.value = '';
}



// showing the data
function show_data(){
	get_total();
	let table = '';
	for(let i = 0; i < data_products.length; i++){
		table += `
		<tr>
			<td>${i + 1}</td>
			<td>${data_products[i].title}</td>
			<td>${data_products[i].price}</td>
			<td>${data_products[i].taxes}</td>
			<td>${data_products[i].ads}</td>
			<td>${data_products[i].discount}</td>
			<td>${data_products[i].total}</td>
			<td>${data_products[i].category}</td>
			<td><button onclick="update_product(${i})" id="update">update</button></td>
			<td><button onclick="delete_data(${i})" id="delete">delete</button></td>
		</tr>
		`
	}
	document.getElementById('body').innerHTML = table;
	let delete_all = document.getElementById('delete_all');
	if(data_products.length > 0){
		delete_all.innerHTML = `
		<button onclick="delete_all_data()">delete all (${data_products.length})</button>
		`
	} else{
		delete_all.innerHTML = '';
	}
}

show_data();


function delete_data(i) {
	data_products.splice(i, 1);
	localStorage.products = JSON.stringify(data_products);
	show_data();
}

function update_product(i) {
	title.value      = data_products[i].title
	taxes.value      = data_products[i].taxes
	ads.value        = data_products[i].ads  
	price.value      = data_products[i].price
	discount.value   = data_products[i].discount
	get_total();
	count.style.display = 'none';
	category.value   = data_products[i].category;
	submit.innerHTML = 'update'
	flag = 'update';
	tmp = i;
	scroll({
		top:0,
		behavior:"smooth",
	})
}

function delete_all_data() {
	localStorage.clear();
	data_products.splice(0);
	show_data();
}

let search_mood = 'search_title';

function get_search_mood(id)
{
	let search = document.getElementById('search');
	if(id == 'search_title') {
		search_mood = "search_title";
		search.placeholder = 'search by title';
	} else if (id == 'search_category') {
		search_mood = 'search_category';
		search.placeholder = 'search by category';
	}
	search.focus();
	search.value = '';
	show_data();
}

function search_data(value) {
	let table = '';

	if(search_mood == 'search_title') {
		for(let i = 0; i < data_products.length; i++) {
			if (data_products[i].title.includes(value.toLowerCase())) {
				table += `
					<tr>
						<td>${i}</td>
						<td>${data_products[i].title}</td>
						<td>${data_products[i].price}</td>
						<td>${data_products[i].taxes}</td>
						<td>${data_products[i].ads}</td>
						<td>${data_products[i].discount}</td>
						<td>${data_products[i].total}</td>
						<td>${data_products[i].category}</td>
						<td><button onclick="update_product(${i})" id="update">update</button></td>
						<td><button onclick="delete_data(${i})" id="delete">delete</button></td>
					</tr>
				`
			}
		}
	} else {
		for(let i = 0; i < data_products.length; i++) {
			if (data_products[i].category.includes(value.toLowerCase())) {
				table += `
					<tr>
						<td>${i}</td>
						<td>${data_products[i].title}</td>
						<td>${data_products[i].price}</td>
						<td>${data_products[i].taxes}</td>
						<td>${data_products[i].ads}</td>
						<td>${data_products[i].discount}</td>
						<td>${data_products[i].total}</td>
						<td>${data_products[i].category}</td>
						<td><button onclick="update_product(${i})" id="update">update</button></td>
						<td><button onclick="delete_data(${i})" id="delete">delete</button></td>
					</tr>
				`
			}
		}
	}
	document.getElementById('body').innerHTML = table;
}