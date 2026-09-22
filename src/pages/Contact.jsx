import Form from '../components/Form';
import { MainTitle } from '../components/Title';
import { FaLinkedin, FaTelegramPlane, FaGithub, FaEnvelope } from 'react-icons/fa';

const CONTACT_CHANNELS = [
  {
    name: 'Email',
    href: 'mailto:emyayehenok@gmail.com',
    icon: FaEnvelope,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/henok-emyaye-92b199252',
    icon: FaLinkedin,
  },
  {
    name: 'Telegram',
    href: 'https://www.t.me/Henaorth',
    icon: FaTelegramPlane,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/henaorth16',
    icon: FaGithub,
  },
];

function Contact() {
  return (
    <section id="contact" className="h-full w-full pt-14 pb-16 px-4 sm:px-6 overflow-y-auto wrapper">
      <div className="max-w-xl mx-auto space-y-4">
        
        {/* Header */}
        <div className="text-center">
          <MainTitle title="Contact" subtitle="Send a message or reach out through any channel below" />
        </div>

        {/* Quick Channels Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {CONTACT_CHANNELS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target={item.name === 'Email' ? undefined : '_blank'}
                rel={item.name === 'Email' ? undefined : 'noreferrer'}
                className="px-4 py-2 rounded-md border border-secondary-800 bg-secondary-900 hover:bg-secondary-800 text-secondary-200 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors"
              >
                <Icon className="text-base text-primary-400" />
                <span>{item.name}</span>
              </a>
            );
          })}
        </div>

        {/* Form */}
        <Form />

      </div>
    </section>
  );
}

export default Contact;


