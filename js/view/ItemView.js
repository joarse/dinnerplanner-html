class ItemView {

  constructor(id, image, text) {
    this.html = this.createItem(id, image, text);
  }

  createItem(id, image, text) {
    let div = `
    <div id="item-${id}" class="col-sm-3">
      <img src="./images/${image}"/>
      <label>${text}</label>
    </div>`;
    return div;
  }
}
