import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/16786680646" // Reemplaza con tu número de WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center space-x-2 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M12 2a10 10 0 0 0-8.84 14.92L2 22l5.12-1.36A10 10 0 1 0 12 2Zm0 18c-1.35 0-2.69-.35-3.88-1l-.28-.16-3.04.8.81-3c-.51-.83-.92-1.8-1.11-2.91A7.5 7.5 0 0 1 19.5 12 7.5 7.5 0 0 1 12 20Zm3.7-5.6c-.43-.21-1.31-.64-1.51-.71-.2-.07-.36-.11-.52.11-.16.21-.6.71-.74.86-.14.14-.27.16-.49.05-.21-.11-.87-.32-1.66-1.01-.61-.55-1.02-1.22-1.14-1.42-.12-.21-.01-.32.09-.41.09-.08.21-.22.32-.33.1-.12.14-.2.21-.34.07-.14.03-.26-.02-.37-.05-.11-.52-1.24-.71-1.7-.19-.46-.39-.39-.53-.4h-.44c-.15 0-.39.06-.6.28-.21.22-.8.78-.8 1.92s.82 2.26.94 2.42c.11.15 1.61 2.45 3.9 3.34.54.22.96.35 1.29.45.55.17 1.05.14 1.45.08.44-.07 1.31-.54 1.5-1.07.19-.54.19-1 .14-1.1-.05-.1-.17-.14-.36-.22Z" fill="currentColor"/>
      </svg>
      
    </motion.a>
  );
};

export default WhatsAppButton;
