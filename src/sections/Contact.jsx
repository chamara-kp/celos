import { useState } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    packageName: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      loading: true,
      success: false,
      error: "",
    });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        loading: false,
        success: false,
        error: "EmailJS keys are missing. Please check your .env file.",
      });
      return;
    }

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      package_name: form.packageName,
      message: form.message,
      to_email: "kchamara1017@gmail.com",
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus({
        loading: false,
        success: true,
        error: "",
      });

      setForm({
        name: "",
        email: "",
        packageName: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus({
        loading: false,
        success: false,
        error: "Message failed. Please try WhatsApp or email directly.",
      });
    }
  };

  const waLink = `https://wa.me/94769918162?text=${encodeURIComponent(
    "Hi Celos! I'm interested in your services.",
  )}`;

  return (
    <section id="contact" className="min-h-screen px-5 py-20 bg-charcoal-50">
      <div className="w-full mx-auto max-w-7xl">
        <div className="max-w-xl mx-auto text-center mb-14">
          <p className="mb-3 text-sm font-semibold tracking-wide text-orange-500 uppercase">
            Get in touch
          </p>
          <h2 className="text-3xl font-bold md:text-5xl text-charcoal-900">
            Let's create what's next, together
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-charcoal-500">
            Have a project, brand, or campaign idea? Send us a message and we’ll
            contact you soon.
          </p>
        </div>

        <div className="grid items-start gap-10 md:grid-cols-2">
          <div className="p-8 bg-white border shadow-sm rounded-3xl border-charcoal-100">
            <h3 className="mb-4 text-2xl font-bold text-charcoal-900">
              Contact details
            </h3>

            <p className="mb-8 leading-relaxed text-charcoal-500">
              Partner with Celos and let’s build your brand’s digital future.
              For the fastest response, contact us on WhatsApp.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center bg-orange-100 w-11 h-11 rounded-xl">
                  <Phone size={18} className="text-orange-500" />
                </div>
                <div>
                  <p className="text-xs text-charcoal-400">Phone / WhatsApp</p>
                  <a
                    href="tel:+94769918162"
                    className="font-semibold text-charcoal-900 hover:text-orange-500"
                  >
                    +94 76 991 8162
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center bg-orange-100 w-11 h-11 rounded-xl">
                  <Mail size={18} className="text-orange-500" />
                </div>
                <div>
                  <p className="text-xs text-charcoal-400">Email</p>
                  <a
                    href="mailto:kchamara1017@gmail.com"
                    className="font-semibold text-charcoal-900 hover:text-orange-500"
                  >
                    kchamara1017@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 mt-8 text-sm font-semibold text-white transition rounded-xl bg-[#25d366] hover:bg-[#1ebe59]"
            >
              <MessageCircle size={20} />
              Chat with us on WhatsApp
            </a>

            <div className="flex gap-3 mt-6">
              {[
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/profile.php?id=61585328031989",
                  label: "Facebook",
                },
                {
                  icon: Instagram,
                  href: "https://www.facebook.com/profile.php?id=61585328031989",
                  label: "Instagram",
                },
                {
                  icon: Linkedin,
                  href: "https://www.facebook.com/profile.php?id=61585328031989",
                  label: "LinkedIn",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 text-orange-500 transition bg-orange-100 rounded-xl hover:bg-orange-500 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="p-8 bg-white border shadow-sm rounded-3xl border-charcoal-100">
            {status.success ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle size={56} className="mb-5 text-green-500" />
                <h3 className="text-2xl font-bold text-charcoal-900">
                  Message sent successfully!
                </h3>
                <p className="mt-3 text-sm text-charcoal-500">
                  Thank you. We’ll get back to you shortly.
                </p>

                <button
                  onClick={() =>
                    setStatus({ loading: false, success: false, error: "" })
                  }
                  className="px-5 py-3 mt-6 text-sm font-semibold text-white bg-orange-500 rounded-xl hover:bg-orange-600"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-xs font-semibold text-charcoal-500">
                      Your name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Kasun Perera"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm border outline-none border-charcoal-100 rounded-xl bg-charcoal-50 focus:border-orange-400"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-xs font-semibold text-charcoal-500">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm border outline-none border-charcoal-100 rounded-xl bg-charcoal-50 focus:border-orange-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-xs font-semibold text-charcoal-500">
                    Package interested in
                  </label>
                  <select
                    name="packageName"
                    required
                    value={form.packageName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm border outline-none border-charcoal-100 rounded-xl bg-charcoal-50 focus:border-orange-400"
                  >
                    <option value="">Select a package...</option>
                    <option value="Startup — LKR 35,000/mo">
                      Startup — LKR 35,000/mo
                    </option>
                    <option value="Growth — LKR 75,000/mo">
                      Growth — LKR 75,000/mo
                    </option>
                    <option value="Scale — LKR 111,000/mo">
                      Scale — LKR 111,000/mo
                    </option>
                    <option value="Custom / Add-on inquiry">
                      Custom / Add-on inquiry
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-xs font-semibold text-charcoal-500">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    name="message"
                    required
                    placeholder="Tell us about your brand and goals..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm border outline-none resize-none border-charcoal-100 rounded-xl bg-charcoal-50 focus:border-orange-400"
                  />
                </div>

                {status.error && (
                  <div className="flex items-center gap-2 p-3 text-sm text-red-600 bg-red-50 rounded-xl">
                    <AlertCircle size={18} />
                    {status.error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status.loading}
                  className="flex items-center justify-center gap-2 py-4 text-sm font-semibold text-white transition bg-orange-500 rounded-xl hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Send size={18} />
                  {status.loading ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
