export const movieSearchErrors = {
  requiredField: "Нужно ввести ключевое слово.",
  notFound: "Ничего не найдено.",
  responseError:
    "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.",
};

export function formatMovieDuration(duration) {
  return `${Math.floor(duration / 60)} ч ${duration % 60} м`;
}

export function filterShortMovies(movies) {
  return movies.filter((m) => m.duration <= 40);
}
