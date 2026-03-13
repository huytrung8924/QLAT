// Default sample data
const defaultProducts = [
  {
    id: "1",
    name: "ERO Riverside Liền kề A1",
    category: "lien_ke",
    price: 4500000000,
    area: 100,
    bedrooms: 4,
    bathrooms: 3,
    description:
      "Căn liền kề sang trọng 4 tầng với thiết kế hiện đại, tầng 1 làm shophouse, các tầng trên dùng để ở. Căn hộ có view đẹp, thoáng mát, tiếp giáp với công viên và hồ điều hòa.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
    ],
    createdAt: Date.now(),
  },
  {
    id: "2",
    name: "ERO Riverside Liền kề A2",
    category: "lien_ke",
    price: 4800000000,
    area: 105,
    bedrooms: 4,
    bathrooms: 3,
    description:
      "Căn liền kề view hồ điều hòa, thiết kế tinh tế, sử dụng vật liệu cao cấp. Tầng 1 có không gian mở, phù hợp kinh doanh hoặc làm showroom.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800",
    ],
    createdAt: Date.now(),
  },
  {
    id: "3",
    name: "ERO Riverside Liền kề B1",
    category: "lien_ke",
    price: 5200000000,
    area: 120,
    bedrooms: 5,
    bathrooms: 4,
    description:
      "Căn liền kề góc, diện tích rộng rãi, thiết kế 5 tầng hiện đại. Có garage ô tô, thang máy riêng, view thoáng đãng cả 4 mặt.",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800",
    ],
    createdAt: Date.now(),
  },
  {
    id: "4",
    name: "ERO Riverside Shophouse C1",
    category: "shophouse",
    price: 8500000000,
    area: 150,
    bedrooms: 4,
    bathrooms: 3,
    description:
      "Shophouse mặt phố thương mại, vị trí đắc địa ngay trung tâm khu đô thị. Tầng 1+2 kinh doanh, tầng 3+4+5 ở. Phù hợp các thương hiệu lớn.",
    images: [
      "https://i.pinimg.com/736x/c3/ea/f8/c3eaf8110325a3e7a4e222e49dda359b.jpg",
      "https://i.pinimg.com/736x/d2/7c/2c/d27c2cedf406b202ecebf220b8fd6885.jpg",
      "https://i.pinimg.com/736x/cb/12/75/cb1275577e5f5ed34a1b75ef22f20363.jpg",
    ],
    createdAt: Date.now(),
  },
  {
    id: "5",
    name: "ERO Riverside Shophouse C2",
    category: "shophouse",
    price: 9000000000,
    area: 160,
    bedrooms: 5,
    bathrooms: 4,
    description:
      "Shophouse góc mặt phố, diện tích lớn, thiết kế sang trọng. Vị trí 2 mặt tiền, giá trị thương mại cao. Phù hợp trung tâm thương mại.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800",
      "https://images.unsplash.com/photo-1600047509782-20d39509f26d?w=800",
    ],
    createdAt: Date.now(),
  },
  {
    id: "6",
    name: "ERO Riverside Shophouse C3",
    category: "shophouse",
    price: 12000000000,
    area: 200,
    bedrooms: 6,
    bathrooms: 5,
    description:
      "Shophouse cao cấp, thiết kế đặc biệt, có sân thượng và roof garden. Vị trí ngay cổng chính dự án, tiềm năng kinh doanh cao nhất.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800",
    ],
    createdAt: Date.now(),
  },
  {
    id: "7",
    name: "ERO Riverside Biệt thự D1",
    category: "biet_thu",
    price: 18000000000,
    area: 350,
    bedrooms: 5,
    bathrooms: 5,
    description:
      "Biệt thự đơn lập cao cấp, thiết kế cổ điển châu Âu. Có vườn riêng, garage 2 ô tô, hồ bơi mini. Tiêu chuẩn khách sạn 5 sao.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
    ],
    createdAt: Date.now(),
  },
  {
    id: "8",
    name: "ERO Riverside Biệt thự D2",
    category: "biet_thu",
    price: 22000000000,
    area: 400,
    bedrooms: 6,
    bathrooms: 6,
    description:
      "Biệt thự song lập, thiết kế hiện đại, không gian mở. Bao gồm 3 tầng, basement, và rooftop. View hồ điều hòa cực đẹp.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800",
    ],
    createdAt: Date.now(),
  },
  {
    id: "9",
    name: "ERO Riverside Biệt thự D3",
    category: "biet_thu",
    price: 28000000000,
    area: 500,
    bedrooms: 7,
    bathrooms: 7,
    description:
      "Biệt thự Presidential, đỉnh cao của sự sang trọng. Thiết kế độc đáo, vật liệu cao cấp nhập khẩu. Có hồ bơi, spa, gym riêng.",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800",
    ],
    createdAt: Date.now(),
  },
];

const defaultGallery = [
  {
    id: "1",
    type: "image",
    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    title: "Toàn cảnh dự án ERO Riverside",
    createdAt: Date.now(),
  },
  {
    id: "2",
    type: "image",
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    title: "Khu shophouse thương mại",
    createdAt: Date.now(),
  },
  {
    id: "3",
    type: "image",
    url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
    title: "Căn hộ mẫu nội thất",
    createdAt: Date.now(),
  },
  {
    id: "4",
    type: "image",
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    title: "Khu biệt thự",
    createdAt: Date.now(),
  },
  {
    id: "5",
    type: "image",
    url: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800",
    title: "Hồ điều hòa trung tâm",
    createdAt: Date.now(),
  },
  {
    id: "6",
    type: "image",
    url: "https://i.pinimg.com/1200x/6b/be/e3/6bbee3724053905fca6e7214611465bd.jpg",
    title: "Công viên cây xanh",
    createdAt: Date.now(),
  },
  {
    id: "7",
    type: "image",
    url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
    title: "Khu vui chơi trẻ em",
    createdAt: Date.now(),
  },
  {
    id: "8",
    type: "image",
    url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
    title: "Phòng gym cao cấp",
    createdAt: Date.now(),
  },
  {
    id: "9",
    type: "image",
    url: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800",
    title: "Sảnh đón sang trọng",
    createdAt: Date.now(),
  },
  {
    id: "10",
    type: "image",
    url: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800",
    title: "Bể bơi ngoài trời",
    createdAt: Date.now(),
  },
  {
    id: "11",
    type: "image",
    url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
    title: "Khu thương mại",
    createdAt: Date.now(),
  },
  {
    id: "12",
    type: "image",
    url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800",
    title: "An ninh 24/7",
    createdAt: Date.now(),
  },
];

const defaultMapConfig = {
  latitude: 20.958,
  longitude: 105.9173,
  address: "ERO Riverside - Hà Nội – Bắc Ninh",
  diagramImage:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
};

// Products
export const getProducts = () => {
  const stored = localStorage.getItem("ero_products");
  if (!stored) {
    localStorage.setItem("ero_products", JSON.stringify(defaultProducts));
    return defaultProducts;
  }
  return JSON.parse(stored);
};

export const saveProducts = (products) => {
  localStorage.setItem("ero_products", JSON.stringify(products));
};

export const addProduct = (product) => {
  const products = getProducts();
  const newProduct = {
    ...product,
    id: Date.now().toString(),
    createdAt: Date.now(),
  };
  products.push(newProduct);
  saveProducts(products);
  return newProduct;
};

export const updateProduct = (id, updatedProduct) => {
  const products = getProducts();
  const index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    saveProducts(products);
  }
  return products[index];
};

export const deleteProduct = (id) => {
  const products = getProducts();
  const filtered = products.filter((p) => p.id !== id);
  saveProducts(filtered);
};

// Gallery
export const getGallery = () => {
  const stored = localStorage.getItem("ero_gallery");
  if (!stored) {
    localStorage.setItem("ero_gallery", JSON.stringify(defaultGallery));
    return defaultGallery;
  }
  return JSON.parse(stored);
};

export const saveGallery = (gallery) => {
  localStorage.setItem("ero_gallery", JSON.stringify(gallery));
};

export const addGalleryItem = (item) => {
  const gallery = getGallery();
  const newItem = { ...item, id: Date.now().toString(), createdAt: Date.now() };
  gallery.push(newItem);
  saveGallery(gallery);
  return newItem;
};

export const deleteGalleryItem = (id) => {
  const gallery = getGallery();
  const filtered = gallery.filter((item) => item.id !== id);
  saveGallery(filtered);
};

// Map Config
export const getMapConfig = () => {
  const stored = localStorage.getItem("ero_map");
  if (!stored) {
    localStorage.setItem("ero_map", JSON.stringify(defaultMapConfig));
    return defaultMapConfig;
  }
  return JSON.parse(stored);
};

export const saveMapConfig = (config) => {
  localStorage.setItem("ero_map", JSON.stringify(config));
};

// Registrations
export const getRegistrations = () => {
  const stored = localStorage.getItem("ero_registrations");
  if (!stored) {
    return [];
  }
  return JSON.parse(stored);
};

export const addRegistration = (registration) => {
  const registrations = getRegistrations();
  const newRegistration = {
    ...registration,
    id: Date.now().toString(),
    createdAt: Date.now(),
  };
  registrations.push(newRegistration);
  localStorage.setItem("ero_registrations", JSON.stringify(registrations));
  return newRegistration;
};

// Admin
export const checkAdmin = (username, password) => {
  return username === "admin" && password === "admin";
};
