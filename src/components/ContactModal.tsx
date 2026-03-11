import React, { useRef, useState, useEffect } from "react";
import { Icon } from "@iconify/react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

declare global {
  interface Window {
    emailjs: {
      sendForm: (
        serviceID: string,
        templateID: string,
        form: HTMLFormElement,
        publicKey: string
      ) => Promise<void>;
    };
  }
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsAnimating(true), 50);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    window.emailjs
      .sendForm(
        "service_akgmg6r",
        "template_nx4fvkb",
        formRef.current,
        "zmPiRmxRkScwdiYFX",
      )
      .then(() => {
        setIsSending(false);
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
          formRef.current?.reset();
        }, 3000);
      })
      .catch((error: unknown) => {
        setIsSending(false);
        console.error("EmailJS Error:", error);
        alert("Direct uplink failed. Please email dte.solutions.llc@gmail.com");
      });
  };

  return (
    <div
      className={`fixed inset-0 z-[3000] flex items-center justify-center bg-black/90 backdrop-blur-[10px] transition-all duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <div
        className={`main-modal relative w-[95%] max-w-[950px] max-h-[85vh] bg-[#1e293b] rounded-xl flex border border-accent/20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 ${isOpen ? "scale-100" : "scale-95"}`}
      >
        {/* Loading Overlay */}
        {isSending && (
          <div className="absolute inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <Icon
              icon="svg-spinners:90-ring-with-bg"
              className="text-6xl text-accent"
            />
          </div>
        )}

        {/* Success Overlay */}
        {isSuccess && (
          <div className="absolute inset-0 z-[100] flex flex-col items-center justify-center bg-accent text-black font-black uppercase tracking-widest text-center px-10">
            <Icon icon="solar:check-circle-bold" className="text-8xl mb-6" />
            <h2 className="text-3xl mb-4 font-orbitron">Uplink Successful</h2>
            <p className="text-sm">Response protocol initiated</p>
          </div>
        )}

        <div
          className={`modal__half modal__about w-1/2 p-[35px] flex flex-col justify-center bg-accent text-black hidden md:flex transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isAnimating ? "translate-x-0 opacity-100 scale-100" : "-translate-x-[150%] opacity-0 scale-90"}`}
        >
          <h3 className="modal__title text-2xl font-bold mb-4 uppercase tracking-widest font-orbitron">
            Drew T Ernst
          </h3>
          <h4 className="modal__sub-title text-black/60 font-bold mb-4 uppercase tracking-widest text-[10px]">
            Frontend Developer
          </h4>
          <p className="modal__para leading-relaxed text-black/80 text-sm font-medium">
            Specialized in high-fidelity frontend architecture and immersive
            user experiences. Teaching digital geometry to render at peak human
            emotion.
          </p>
        </div>

        <div
          className={`modal__half modal__contact w-full md:w-1/2 p-[35px] flex flex-col justify-center bg-[#1e293b] text-[#d7e3fc] relative transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isAnimating ? "translate-x-0 opacity-100 scale-100" : "translate-x-[150%] opacity-0 scale-90"}`}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-8 text-3xl cursor-pointer text-accent transition-transform z-50 p-2 group/close"
          >
            <Icon
              icon="bi:x-lg"
              className="modal__exit block transition-transform duration-300 group-hover/close:rotate-90 group-hover/close:scale-110"
            />
          </button>
          <h3 className="modal__title text-2xl font-bold mb-6 uppercase tracking-widest text-accent font-orbitron">
            Contact
          </h3>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="form__item">
              <label className="block text-[9px] font-bold uppercase mb-1 text-accent tracking-[0.2em]">
                Name
              </label>
              <input
                className="w-full p-3 bg-white border border-accent/20 rounded text-black font-bold outline-none font-mono text-xs uppercase placeholder:text-black/30"
                placeholder="NAME..."
                name="user_name"
                type="text"
                required
              />
            </div>
            <div className="form__item">
              <label className="block text-[9px] font-bold uppercase mb-1 text-accent tracking-[0.2em]">
                Email
              </label>
              <input
                className="w-full p-3 bg-white border border-accent/20 rounded text-black font-bold outline-none font-mono text-xs uppercase placeholder:text-black/30"
                placeholder="EMAIL..."
                name="user_email"
                type="email"
                required
              />
            </div>
            <div className="form__item">
              <label className="block text-[9px] font-bold uppercase mb-1 text-accent tracking-[0.2em]">
                Message
              </label>
              <textarea
                className="w-full p-3 bg-white border border-accent/20 rounded text-black font-bold outline-none h-32 font-mono text-xs uppercase placeholder:text-black/30"
                placeholder="MESSAGE..."
                name="message"
                required
              ></textarea>
            </div>
            <button
              disabled={isSending}
              className="w-full py-3 border-2 border-accent text-accent font-bold uppercase tracking-widest hover:bg-accent hover:text-black transition-all text-xs disabled:opacity-50"
            >
              {isSending ? "Uplinking..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

