import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mwpboeqa");

  if (state.succeeded) {
    return (
      <div className="hire-form text-center">
        <p className="text-light mb-0">Thanks! Your query has been submitted.</p>
      </div>
    );
  }

  // Ensure errors is always an array
  const errors = state.errors || [];

  return (
    <div className="hire-form mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-light">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="custom-input form-control"
            placeholder="your.email@example.com"

          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label text-light">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            className="custom-input form-control"
            placeholder="How can I help you?"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <input
          type="text"
          name="_gotcha"
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
          required
        />

        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={state.submitting}
          >
            {state.submitting ? 'Sending…' : 'Hire Me!'}
          </button>
        </div>

        {errors.length > 0 && (
          <div className="mt-2">
            <p className="text-danger small">
              Oops, something went wrong. Please check your inputs.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
