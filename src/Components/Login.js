import { useState } from "react"
import { useFormik } from "formik"
import  * as Yup from "yup"

function Login()
{
  const [showpassword,setShowpassword]=useState(false)
  const [termandcondition,setTermandcondition]=useState(false)


  const formik = useFormik({
    initialValues: 
    {
      email: "",
      name: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      name: Yup.string()
        .min(2)
        .max(25)
        .required("Please enter a valid name"),
      password: Yup.string()
        .min(5, "Password must be at least 5 characters")
        .required("Password is required")
    }),
    onSubmit: (values) => {
      console.log("Form values:", values);
      // Handle form submission
    }
  });
  

  return (
   
    <div className="justify-content-center align-items-center d-flex bg-light min-vh-100">
      <div className="container bg-white" style={{height:"450px" ,
        width:'400px'
      }}>
      <form onSubmit={formik.handleSubmit}>
      <h5 className="my-4 d-flex justify-content-center">Welcome To The Login Page.</h5>
        <div className="mb-2">
        <label className="mb-2">Email:    </label>
        <input
  type="email"
  name="email"
  autoComplete="off"
  placeholder="Email"
  {...formik.getFieldProps("email")}
  className={`form-control ${
    formik.touched.email && formik.errors.email ? "is-invalid" : ""
  }`}
/>

    {formik.touched.email && formik.errors.email && (
                <div className="invalid-feedback">
                  {formik.errors.email}
                </div>
              )}
        </div>
        <div className="mb-2">
        <label className="mb-2">Name:     </label>
        <input className={`form-control
        ${formik.touched.name &&
          formik.errors.name
          ? "is-invalid"
          : ""
        }`
        }
        placeholder="Name"
        {...formik.getFieldProps("name")}
        type="text" 
        name="name"
        autoComplete="off" 
        />
        {formik.touched.name && formik.errors.name && (
                <div className="invalid-feedback">
                  {formik.errors.name}
                </div>
              )}
        </div>
        <div className="mb-2">
        <label className="mb-2">password:     </label>
     
        <input className={`form-control
        ${formik.touched.password &&
          formik.errors.password
          ? "is-invalid"
          :""
        } `}
         type={showpassword ? "text" : "password"} 
        name="password" 
        autoComplete="off" 
        placeholder="Password"
        {...formik.getFieldProps("password")}
        />
        <button onClick={()=>setShowpassword(!showpassword)}>
       {showpassword ? (
                  <span>show</span>
                ) : (
                  <span>hide</span>
                )}
                </button>
                {formik.touched.password && formik.errors.password && (
                <div className="invalid-feedback">
                  {formik.errors.password}
                </div>
              )}
        </div>
        <div className="mb-3">
      
        <input className="form-check-input p-2 mx-2" 
        type="checkbox" 
        name="termandcondition"
        checked={termandcondition}
        onChange={(e)=>
          setTermandcondition(e.target.checked)
        }/>
          <label>  Term & Condition.</label>
        </div>
       <button className="btn btn-primary mb-3" type="submit"
       disabled={formik.isSubmitting}>
       {formik.isSubmitting ? "Signing In..." : "Sign In"}
       </button>
      </form>
      </div>
    </div>
  )
}

export default Login
