import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

export default function MailingListSignup() {
  const [email, setEmail] = React.useState()
  const [submitted, setSubmitted] = React.useState()

  const handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(email)
      .then(data => {
        console.log("data", data)
        setSubmitted(true)
      })
      .catch(() => {
        throw new Error("error submitting to mail chimp")
      })
  }

  return (
    <>
      {submitted && (
        <p className="notification is-success">
          Your email was submitted successfully. Rock on.
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="is-flex is-justify-content-center mt-2 mb-4"
      >
        <div className="field has-addons">
          <div className="control">
            <input
              className="input has-text-dark"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="control">
            <button className="button is-dark is-size-7-mobile">
              Join the mailing list
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
