import React from "react";
import ArticleCard from "../../components/ArticleCard";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { articleData, Article } from "../../data/data";
import image from "../../image";

const Articles: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50">
                {/* Header dengan gambar background */}
                <header
                    className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
                    style={{ backgroundImage: `url(${image.hero || "/default-header.jpg"})` }}
                >
                    <div className="absolute inset-0 bg-black/50"></div>
                    <h1 className="relative text-5xl font-extrabold text-white text-center">
                        Edukasi Kopi
                    </h1>
                </header>

                {/* Konten artikel */}
                <div className="container mx-auto px-6 py-12">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
                        Artikel Terbaru
                    </h2>

                    {/* Jika articleData kosong, tampilkan pesan */}
                    {articleData.length === 0 ? (
                        <p className="text-center text-gray-600">Belum ada artikel tersedia.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {articleData.map((article: Article) => (
                                <ArticleCard key={article.id} article={article} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Articles;
