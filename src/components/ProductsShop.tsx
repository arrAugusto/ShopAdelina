import { BodyShop } from "./bodyform/BodyShop";
import { FooterShop } from "./Template/footer/Footer";
import { TemplateShop } from "./Template/navBar/TemplateShop";

export const ProductsShop = () => {
  return (
    <>
      <div className="header-container">
        <TemplateShop />
        <BodyShop />
      </div>

      <FooterShop />
    </>
  );
};
