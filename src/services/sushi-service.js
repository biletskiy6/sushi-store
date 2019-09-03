export default class SushiService {
  _apiBase = "http://sushi-store";
  getResource = async url => {
    const data = await fetch(`${this._apiBase}${url}`);
    return data.json();
  };
  getCategories = async () => {
    const data = await this.getResource("/categories/");
    return await data;
  };
  getProducts = async () => {
    const data = this.getResource("/products/");
    return data;
  };
}
