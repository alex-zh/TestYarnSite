function ratingStarsTemplate(fullStartsNumber) {
    var startsString = "";
    for (var i = 1; i < 6; i++) {
        var className = (i <= fullStartsNumber) ? 'full-star' : 'empty-star'
        startsString += `<span id="${i}" class="rating-star ${className}"></span>`
    }

    return startsString;
}

function template(item) {
    return `<div class="item" id="item_${item.id}">
    <div class="item__image-container">
        <div>
            <img src="images/${item.photo}">
        </div>
    </div>
    <div class="item__content-container">
        <div>
            <div class="content-container__header">
                <div class="name-stars">
                    <h4>${item.name}</h4>
                    <div class="name-stars__rating">
                    <div class="rating-box">
                        ${ratingStarsTemplate(item.stars)}                        
                     </div>
      
                    </div>
                </div> 
                <div  class="content-container__show-details">
                    Показать описание
                </div>
            </div>
            <div class="details-container">
                <div class="details-container__info">
                    <div class="details-container__content">
                        <span>Состав:</span>
                        <span>${item.content}</span>
                    </div>
                    <div class="details-container__footage">
                        <span>Длина:</span>
                        <span>${item.footage}</span>
                    </div>
                    <div class="details-container__footage">
                        <span>Вес:</span>
                        <span>${item.weight}</span>
                    </div>
                    <div class="details-container__full-description">
                      ${item.getDescription()}                        
                    </div>
                </div>
                <div class="details-container__sales-block">
                    <div class="sales-block__price">
                        <span>${item.price}</span>
                        <span>руб.</span>
                    </div>
                    <div class="sales-block__button">Добавить в корзину</div>
                </div>
            </div>

        </div>
    </div>
</div>`
}