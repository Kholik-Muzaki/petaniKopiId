import { Link } from "react-router-dom";

// Definisi tipe untuk artikel
interface Article {
    id: number;
    title: string;
    image?: string;
    date: string;
    author: string;
    content: string;
}

interface ArticleCardProps {
    article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
    // Fungsi untuk memotong teks panjang
    const truncateText = (text: string, maxLength: number): string => {
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    };

    const placeholderImage = "/path-to-default-image.jpg";

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
            <img
                src={article.image || placeholderImage}
                alt={`Gambar artikel: ${article.title}`}
                className="w-full h-52 object-cover"
            />
            <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">{article.title}</h3>
                <p className="text-sm text-gray-500">{article.date} • {article.author}</p>
                <p className="text-gray-600 mt-3">{truncateText(article.content, 100)}</p>
                <Link to={`/artikel/${article.id}`} className="text-green-500 font-semibold mt-3 block hover:underline">
                    Baca selengkapnya →
                </Link>
            </div>
        </div>
    );
};

export default ArticleCard;
