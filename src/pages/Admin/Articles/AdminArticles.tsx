import { useState } from "react";
import Layout from "../../../Layout/Layout";
import { FaPlus } from "react-icons/fa";
import ArticleForm from "../../../components/Admin/Article/ArticleForm";
import ArticleTable from "../../../components/Admin/Article/ArticleTable";

const dummyArticles = [
    { id: 1, title: "Rahasia Menyeduh Kopi", image: "https://source.unsplash.com/100x100/?coffee", date: "2025-03-20", author: "Admin", content: "Cara menyeduh kopi dengan benar..." },
    { id: 2, title: "Kopi vs Teh", image: "https://source.unsplash.com/100x100/?tea", date: "2025-03-18", author: "Admin", content: "Perbandingan kopi dan teh..." },
];

const AdminArticles = () => {
    const [articles, setArticles] = useState(dummyArticles);
    const [selectedArticle, setSelectedArticle] = useState(null);

    const handleDelete = (id: number) => {
        setArticles(articles.filter((article) => article.id !== id));
    };

    const handleAddOrEdit = (article: any) => {
        if (article.id) {
            setArticles(articles.map((a) => (a.id === article.id ? article : a)));
        } else {
            setArticles([...articles, { ...article, id: articles.length + 1 }]);
        }
        setSelectedArticle(null);
    };

    return (
        <Layout>
            <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Kelola Artikel</h1>
                <button onClick={() => setSelectedArticle(null)} className="bg-green-500 text-white px-4 py-2 rounded-lg mb-4 flex items-center gap-2 hover:bg-green-600 transition">
                    <FaPlus /> Tambah Artikel
                </button>
                {selectedArticle ? <ArticleForm article={selectedArticle} onSubmit={handleAddOrEdit} /> : <ArticleTable articles={articles} onDelete={handleDelete} />}
            </div>
        </Layout>
    );
};

export default AdminArticles;
