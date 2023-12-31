import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  console.log(request);
  //redirect is design only to use in loader and action function only .......
  //here we have to use Form from react-router dom it is use ful in vite
  //loader useful in prefetching of data while action useful after submitting of data
  //to any address or method
  //action is like same loader it take request as parameter
  //it is same like loader it must return something like null or anything
  //it is always need name attributes in form otherwise it will not work
  //to check empty values form must "required" attributes
  console.log(request);

  const formData = await request.formData();
  console.log(formData);
  const data = Object.fromEntries(formData);
  console.log(data);

  try {
    const response = await axios.post(newsletterUrl, data);
    //this response why i not see in the browser
    console.log(response);
    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const NewsLetter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form className="form" method="post">
      {/* title */}
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Our news-letter
      </h4>
      {/* name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name:-
        </label>
        <input
          type="text"
          id="name"
          name="name"
          // defaultValue="john"
          required
          className="form-input"
        />
      </div>
      {/* last-name */}
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          // defaultValue="smith"
          required
        />
      </div>{" "}
      {/* email */}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email:-
        </label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue="test@test.com"
          required
          className="form-input"
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: "0.5rem" }}
        disabled={isSubmitting}
      >
        {isSubmitting ? "submitting" : "submit"}
      </button>
    </Form>
  );
};
export default NewsLetter;
