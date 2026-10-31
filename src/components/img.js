import { photo } from '../content.js'
import malik from '../assets/boat-malik.jpg'

// 'malik' means our own barge photo; anything else is an Unsplash photo id.
export const imgFor = (id, w = 1200) => (id === 'malik' ? malik : id.startsWith('photo-') ? photo(id, w) : id)
