export default async function fetch_genres(end_point, state_set_callback) {
    const response = await fetch(end_point);
    const data = await response.json();
    state_set_callback(data.genres);
  }
  