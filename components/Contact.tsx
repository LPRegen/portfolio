import { useForm, ValidationError } from '@formspree/react';
import { Title } from './Heading';

export function ContactForm() {
  const [state, handleSubmit] = useForm('mnqwwopk');
  const containerStyle = 'flex flex-col gap-2';

  const Button = () => {
    let formState = 'Submit';
    if (state.submitting) {
      formState = 'Sending...';
    } else if (state.succeeded) {
      formState = 'Sended!';
    }
    const sendingStyle = () => (state.submitting ? 'bg-primary-400/60' : '');
    const buttonStyle = `${sendingStyle()} rounded-lg text-secondary-800 bg-primary-200/50 p-4 disabled:bg-lime-200/60 disabled:text-primary-700 disabled:cursor-not-allowed`;

    return (
      <button type="submit" disabled={state.succeeded} className={buttonStyle}>
        {formState}
      </button>
    );
  };

  const Form = () => {
    const labelStyle = 'text-sm text-secondary-900';
    const inputStyle =
      'px-1 py-2 text-base border border-primary-300/50 focus:outline-none focus:border-primary-500';

    return (
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-4 rounded-xl shadow-xl"
      >
        <div className={containerStyle}>
          <label htmlFor="name" className={labelStyle}>
            Name <small>(*)</small>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className={inputStyle}
          />
        </div>
        <div className={containerStyle}>
          <label htmlFor="email" className={labelStyle}>
            Email <small>(*)</small>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className={inputStyle}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className={containerStyle}>
          <label htmlFor="message" className={labelStyle}>
            Message <small>(*)</small>
          </label>
          <textarea
            id="message"
            name="message"
            required
            className={inputStyle}
            rows={10}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <Button />
      </form>
    );
  };

  return (
    <div id="contact" className="flex flex-col gap-8">
      <Title as="h2" after>
        Contact
      </Title>
      <Form />
    </div>
  );
}
