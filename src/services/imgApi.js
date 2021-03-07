const API_KEY = '19823143-e5d054b038f568b2343c680be';
const BASE_URL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&';

export default function fetchImages(searchQuery, page) {
  const searchParams = new URLSearchParams({
    q: searchQuery,
    page,
    per_page: 12,
    key: API_KEY,
  });
  return fetch(`${BASE_URL}${searchParams}`).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(
      new Error(`There are no images for your query: ${searchQuery}`),
    );
  });
}
