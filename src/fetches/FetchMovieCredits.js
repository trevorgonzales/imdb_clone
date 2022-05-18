export default async function FetchMovieCredits(id) {
    const response = await fetch(
      `${process.env.REACT_APP_MOVIES}${id}/credits?${process.env.REACT_APP_KEY}`
    );
    const data = await response.json();
    const pull_three = data.cast.slice(0, 3);
    const collection = pull_three.map((actor) => actor.name);
    const join = collection.join(', ');
    console.log(join);
  }