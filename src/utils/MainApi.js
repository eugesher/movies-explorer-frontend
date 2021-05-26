class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getData(response) {
    if (response.ok) return response.json();
    else return Promise.reject(`Ошибка: ${response.status}`);
  }

  _setHeaders() {
    this._headers.authorization = `Bearer ${localStorage.getItem("jwt")}`;
  }

  getUserInfo() {
    this._setHeaders();
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this._getData);
  }

  patchUserInfo({ email, name }) {
    this._setHeaders();
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ email, name }),
    }).then(this._getData);
  }

  getMovies() {
    this._setHeaders();
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
    }).then(this._getData);
  }

  postMovie(movieData) {
    this._setHeaders();
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(movieData),
    }).then(this._getData);
  }

  deleteMovie(movieId) {
    this._setHeaders();
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._getData);
  }
}

const mainApi = new MainApi({
  baseUrl: "https://api.bitfilm.eugesher.site",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
