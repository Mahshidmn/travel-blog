
import sendRequest from './send-request';
const BASE_URL = '/api/blogs';

export function getMyBlogs() {
    
    return sendRequest(BASE_URL);
  }

export function createBlog(blog) {
    return sendRequest(BASE_URL, 'POST', blog);
}
  
export async function deleteBlog(id) {
  return sendRequest(`${ BASE_URL }/${ id }`, 'DELETE');
}

export async function updateBlog(id, blog) {
  return sendRequest(`${ BASE_URL }/${ id }`, 'PUT', blog);
}

export function getBlogDetails(blogId) {
  return sendRequest(`${BASE_URL}/${blogId}`);
}

export function createBlogComment(blogId, comment) {
  return sendRequest(`${BASE_URL}/${blogId}/comments`, 'POST', comment);
}