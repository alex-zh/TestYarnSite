var yarn_arr=[ {"name":"ALASKA","content":"100% ШЕРСТЬ","footage":"70М","weight":"50Г","description":"Рекомендованный размер спиц: 5мм. Плотность вязания: 10см х 10см = 17п х 22р. Ручная стирка, max 30°C.","price":"92 руб.","photo":"ALASKA.jpg"},
			{"name":"ALPACA UNI COLOUR","content":"100% АЛЬПАКА","footage":"167М","weight":"50Г","description":"Рекомендуемый размер спиц: 2,5 - 3,5мм. Плотность вязания: 10см х 10см = 23п х 30р. Ручная стирка, max 30°C.","price":"152 руб.","photo":"ALPACA.jpg"},
			{"name":"BELLE","content":"53% ХЛОПОК, 33% ВИСКОЗА","footage":"120М","weight":"50Г","description":"Рекомендуемый размер спиц: 4 мм. Плотность вязания: 10см х 10см = 21п х 28р. Машинная бережная стирка, max 30°C.","price":"163 руб.","photo":"BELLE.jpg"},
			{"name":"BIG MERINO","content":"100% ШЕРСТЬ","footage":"75М","weight":"50Г","description":"Рекомендуемый размер спиц: 5мм. Плотность вязания: 10см х 10см = 17п х 22р. Бережная машинная стирка, max 40°C.","price":"143 руб.","photo":"BIG_MERINO.jpg"},
			{"name":"COTTON LIGHT","content":"50% ХЛОПОК, 50% ПОЛИЭСТЕР","footage":"105М","weight":"50Г","description":"Рекомендуемый размер спиц: 4мм. Плотность вязания: 10см х 10см = 21п х 28р. Бережная машинная стирка, max 40°C.","price":"99 руб.","photo":"COTTON_LIGHT.jpg"},
			{"name":"ESKIMO DEGRADE","content":"100% ШЕРСТЬ","footage":"50М","weight":"50Г","description":"Рекомендуемый размер спиц: 9мм. Плотность вязания: 10см х 10см = 10п х 14р. Ручная стирка, max 30°C.","price":"199 руб.","photo":"ESKIMO.jpg"},
			{"name":"LIMA UNI COLOUR","content":"65% ШЕРСТЬ, 35% АЛЬПАКА","footage":"100М","weight":"50Г","description":"Рекомендуемый размер спиц: 4мм. Плотность вязания: 10см х 10см = 21п х 28р. Ручная стирка, max 30°C.","price":"163 руб.","photo":"LIMA.jpg"},
			{"name":"DROPS LOVE YOU 5","content":"100% ХЛОПОК","footage":"75М","weight":"50Г","description":"Рекомендуемый размер спиц: 5мм. Плотность вязания: 10см х 10см = 17п х 22р. Бережная машинная стирка, max 60°C","price":"76 руб.","photo":"LOVE_YOU5.jpg"},
			{"name":"MELODY","content":"71% АЛЬПАКА, 25% ШЕРСТЬ, 4% ПОЛИАМИД ","footage":"140М","weight":"50Г","description":"Рекомендуемый размер спиц: 7мм. Плотность вязания: 10см х 10см = 14п х 19р. Ручная стирка, max 30°C.","price":"348 руб.","photo":"MELODY.jpg"},
			{"name":"NEPAL UNI COLOUR","content":"65% ШЕРСТЬ, 35% АЛЬПАКА","footage":"75М","weight":"50Г","description":"Рекомендуемый размер спиц: 5мм. Плотность вязания: 10см х 10см = 17п х 22р. Ручная стирка, max 30°C","price":"163 руб.","photo":"NEPAL.jpg"},
			{"name":"PEAK","content":"70% АКРИЛ, 30% ШЕРСТЬ","footage":"45М","weight":"50Г","description":"Рекомендованный размер спиц: 8мм. Плотность вязания: 10см х 10см = 11п х 15р. Машинная бережная стирка, max 40°C.","price":"142 руб.","photo":"PEAK.jpg"},
			{"name":"POLARIS MIX","content":"100% ШЕРСТЬ","footage":"36М","weight":"100Г","description":"Рекомендуемый размер спиц: 12 мм. Плотность вязания: 10см х 10см = 7п х 8р. Ручная стирка, max 30°C.","price":"355 руб.","photo":"POLARIS_MIX.jpg"},
			{"name":"PUNA NATURAL","content":"100% АЛЬПАКА","footage":"110М","weight":"50Г","description":"Рекомендуемый размер спиц: 4мм. Плотность вязания: 10см х 10см = 21п х 38р. Бережная ручная стирка, max 30°C.","price":"234 руб.","photo":"PUNA.jpg"},
			{"name":"SAFRAN","content":"100% ХЛОПОК ","footage":"160М","weight":"50Г","description":"Рекомендованный размер спиц: 3,5мм. Плотность вязания: 10см х 10см = 23п х 30р. Бережливая машинная стирка мах 40°C.","price":"121 руб.","photo":"SAFRAN.jpg"},
			{"name":"VIVALDI","content":"56% МОХЕР, 30% ПОЛИАМИД, 14% ШЕРСТЬ","footage":"280М","weight":"50Г","description":"Рекомендуемый размер спиц 4 мм. Плотность вязания 10 х 10 см = 19п х 26р. Ручная стирка при 30°C","price":"","photo":"VIVALDI.jpg"}
		]
		
function yarn(item)
{
	this.name=item.name;
	this.content=item.content;
	this.footage=item.footage;
	this.weight=item.weight;
	this.description=item.description;
	this.price=item.price;
	
	this.GetDescription=function(butn){
		var name="btn_full"+butn.id;
		var elem=document.getElementById(name);
		elem.textContent="Состав: "+item.content+"</br>"+item.footage+"  "+item.weight+"</br>"+item.description;
	};
	this.GetShortDescription=function(butn){
		var name="btn_short"+butn.id;		
		var elem=document.getElementById(name);
		console.log(elem);
		elem.innerHTML="Состав: "+item.content+"</br>"+item.footage+"  "+item.weight;
		
	};	
	this.BuyClick=function(butn){
		butn.value="ДОБАВЛЕНО!";
	}
};

var n=15;
var start=function(){
	for(var i=0;i<n;i++)
	{
	var div=document.createElement('div');
	div.id="div_elem";
	div.innerHTML="<div id='div_img'><img src='"+yarn_arr[i].photo+"'><p id='p_name'>"+yarn_arr[i].name+"</p><p id='p_price'>Цена: "+yarn_arr[i].price+"</p><input type='button' value='В корзину' class='btn_buy' id='"+i+"'></div><div id='div_info'><div id='div_short'><input type='button' value='Краткая информация' class='btn_info' id='btn_short"+i+"'></div><div id='div_full'><input type='button' value='Полная информация' class='btn_info' id='btn_full"+i+"'></div><div class='desc' id='btn_full"+i+"'></div></div>";
	document.body.appendChild(div);
	}
	var again= document.createElement('button');
	again.textContent="Обновить";
	again.id="again";
	document.body.appendChild(again);
	
	for(var y=0;y<n;y++)
	{
	document.getElementById(y).addEventListener("click",function() {
		var index=this.id;
		var b=new yarn(yarn_arr[y]);
		b.BuyClick(this);
		});
	}
	for(var y=0;y<15;y++)
	{
	document.getElementById(y).addEventListener("click",function() {
		var index=this.id;
		var b=new yarn(yarn_arr[index]);
		b.GetDescription(this);
		});
	}
	for(var y=0;y<n;y++)
	{
	document.getElementById(y).addEventListener("click",function() {
		var index=this.id;
		
		var b=new yarn(yarn_arr[index]);
		b.GetShort(this);
		});
	}
};

start();

document.getElementById('again').addEventListener("click",function() {location.reload()}, false);
