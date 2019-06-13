import { axiosClient } from '../../tools/axiosClient'
import { setPost } from '../actions/actions'

export function setOnePost(id) {
  return async dispatch=>{
    const request = axiosClient()
    try {
      const response = await request.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
      if (response.status === 200) {
        dispatch(setPost(response.data))
      }
    } catch (e) {

    }
  }
}