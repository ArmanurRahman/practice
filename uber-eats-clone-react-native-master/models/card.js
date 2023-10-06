class Card {
    constructor(
        mealId,
        shopId,
        imageUrl,
        shopName,
        deliveryTime,
        category,
        deliveryFee,
        rating,
        other
    ) {
        this.shopId = shopId;
        this.mealId = mealId;

        this.imageUrl = imageUrl;
        this.shopName = shopName;
        this.deliveryTime = deliveryTime;
        this.category = category;
        this.deliveryFee = deliveryFee;
        this.rating = rating;
        this.other = other;
    }
}

export default Card;
