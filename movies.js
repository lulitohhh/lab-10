class Movie {

    constructor(title, description, rating, imgCard, imgBanner) {
        this.title = title;
        this.description = description;
        this.rating = rating;
        this.imgCard = imgCard;
        this.imgBanner = imgBanner
    }

    getTitle () {
        return this.title
    }

    getDescription () {
        return this.description
    }

    getRating () {
        return this.rating
    }

    getCard () {
        return this.imgCard
    }

    getBanner () {
        return this.imgBanner
    }

    showStars (stars) {
        let html = ""
        for (let i = 0; i < stars; i++) {
            html += '★'
        }
        return html
    }

    toHtmlCard(num) {
        return `
        <div class="card" onclick="changeBanner(${num})">
            <img src="${this.imgCard}" class="imgCard"/>
            <h4 class="titleCard">${this.title}</h4>
            <div class="stars">
                ${this.showStars(this.rating)}
            </div>
        </div>
        `
    }

    toHtmlBanner() {
        return `
        <div class="bannerCard">
            <img src="${this.imgBanner}" class="imgBanner"/>
            <div class="bannerInfo">
                <h1 class="titleBanner">${this.title}</h1>
                <p class="descriptionBanner">${this.description}</p>
                <div class="starsBanner">
                    ${this.showStars(this.rating)}
                </div>
                <div class="button">
                    <div class="playButton">Play ►</div>
                    
                </div>
            </div>
        </div>
        `
    }

}