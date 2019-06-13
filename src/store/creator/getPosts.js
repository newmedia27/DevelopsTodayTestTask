import { axiosClient } from '../../tools/axiosClient'
import { setPosts } from '../actions/actions'

export function getPosts() {
  return async dispatch=>{
    const request = axiosClient()
    try {
      const response = await request.get(`https://simple-blog-api.crew.red/posts`)
      if (response.status === 200) {
        dispatch(setPosts(response.data))
      }
    } catch (e) {

    }
  }
}