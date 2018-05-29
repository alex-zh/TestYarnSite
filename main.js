function YarnItem(jsonItem) {
    Object.keys(jsonItem).forEach(key => {
            this[key] = jsonItem[key];
        }
    )

    this.getDescription = function () {
        return this.description;
    }
}


var yarnItems = json_array.map(jsonItem => {
    return new YarnItem(jsonItem);
})

var listContainer = document.getElementsByClassName("list-container__list")[0];

yarnItems.forEach(item => {
    var itemHtml = template(item);
    var li = document.createElement('li');
    li.innerHTML = itemHtml;

    listContainer.appendChild(li);
})
