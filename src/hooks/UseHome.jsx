import axios from 'axios'
const API_URL=import.meta.env.VITE_SOME_KEY;
export const getData = async (setAdvocates) => {
  let res = await axios.get(`${API_URL}/advocates/`)
  setAdvocates(res.data)
}
