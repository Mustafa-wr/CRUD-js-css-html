
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
if (localStorage != null){
	data_products = JSON.parse(localStorage.products);
} else{
	data_products = [];
}

submit.onclick = function() {
	let new_product = {
		title:title.value,
		price:price.value,
		taxes:taxes.value,
		ads:ads.value,
		discount:discount.value,
		total:total.innerHTML,
		count:count.value,
		caegory:category.value,
	}
	data_products.push(new_product);
	localStorage.setItem('products', JSON.stringify(data_products));
}