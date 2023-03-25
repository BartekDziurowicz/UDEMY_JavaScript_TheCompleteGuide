class Product {
  title = "DEFAULT";
  imageUrl;
  description;
  price;

  constructor(title, image, description, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = description;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}">
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>\$${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        `;
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "A pillow",
      "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQcEUTMw8X0u8y26nPsuVOapVCjjpQAjHrD_63w7OE0gjcjUFJURZhl-3mfHGQi0hY0fq0LGI5A8WJ798jT7Gw",
      "A soft pillow",
      19.99
    ),
    new Product(
      "A carpet",
      "https://sklep.hard-pc.pl/galerie/p/podkladka-krux-space-max-carp_48721.webp",
      "A carpet which you might like or not",
      89.99
    ),
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      // const prodEl = productItem.render();
      prodList.append(productItem.render());
    }
    renderHook.append(prodList);
  }
}

const producList = new ProductList();
producList.render();
