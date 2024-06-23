import axios from "axios";

export const getMenuProduct = async (language, productType, setProduct) => {
  await axios
    .post("https://aa.itcode.am/api/view_products.php", [
      {
        token:
          "2d9a50711dc4c7cb400af8d6a7d64beeebcd1860d1a0ee24e67fd6a274d6ce30",
        language: language,
        product_group: productType,
      },
    ])
    .then((response) => {
      setProduct(response.data.products);
    })
    .catch((error) => {
      console.error("Error fetching hot dishes products:", error);
    });
};
