'use server'

export async function getProfiles() {
  try {
    const result = await fetch('http://api:3001/profiles')
    return await result.json()
  } catch (err) {
    console.error(err)
  }
}

export async function getPost(id: string) {
  try {
    const result = await fetch('http://api:3001/posts/' + id)
    return await result.json()
  } catch (err) {
    console.error(err)
  }
}

export async function getPosts() {
  try {
    const result = await fetch('http://api:3001/posts')
    return await result.json()
  } catch (err) {
    console.error(err)
  }
}

export async function createPost(post: { author: string; title: string; content: string }) {
  try {
    const result = await fetch('http://api:3001/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
    })

    return await result.json()
  } catch (err) {
    console.error(err)
  }
}
