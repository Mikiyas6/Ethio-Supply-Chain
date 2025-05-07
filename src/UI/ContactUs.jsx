import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="min-h-screen text-white px-6 py-24">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h1 className="text-5xl md:text-6xl font-bold">Contact Us</h1>
        <p className="text-white-300 text-lg max-w-2xl mx-auto">
          We&lsquo;d love to hear from you! Whether you&lsquo;re curious about
          our products, services, or partnership opportunities we&lsquo;re here
          to help.
        </p>

        {/* Social Media Links */}
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent-500 transition text-2xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.facebook.com/share/1Ep962sXLC/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent-500 transition text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/Sofonias96?t=0dbeiP96dTs8rFz6MGpMUQ&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent-500 transition text-2xl"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.linkedin.com/sofonias-tilahun-354549364"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent-500 transition text-2xl"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}
