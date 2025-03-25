type FilterBarProps = {
    setSelectedCategory: (category: string | null) => void;
};

const categories = ["Semua", "Tips", "Sejarah", "Resep", "Bisnis"];

const FilterBar = ({ setSelectedCategory }: FilterBarProps) => {
    return (
        <div className="container mx-auto px-4 py-6 flex space-x-3 overflow-x-auto">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setSelectedCategory(category === "Semua" ? null : category)}
                    className="px-4 py-2 text-sm font-semibold bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md hover:bg-green-500 hover:text-white transition"
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default FilterBar;
