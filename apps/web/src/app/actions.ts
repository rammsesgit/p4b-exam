'use server'

export async function getProfiles() {
  try {
    const result = await fetch('http://localhost:3001/profiles')
    return await result.json()
  } catch (err) {
    console.error(err)
  }
}

export async function getPosts() {
  try {
    const result = await fetch('http://localhost:3001/posts')
    return await result.json()
  } catch (err) {
    console.error(err)
  }
}

export async function createPost(post: { author: string; title: string; content: string }) {
  try {
    console.log('ACTION createPost', post) // TEST:
    const result = await fetch('http://localhost:3001/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
    })
    // console.log(result) // TEST:

    return await result.json()
  } catch (err) {
    console.error(err)
  }
}
