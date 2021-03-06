import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:34576/api',
})

export const insertTweef = payload => api.post(`/tweef`, payload)
export const getAllTweefs = () => api.get(`/tweefs`)
export const updateTweefById = (id, payload) => api.put(`/tweef/${id}`, payload)
export const deleteTweefById = id => api.delete(`/tweef/${id}`)
export const getTweefById = id => api.get(`/tweef/${id}`)
export const getTweefByName = userName => api.get(`/tweef/`)
export const dropDatabase = () => api.delete(`/tweefs`)

const apis = {
    insertTweef,
    getAllTweefs,
    updateTweefById,
    deleteTweefById,
    getTweefById,
    getTweefByName,
    dropDatabase,
}

export default apis
