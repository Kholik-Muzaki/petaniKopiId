import image from "../image";

// Definisi tipe untuk artikel
export interface Article {
    id: number;
    title: string;
    image?: string;
    date: string;
    author: string;
    content: string;
}

// Data artikel
export const articleData: Article[] = [
    {
        id: 1,
        title: "Strategi Tata Kelola Perkebunan Kopi yang Berkelanjutan",
        image: image.about,
        date: "March 25, 2025",
        author: "Kholik Muzaki",
        content: `
            Tata kelola perkebunan kopi yang baik adalah kunci utama dalam menghasilkan biji kopi berkualitas tinggi. Petani harus memahami berbagai faktor seperti pemilihan varietas kopi, kondisi tanah, dan pola tanam yang tepat agar hasil panen optimal. Tanaman kopi membutuhkan sinar matahari yang cukup, namun juga harus terlindungi dari suhu ekstrem yang dapat mempengaruhi pertumbuhannya.

            Salah satu langkah penting dalam pengelolaan perkebunan adalah menjaga kualitas tanah. Tanah yang subur dan kaya akan unsur hara sangat berpengaruh terhadap cita rasa kopi yang dihasilkan. Oleh karena itu, petani kopi sering menggunakan pupuk organik seperti kompos dan pupuk kandang untuk meningkatkan kesuburan tanah tanpa merusak ekosistem.

            Selain itu, teknik irigasi yang tepat juga harus diterapkan untuk menghindari kekeringan atau kelebihan air. Sistem pengairan tetes atau pemanfaatan aliran air alami dapat membantu menjaga kelembaban tanah agar tanaman kopi tetap tumbuh dengan baik. Penggunaan mulsa alami dari daun-daun yang gugur juga dapat membantu menjaga kelembaban dan mengurangi erosi tanah.

            Pengelolaan hama dan penyakit juga menjadi bagian penting dalam tata kelola perkebunan kopi. Petani biasanya menerapkan metode pengendalian hayati dengan memanfaatkan musuh alami hama atau menggunakan pestisida organik yang lebih ramah lingkungan. Pendekatan ini tidak hanya melindungi tanaman tetapi juga menjaga keseimbangan ekosistem.

            Terakhir, praktik panen dan pascapanen yang baik akan sangat mempengaruhi kualitas biji kopi. Pemetikan harus dilakukan secara selektif hanya pada buah yang benar-benar matang. Setelah itu, biji kopi harus dikeringkan dengan metode yang sesuai seperti natural drying atau washed process agar menghasilkan cita rasa yang optimal. Dengan tata kelola yang baik, petani dapat meningkatkan produktivitas dan kualitas kopi yang dihasilkan secara berkelanjutan.
        `,
    },
    {
        id: 2,
        title: "Pentingnya Konservasi Lingkungan dalam Perkebunan Kopi",
        image: image.hero3,
        date: "March 20, 2025",
        author: "Kholik Muzaki",
        content: `
            Konservasi lingkungan merupakan bagian penting dalam tata kelola perkebunan kopi yang berkelanjutan. Keanekaragaman hayati di sekitar perkebunan harus dijaga untuk memastikan ekosistem tetap seimbang. Salah satu cara yang bisa dilakukan adalah dengan menerapkan sistem agroforestri, di mana tanaman kopi ditanam bersama dengan pohon peneduh untuk menjaga kesuburan tanah.

            Tanah yang subur dan sehat sangat berpengaruh terhadap kualitas kopi yang dihasilkan. Oleh karena itu, petani dianjurkan untuk menghindari penggunaan bahan kimia berlebihan yang dapat merusak struktur tanah dan mencemari sumber air. Sebagai gantinya, pupuk organik dan teknik pertanian alami seperti rotasi tanaman dapat diterapkan untuk menjaga keseimbangan ekosistem.

            Air merupakan sumber daya yang sangat penting dalam perkebunan kopi. Penggunaan air yang efisien dalam proses penyiraman dan pengolahan biji kopi harus diperhatikan agar tidak terjadi pemborosan. Sistem irigasi tetes atau pemanfaatan air hujan dapat membantu mengurangi konsumsi air yang berlebihan sekaligus menjaga ketersediaan air bagi lingkungan sekitar.

            Selain itu, pengelolaan limbah perkebunan juga harus menjadi prioritas dalam tata kelola yang berkelanjutan. Limbah dari proses pengolahan kopi seperti kulit buah kopi dan ampas kopi dapat diolah kembali menjadi pupuk organik atau sumber energi alternatif. Dengan cara ini, limbah yang dihasilkan dapat bermanfaat dan tidak mencemari lingkungan.

            Dengan menerapkan prinsip-prinsip konservasi lingkungan, petani tidak hanya dapat meningkatkan hasil produksi tetapi juga berkontribusi dalam menjaga kelestarian alam. Tata kelola perkebunan yang ramah lingkungan akan memastikan bahwa sumber daya alam tetap terjaga untuk generasi mendatang dan menjadikan industri kopi lebih berkelanjutan.
        `,
    },
    {
        id: 3,
        title: "Teknik Pemangkasan yang Efektif untuk Tanaman Kopi",
        image: image.hero2,
        date: "March 15, 2025",
        author: "Kholik Muzaki",
        content: `
            Pemangkasan adalah salah satu teknik penting dalam budidaya kopi yang bertujuan untuk meningkatkan produktivitas dan kesehatan tanaman. Tanaman kopi yang dibiarkan tumbuh tanpa pemangkasan akan mengalami pertumbuhan yang tidak terkendali dan mengurangi hasil panen.

            Pemangkasan dilakukan untuk menghilangkan cabang yang tidak produktif, meningkatkan sirkulasi udara, dan memungkinkan sinar matahari masuk ke dalam kanopi tanaman. Hal ini akan membantu dalam mencegah serangan hama dan penyakit.

            Teknik pemangkasan yang umum dilakukan antara lain pemangkasan bentuk, pemangkasan produksi, dan pemangkasan peremajaan. Pemangkasan bentuk dilakukan untuk membentuk struktur tanaman saat masih muda, sedangkan pemangkasan produksi bertujuan untuk meningkatkan hasil panen. Pemangkasan peremajaan dilakukan untuk memperbaharui tanaman yang sudah tua.

            Waktu pemangkasan juga sangat berpengaruh terhadap hasil panen. Pemangkasan biasanya dilakukan setelah panen untuk memberikan waktu pemulihan bagi tanaman sebelum memasuki musim berbunga.

            Dengan teknik pemangkasan yang benar, petani dapat memastikan bahwa tanaman kopi tetap sehat, produktif, dan menghasilkan biji kopi berkualitas tinggi.
        `,
    },
    {
        id: 4,
        title: "Pengaruh Ketinggian terhadap Kualitas Kopi",
        image: image.hero1,
        date: "March 10, 2025",
        author: "Kholik Muzaki",
        content: `
            Ketinggian tempat tumbuh sangat mempengaruhi kualitas dan karakter rasa kopi. Kopi yang ditanam di daerah tinggi cenderung memiliki tingkat keasaman yang lebih baik serta rasa yang lebih kompleks dibandingkan kopi dari daerah dataran rendah.

            Pada ketinggian di atas 1.200 meter, suhu udara lebih dingin sehingga proses pematangan buah kopi menjadi lebih lambat. Hal ini memungkinkan biji kopi menyerap lebih banyak nutrisi, menghasilkan cita rasa yang lebih kaya.

            Kopi dari daerah tinggi seperti Gayo, Toraja, dan Flores terkenal karena memiliki profil rasa yang khas dengan aroma yang lebih kuat dan kompleksitas yang lebih tinggi.

            Petani harus memahami pengaruh ketinggian dalam memilih varietas kopi yang tepat serta teknik pengelolaan yang sesuai agar dapat menghasilkan kopi dengan kualitas terbaik.
        `,
    }
];
