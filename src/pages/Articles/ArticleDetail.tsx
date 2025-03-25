import { useParams } from "react-router-dom";
import { articleData } from "../../data/data";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NotFound from "../NotFound/NotFound";

const ArticleDetail: React.FC = () => {
    const { id } = useParams<{ id?: string }>(); // Gunakan '?' untuk keamanan
    const article = articleData.find((item) => item.id === Number(id));

    // Jika artikel tidak ditemukan, tampilkan halaman NotFound
    if (!article) {
        return <NotFound />;
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50">
                <header
                    className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
                    style={{ backgroundImage: `url(${article?.image || "https://source.unsplash.com/800x600/?coffee"} )` }}
                >
                    <div className="absolute inset-0 bg-black/50"></div>
                    <h1 className="relative text-5xl font-extrabold text-white text-center">
                        {article?.title || "Artikel Tidak Ditemukan"}
                    </h1>
                </header>

                <div className="container mx-auto px-6 py-12 max-w-3xl">
                    <p className="text-gray-500 text-sm mb-2">
                        {article?.date} • {article?.author}
                    </p>

                    <article className="text-lg text-gray-700 leading-relaxed text-justify space-y-6">
                        {article?.content.split("\n").map((paragraph, index) => (
                            <p key={index} className="transition-all duration-300 hover:scale-[1.01]">{paragraph}</p>
                        ))}
                    </article>
                </div>

                <div className="container mx-auto px-6 py-12 max-w-3xl">
                    <a href="/artikel" className="text-green-500 font-semibold hover:underline">
                        ← Kembali ke Artikel
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ArticleDetail;
