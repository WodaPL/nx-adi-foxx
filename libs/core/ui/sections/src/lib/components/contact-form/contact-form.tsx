import { Wrapper } from '../../styles/contact-form/contact-form';

export const ContactForm = ({
  id,
  className,
}: {
  id?: string;
  className?: string;
}) => {
  return <Wrapper id={id}>contact form</Wrapper>;
};

export default ContactForm;
