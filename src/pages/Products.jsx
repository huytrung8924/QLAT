import { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";

function Products({ products }) {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || "all");
  const [sortBy, setSortBy] = useState("newest");
  const [priceRange, setPriceRange] = useState("all");

  const categories = [
    { value: "all", label: "Tất cả" },
    { value: "lien_ke", label: "Liền kề" },
    { value: "shophouse", label: "Shophouse" },
    { value: "biet_thu", label: "Biệt thự" },
  ];

  const priceRanges = [
    { value: "all", label: "Tất cả giá" },
    { value: "0-5000000000", label: "Dưới 5 tỷ" },
    { value: "5000000000-10000000000", label: "5 - 10 tỷ" },
    { value: "10000000000-20000000000", label: "10 - 20 tỷ" },
    { value: "20000000000-99999999999", label: "Trên 20 tỷ" },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by price range
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number);
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "area-asc":
        result.sort((a, b) => a.area - b.area);
        break;
      case "area-desc":
        result.sort((a, b) => b.area - a.area);
        break;
      case "newest":
      default:
        result.sort((a, b) => b.createdAt - a.createdAt);
    }

    return result;
  }, [products, selectedCategory, priceRange, sortBy]);

  const formatPrice = (price) => {
    if (price >= 1000000000) {
      return (price / 1000000000).toFixed(1) + " tỷ";
    }
    return (price / 1000000).toFixed(0) + " triệu";
  };

  const getCategoryLabel = (cat) => {
    const found = categories.find((c) => c.value === cat);
    return found ? found.label : cat;
  };

  return (
    <div className="products-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Danh mục sản phẩm</h1>
          <p>Khám phá các sản phẩm bất động sản tại ERO Riverside</p>
        </div>
      </div>

      {/* Products Section */}
      <section className="section">
        <div className="container">
          {/* Filters and Sort */}
          <div className="products-header">
            <div className="category-tabs">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  className={`category-tab ${selectedCategory === cat.value ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat.value)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="filter-sort">
              <select
                className="filter-select"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>

              <select
                className="filter-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Mới nhất</option>
                <option value="price-asc">Giá: Thấp đến cao</option>
                <option value="price-desc">Giá: Cao đến thấp</option>
                <option value="area-asc">Diện tích: Nhỏ đến lớn</option>
                <option value="area-desc">Diện tích: Lớn đến nhỏ</option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <p style={{ marginBottom: "20px", color: "var(--text-secondary)" }}>
            Tìm thấy <strong>{filteredProducts.length}</strong> sản phẩm
          </p>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img src={product.images[0]} alt={product.name} />
                    <span className="product-badge">
                      {getCategoryLabel(product.category)}
                    </span>
                  </div>
                  <div className="product-content">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">
                      {formatPrice(product.price)}
                    </p>
                    <div className="product-specs">
                      <span className="product-spec">📐 {product.area} m²</span>
                      <span className="product-spec">
                        🛏️ {product.bedrooms} PN
                      </span>
                      <span className="product-spec">
                        🚿 {product.bathrooms} WC
                      </span>
                    </div>
                    <div className="product-actions">
                      <Link
                        to={`/products/detail/${product.id}`}
                        className="btn btn-primary"
                        style={{ flex: 1, justifyContent: "center" }}
                      >
                        Xem chi tiết
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <p style={{ fontSize: "18px", color: "var(--text-secondary)" }}>
                Không tìm thấy sản phẩm nào phù hợp với tiêu chí của bạn.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setPriceRange("all");
                }}
                className="btn btn-secondary"
                style={{ marginTop: "20px" }}
              >
                Xóa bộ lọc
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Products;
