'use server'

export async function getProfiles() {
  try {
    const result = await fetch('http://localhost:3001/profiles')
    return await result.json()
  } catch (err) {
    console.error(err)
  }
}
