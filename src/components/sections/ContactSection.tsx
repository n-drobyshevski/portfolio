import Input from '../Input';
import Button from '../Button';

const ContactSection = () => {
  return (
    <div className="flex h-full w-full flex-col  gap-8 p-4">
      <h1 className="text-3xl text-blue-100/[.87]">Contact me</h1>
      <form className="flex grow flex-col gap-4">
        <div className="flex gap-6">
          <Input inputName="email" type="email" fill={true} />
          <Input inputName="name" type="text" fill={true} />
        </div>
        <Input inputName="subject" type="text" />
        <Input inputName="message" type="text" textarea={true} fill={true} />
        <div className="w-1/5 self-end">
          <Button type="submit">Send</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactSection;
