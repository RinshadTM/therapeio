import React, { useState } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
  HeartHandshake,
  Sparkles,
} from "lucide-react";
import Button from "../components/home/Button";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      email,
      phone,
      subject,
      message,
    });

    setIsSubmitted(true);

    setTimeout(() => {
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    }, 1000);
  };

  return (
    <div className="mx-auto max-w-7xl mt-16 space-y-16 px-4 pb-24 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-3xl pt-4 text-center md:pt-8">
        <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700 shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-brand-500" />
          Care Desk & Support
        </span>

        <h1 className="text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl lg:text-5xl">
          We Are Here to{" "}
          <span className="text-primary">Listen</span>
        </h1>

        <p className="mt-3 text-base text-slate-600 sm:text-lg">
          Have questions regarding session booking, finding the right
          therapist, or your wellbeing? Reach out anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">

        <div className="space-y-6 lg:col-span-5">

          <div className="space-y-6 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft sm:p-8">

            <div>
              <h3 className="border-b border-slate-100 pb-2 text-lg font-bold text-slate-900">
                Direct Contact Channels
              </h3>
            </div>

            <div className="space-y-4">

              <a
                href="tel:+919876543210"
                className="group flex items-start gap-4 rounded-2xl border border-sky-100 bg-sky-50/60 p-4 transition-colors hover:border-sky-300 hover:bg-sky-50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500 text-white shadow-sm transition-transform group-hover:scale-105">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-sky-700">
                    Care Helpline
                  </h4>

                  <p className="mt-0.5 text-xs text-slate-600">
                    +91 98765 43210
                  </p>

                  <p className="mt-1 text-[11px] font-semibold text-sky-600">
                    Available Mon - Sat
                  </p>
                </div>
              </a>

              <a
                href="mailto:support@theraeia.com"
                className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-colors hover:bg-slate-100"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-white shadow-sm transition-transform group-hover:scale-105">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-brand-600">
                    Clinical Support Email
                  </h4>

                  <p className="mt-0.5 break-all text-xs text-slate-600">
                    support@theraeia.com
                  </p>

                  <p className="mt-1 text-[11px] text-slate-500">
                    Replies within 2 hours
                  </p>
                </div>
              </a>

              <div className="group flex items-start gap-4 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 transition-colors hover:border-emerald-300 hover:bg-emerald-50">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-sm transition-transform group-hover:scale-105">
                  <MessageCircle className="h-5 w-5" />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700">
                    Friendly Support
                  </h4>

                  <p className="mt-0.5 text-xs text-slate-600">
                    We're here to answer your questions.
                  </p>

                  <p className="mt-1 text-[11px] font-semibold text-emerald-600">
                    Quick assistance available
                  </p>
                </div>
              </div>

            </div>

            <div className="space-y-1.5 border-t border-slate-100 pt-4 text-xs text-slate-600">
              <div className="flex items-center gap-2 font-semibold text-slate-800">
                <Clock className="h-4 w-4 text-brand-500" />
                <span>Support Operating Hours:</span>
              </div>

              <p className="pl-6">
                Monday to Saturday: 9:00 AM - 7:00 PM
              </p>

              <p className="pl-6">
                Sunday: Closed
              </p>
            </div>
          </div>

          <div className="space-y-2 rounded-3xl bg-slate-900 p-6 text-white shadow-soft sm:p-7">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-400">
              <MapPin className="h-4 w-4" />
              <span>Our Location</span>
            </div>

            <h4 className="text-base font-bold">
              Therapeia Psychological Health
            </h4>

            <p className="text-xs leading-relaxed text-slate-300">
              Kerala, India
              <br />
              Virtual consultations available for clients across India.
            </p>
          </div>

        </div>

        <div className="lg:col-span-7">

          <div className="space-y-6 rounded-3xl border border-slate-200/80 bg-white p-8 shadow-soft sm:p-10">

            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <HeartHandshake className="h-6 w-6" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Send Us a Message
              </h3>

              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Fill in your details below and our support team will respond
                as soon as possible.
              </p>
            </div>

            {isSubmitted ? (
              <div className="space-y-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" />

                <h4 className="text-base font-bold text-slate-900">
                  Thank You! Your Message Has Been Received.
                </h4>

                <p className="mx-auto max-w-sm text-xs text-slate-600">
                  Our team will review your message and get back to you soon.
                </p>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mx-auto block pt-2 text-xs font-bold text-emerald-700 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Your Name
                    </label>

                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Subject
                    </label>

                    <select
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100"
                    >
                      <option value="">Select a subject</option>
                      <option value="Therapy">Therapy</option>
                      <option value="Appointment">Appointment</option>
                      <option value="Therapist">Finding a Therapist</option>
                      <option value="Payment">Payment</option>
                      <option value="Technical Support">
                        Technical Support
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Your Message
                  </label>

                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us how we can help you..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={Send}
                  iconPosition="right"
                  className="w-full rounded-2xl shadow-lg shadow-brand-500/20"
                >
                  Send Message
                </Button>

                <p className="text-center text-xs text-slate-400">
                  We respect your privacy and handle your information with
                  care.
                </p>

              </form>
            )}

          </div>
        </div>

      </div>

      <section className="overflow-hidden rounded-3xl bg-primary px-6 py-12 text-center text-white shadow-xl sm:px-10">

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full ">
          <HeartHandshake className="h-7 w-7" />
        </div>

        <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
          You don't have to go through it alone.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-brand-50 sm:text-base">
          Take the first step toward a healthier and happier you. Connect with
          a therapist who understands you.
        </p>

        <button
          onClick={() => (window.location.href = "/doctors")}
          className="mt-7 rounded-xl bg-white px-7 py-3 font-semibold text-brand-600 shadow-lg transition hover:bg-brand-50 text-black"
        >
          Find a Therapist
        </button>

      </section>

    </div>
  );
};

export default Contact;
