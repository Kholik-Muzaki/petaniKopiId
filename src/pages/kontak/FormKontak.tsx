import { useState } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaYoutube, FaChevronDown } from "react-icons/fa";

const FormKontak = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [faqOpen, setFaqOpen] = useState<number | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Data Terkirim:", formData);
        setIsSubmitted(true);
    };

    // Data FAQ
    const faqs = [
        { question: "Bagaimana cara menjadi anggota PetaniKopi.id?", answer: "Anda bisa mendaftar melalui halaman registrasi di website kami." },
        { question: "Apakah ada komunitas petani yang bisa saya ikuti?", answer: "Ya! Kami memiliki komunitas yang bisa Anda akses melalui forum atau grup WhatsApp." },
        { question: "Bagaimana jika saya ingin bermitra dengan PetaniKopi.id?", answer: "Silakan hubungi kami melalui email atau WhatsApp untuk informasi lebih lanjut." },
    ];

    return (
        <section className="py-16 px-5 mt-7 lg:px-20 bg-gray-100 text-gray-800">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Hubungi <span className="text-green-500">Kami</span></h2>
                <p className="mt-3 text-gray-600">Kami siap membantu Anda dalam perjalanan sebagai petani kopi!</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Formulir Kontak */}
                <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Kirim Pesan</h3>
                    {isSubmitted ? (
                        <p className="text-green-600 text-center">Terima kasih! Kami akan segera menghubungi Anda.</p>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text" name="name" placeholder="Nama Anda" required
                                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                                onChange={handleChange}
                            />
                            <input
                                type="email" name="email" placeholder="Email Anda" required
                                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                                onChange={handleChange}
                            />
                            <textarea
                                name="message" rows={4} placeholder="Pesan Anda" required
                                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                                onChange={handleChange}
                            ></textarea>
                            <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded-md w-full hover:bg-green-600 transition">
                                Kirim Pesan
                            </button>
                        </form>
                    )}
                </div>

                {/* Informasi Kontak */}
                <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Informasi Kontak</h3>
                    <p className="text-gray-600 mb-4">Jika Anda memiliki pertanyaan atau butuh bantuan, silakan hubungi kami melalui informasi di bawah ini.</p>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <FaMapMarkerAlt className="text-green-500 text-lg" />
                            <p>Jl. R. Sumardi, Trimulyo, Lampung Barat</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FaPhone className="text-green-500 text-lg" />
                            <p>+62 812-3456-7890</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FaEnvelope className="text-green-500 text-lg" />
                            <p>support@petanikopi.id</p>
                        </div>
                    </div>

                    {/* Social Media */}
                    <h3 className="text-xl font-semibold mt-6 mb-4">Ikuti Kami</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-blue-600 text-2xl hover:text-blue-800 transition"><FaFacebook /></a>
                        <a href="#" className="text-pink-500 text-2xl hover:text-pink-700 transition"><FaInstagram /></a>
                        <a href="#" className="text-green-500 text-2xl hover:text-green-700 transition"><FaWhatsapp /></a>
                        <a href="#" className="text-red-500 text-2xl hover:text-red-700 transition"><FaYoutube /></a>
                    </div>
                </div>
            </div>

            {/* FAQ Section dengan Animasi Accordion */}
            <div className="mt-16">
                <h3 className="text-2xl font-semibold text-center mb-6">Pertanyaan Umum</h3>
                <div className="space-y-4 max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md cursor-pointer transition-all" onClick={() => setFaqOpen(faqOpen === index ? null : index)}>
                            <div className="flex justify-between items-center">
                                <h4 className="font-semibold">{faq.question}</h4>
                                <FaChevronDown className={`transition-transform duration-300 ${faqOpen === index ? "rotate-180" : ""}`} />
                            </div>
                            {faqOpen === index && <p className="text-gray-600 mt-2 transition-opacity">{faq.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FormKontak;
