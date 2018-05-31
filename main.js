function YarnItem(jsonItem) {
    Object.keys(jsonItem).forEach(key => {
            this[key] = jsonItem[key];
        }
    )

    this.getDescription = function () {
        if(this.showDescription)
            return this.description;
        else
            return ''
    }
}

document.getElementById('refreshButton').addEventListener('click', function () {
    load()
    render()
})

var yarnItems = []

function load() {
    yarnItems = json_array.map(jsonItem => {
        return new YarnItem(jsonItem);
    })
}

function render() {
    var listContainer = document.getElementsByClassName("list-container__list")[0];
    listContainer.innerHTML = '';

    yarnItems.forEach(item => {
        var itemHtml = template(item);
        var li = document.createElement('li');
        li.innerHTML = itemHtml;
        listContainer.appendChild(li);

        var button = document.querySelector(`#item_${item.id} .content-container__show-details`);

        button.addEventListener('click', function () {
            updateYarn(item.id, {showDescription: true})
        })

        var stars = document.querySelectorAll(`#item_${item.id} .rating-star`);
        stars.forEach(star => {
            star.addEventListener('click', function () {
                updateYarn(item.id, {stars: +star.id})
            })
        })
    })
}

function updateYarn(id, newState)
{
    var yarnItem = yarnItems.find(item=>item.id === id);

    Object.keys(newState).forEach(key=>{
        yarnItem[key] = newState[key];
    })

    render()
}

load()
render()
