class MoviesApi {
  constructor() {
    this._baseUrl = "https://api.nomoreparties.co/beatfilm-moviesa";
    this._headers = { "Content-Type": "application/json" };
  }

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      headers: this._headers,
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(`Ошибка: ${response.status}`);
      }
    });
  }
}

const moviesApi = new MoviesApi();

export default moviesApi;
