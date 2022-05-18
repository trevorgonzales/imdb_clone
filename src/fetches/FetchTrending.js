export default async function fetch_trending(
    end_point,
    set_state_callback,
    page
  ) {
    const response = await fetch(`${end_point}&page=${page}`);
    const data = await response.json();
    set_state_callback(data.results);
  }
  