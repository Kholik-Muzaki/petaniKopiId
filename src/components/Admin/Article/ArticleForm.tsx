import { useState } from "react";

interface ArticleFormProps {
    article?: {
        id?: number;
        title: string;
        image?: string;
        date: string;
        author: string;
        content: string;
    };
    onSubmit: (article: any) => void;
}

const ArticleForm = ({ article, onSubmit }: ArticleFormProps) => {
    const [formData, setFormData] = useState(
        article || { title: "", image: "", date: new Date().toISOString().split("T")[0], author: "", content: "" }
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mt-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">{article ? "✏️ Edit Artikel" : "📝 Tambah Artikel"}</h2>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }}>
                <div className="mb-4">
                    <label className="block text-gray-600">Judul</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600">URL Gambar</label>
                    <input type="text" name="image" value={formData.image} onChange={handleChange} className="w-full p-2 border rounded-lg" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600">Tanggal</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600">Penulis</label>
                    <input type="text" name="author" value={formData.author} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600">Konten</label>
                    <textarea name="content" value={formData.content} onChange={handleChange} rows={4} className="w-full p-2 border rounded-lg" required />
                </div>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                    {article ? "Simpan Perubahan" : "Tambah Artikel"}
                </button>
            </form>
        </div>
    );
};

export default ArticleForm;
