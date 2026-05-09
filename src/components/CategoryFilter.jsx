function CategoryFilter({categories, activeCategory, setActiveCategory}){
    return(
        <section className="category-list">
            {categories.map((category)=>(
                <button
                    key = {category.label}
                    className = {
                        activeCategory.label === category.label ? "category-button-active" : "category-button"
                    }
                    onClick={()=>setActiveCategory(category)}
                >
                    {category.label}
                </button>
            ))}
        </section>
    );
}

export default CategoryFilter;