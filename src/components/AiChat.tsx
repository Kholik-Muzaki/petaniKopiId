import { useState, useEffect } from "react";
import { getGroqChatCompletion } from "../utils/groqHelper";
import { FaPaperPlane, FaRobot, FaUser, FaComments } from "react-icons/fa";

interface Message {
    role: "user" | "ai";
    content: string;
}

const AiChat = () => {
    const [question, setQuestion] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Pesan Pembuka dari AI
        setMessages([
            { role: "ai", content: "Halo! Saya siap membantu menjawab pertanyaan tentang kopi. Silakan tanyakan sesuatu!" }
        ]);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!question.trim()) return;

        const newMessages: Message[] = [...messages, { role: "user", content: question }];
        setMessages(newMessages);
        setQuestion("");
        setLoading(true);

        try {
            const response = await getGroqChatCompletion(question);
            setMessages((prevMessages) => [...prevMessages, { role: "ai", content: response }]);
        } catch (error) {
            setMessages((prevMessages) => [...prevMessages, { role: "ai", content: "Maaf, terjadi kesalahan. Coba lagi nanti." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-green-600 text-white p-5 text-center font-bold text-xl flex items-center justify-center">
                <FaComments className="mr-2 text-2xl" />
                Tanya AI - PetaniKopi.id
            </div>

            {/* Chat Box */}
            <div className="h-[500px] overflow-y-auto p-5 bg-gradient-to-b from-gray-50 to-gray-200">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-start my-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                        {msg.role === "ai" && <FaRobot className="text-green-500 text-2xl mr-2" />}
                        <div className={`max-w-[70%] p-4 rounded-lg shadow-md ${msg.role === "user" ? "bg-green-500 text-white" : "bg-white text-gray-800 border"}`}>
                            <p>{msg.content}</p>
                        </div>
                        {msg.role === "user" && <FaUser className="text-gray-500 text-2xl ml-2" />}
                    </div>
                ))}

                {loading && (
                    <div className="flex justify-start">
                        <div className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md animate-pulse">
                            <p>AI sedang mengetik...</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="flex items-center p-4 border-t bg-white">
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ketik pertanyaan tentang kopi..."
                    className="flex-grow p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button type="submit" className="ml-3 bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition">
                    <FaPaperPlane />
                </button>
            </form>
        </div>
    );
};

export default AiChat;
