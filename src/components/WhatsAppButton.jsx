
const phone = "14703368172"; // Reemplaza por tu número en formato internacional
const message = "¡Hola! Quiero más información.";

const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50"
    aria-label="WhatsApp"
  >
    <div className="bg-green-500 hover:bg-green-600 transition-colors duration-200 rounded-full shadow-lg p-0.5">
      <div className="flex items-center justify-center w-16 h-16">
        <svg
          viewBox="0 0 32 32"
          width="38"
          height="38"
          fill="currentColor"
          className="text-white"
        >
         
          <path
            d="M22.1 19.7c-.3-.2-1.7-.8-2-1-.3-.1-.5-.2-.7.2-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.3-.8-.7-1.4-1.5-1.6-1.8-.2-.3-.1-.5.1-.7.1-.1.3-.4.5-.6.2-.2.2-.3.3-.5.1-.2.1-.4 0-.6-.1-.2-.7-1.7-.9-2.3-.2-.6-.4-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.2.2-1.1 1.1-1.1 2.7 0 1.6 1.2 3.1 1.4 3.3.2.2 2.3 3.5 5.7 3.7 3.4.2 4.1-2.1 4.2-2.4.1-.3.1-.5 0-.6z"
            fill="#fff"
          />
        </svg>
      </div>
    </div>
  </a>
);

export default WhatsAppButton;
