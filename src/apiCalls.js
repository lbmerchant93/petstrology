export const fetchHoroscope = (url) => {
    const post = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
      }
    return fetch(url, post)
    .then(res => {
        if (!res.ok) {
            return `${res.status} error. Sorry! Something went wrong! Try again later or go to Contact Us to contact the developers with questions!`
        } else {
            return res.json()
        }})
}