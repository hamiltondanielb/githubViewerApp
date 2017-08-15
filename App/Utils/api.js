export function getBio(username) {
  username = username.toLowerCase().trim()
  const url = `https://api.github.com/users/${username}`
  return fetch(url).then((res) => res.json())
}

export function getRepos (username) {
  username = username.toLowerCase().trim()
  const url = `https://api.github.com/users/${username}/repos`
  return fetch(url).then((res) => res.json())
}
