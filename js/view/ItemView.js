class ItemView {

  constructor(id, image, text) {
    this.container = this.createItem(id, image, text);
  }

  createItem(id, image, text) {
    let div = `
    <div id="${id}" class="col-sm-6 col-md-4 col-lg-3 dish">
      <img src="${image}"/>
      <label>${text}</label>
    </div>`;
    return $(div);
  }
}
