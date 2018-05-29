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

    var button = document.querySelector(`#item_${item.id} .content-container__show-details`);

    button.addEventListener('click', function () {
        var fullDescriptionDiv = document.querySelector(`#item_${item.id} .details-container__full-description`)
        fullDescriptionDiv.innerText = item.getDescription();
    })
})

