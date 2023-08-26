import { Form ,redirect} from "react-router-dom"
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({ request }) => { 
  //it is same like loader it must return something like null or anything
  //it is always need name attributes in form otherwise it will not work
  //to check empty values form must "required" attributes
  const formData = await request.formData()
    console.log(formData)
  const data = Object.fromEntries(formData)
  console.log(data)
  const response = await axios.post(newsletterUrl, data)
  //this response why i not see in the browser
  console.log(response)
  // toast.success(response.data.msg)
  

  // console.log(request);
  return null;
}

const NewsLetter = () => {
  return (
    <Form className="form" method="POST">
      {/* title */}
      <h4 style={{textAlign:"center" ,marginBottom:"2rem"}}>Our news-letter</h4>
      {/* name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">name:-</label>
        <input type="text"
          id="name"
          name="name"
          defaultValue="Vatsal"
         
          className="form-input" />
      </div>
      {/* last-name */}
      <div className="form-row">
        <label htmlFor="last-name" className="form-label">Last-name:-</label>
        <input type="text"
          id="last-name"
          name="last-name"
          defaultValue="Gohil"
         
          className="form-input" />
      </div>
      {/* email */}
      <div className="form-row">
        <label htmlFor="email" className="form-label">Email:-</label>
        <input type="email"
          id="email"
          name="email"
          defaultValue="dharmesh.vatsalgohil@gmail.com"
         
          className="form-input" />
      </div>
      <button type="submit" className="btn btn-block" style={{marginTop:"0.5rem"}}>submit</button>
    </Form>
  )
}
export default NewsLetter