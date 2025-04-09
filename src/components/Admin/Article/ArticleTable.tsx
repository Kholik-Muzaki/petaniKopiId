import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

// Definisi tipe untuk artikel
interface Article {
    id: number;
    title: string;
    image?: string;
    date: string;
    author: string;
    content: string;
}

const ArticleTable = ({ articles, onDelete }: { articles: Article[], onDelete: (id: number) => void }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">📄 Daftar Artikel</h2>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-200 text-gray-700">
                        <th className="p-3">Gambar</th>
                        <th className="p-3">Judul</th>
                        <th className="p-3">Tanggal</th>
                        <th className="p-3">Penulis</th>
                        <th className="p-3">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map((article) => (
                        <tr key={article.id} className="border-t text-center hover:bg-gray-100 transition">
                            <td className="p-3">
                                {article.image ? (
                                    <img src={article.image} alt={article.title} className="w-16 h-16 object-cover rounded-lg" />
                                ) : (
                                    "❌"
                                )}
                            </td>
                            <td className="p-3 font-semibold">{article.title}</td>
                            <td className="p-3">{article.date}</td>
                            <td className="p-3">{article.author}</td>
                            <td className="p-3 flex justify-center gap-3">
                                <Link to={`/admin/artikel/edit/${article.id}`} className="text-blue-500 hover:text-blue-700">
                                    <FaEdit />
                                </Link>
                                <button onClick={() => onDelete(article.id)} className="text-red-500 hover:text-red-700">
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ArticleTable;
