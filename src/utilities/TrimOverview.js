// ***
// Returns first 20 words of the entire movie description
// @param {string}
// ***

export default function TrimOverview(description_string) {
    return description_string.split(' ').slice(0, 20).join(' ') + '...';
  }
  