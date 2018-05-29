function template(item) {
    return `<div class="item">
    <div class="item__image-container">
        <div>
            <img src="images/${item.photo}">
        </div>
    </div>
    <div class="item__content-container">
        <div>
            <div class="content-container__name">
                <h4>${item.name}</h4>
                <div class="content-container__show-details">Показать описание</div>
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