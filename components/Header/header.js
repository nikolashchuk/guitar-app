class Header {
  handleOpenShoppingPage() {
    shoppingPage.render();
  }

  render(count) {
    const html = `
    <div class="header-container">
        <div class="header-counter" onClick="headerPage.handleOpenShoppingPage();">
        Кількість товарів: ${count}
        </div>
    </div>`;

    ROOT_HEADER.innerHTML = html;
  }
}

const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);
