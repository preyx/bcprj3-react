import axios from 'axios'

const Item = {
  read: () => axios.get('/api/items'),
  create: item => axios.post('/api/items', item),
}

export default Item