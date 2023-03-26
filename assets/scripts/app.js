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

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHook) {
    this.hookId = renderHook;
  }

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.lenght > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {

  constructor(renderHookId){
    super(renderHookId);
  };

  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce((prevValue, currItem) => { return prevValue + currItem.price }, 0);
    return sum;
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    const cartEl = this.createRootElement('section', 'cart');
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
      `;
    this.totalOutput = cartEl.querySelector("h2");
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    // console.log("Adding product to cart...");
    // console.log(this.product);
    // cart.addProduct();
    App.addProductToCart(this.product)
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
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
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
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      // const prodEl = productItem.render();
      prodList.append(productItem.render());
    }
    return prodList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");
    this.cart = new ShoppingCart('app');
    this.cart.render();
    const producList = new ProductList();
    const prodListEl = producList.render();

    renderHook.append(prodListEl);
  }
}

class App {
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
