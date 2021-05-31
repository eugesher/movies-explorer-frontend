class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _setHeaders() {
    this._headers.authorization = `Bearer ${localStorage.getItem("jwt")}`;
  }

  getUserInfo() {
    this._setHeaders();
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then((response) => response.json());
  }

  patchUserInfo({ email, name }) {
    this._setHeaders();
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ email, name }),
    }).then((response) => response.json());
  }

  getMovies() {
    this._setHeaders();
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
    }).then((response) => response.json());
  }

  postMovie(movieData) {
    this._setHeaders();
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(movieData),
    }).then((response) => response.json());
  }

  deleteMovie(movieId) {
    this._setHeaders();
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((response) => response.json());
  }
}

const mainApi = new MainApi({
  baseUrl: "https://api.bitfilm.eugesher.site",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
