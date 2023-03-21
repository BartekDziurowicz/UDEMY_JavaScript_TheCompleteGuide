const productList = {
  products: [
    {
      title: "A pillow",
      imageUrl:
        "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQcEUTMw8X0u8y26nPsuVOapVCjjpQAjHrD_63w7OE0gjcjUFJURZhl-3mfHGQi0hY0fq0LGI5A8WJ798jT7Gw",
      price: 19.99,
      description: "A soft pillow!",
    },
    {
      title: "A carpet",
      imageUrl:
        "https://sklep.hard-pc.pl/galerie/p/podkladka-krux-space-max-carp_48721.webp",
      price: 89.99,
      description: "A carpet which you might like or not",
    },
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
            <div>
                <img src="${prod.imageUrl}" alt="${prod.title}">
                <div class="product-item__content">
                    <h2>${prod.title}</h2>
                    <h3>\$${prod.price}</h3>
                    <p>${prod.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        `;
        prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
