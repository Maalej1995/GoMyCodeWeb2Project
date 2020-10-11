import { v4 as uuidv4 } from 'uuid';

export const briefProductsList = [
    { id: uuidv4(), productType: "PC", imageSrc: "https://www.hoa-magazine.com/uploads/content/1560509330_media.jpg", manufacturer: "ASUS", reference: "Zenbook Pro Duo", processor: "Intel Core i9", ram: "32 Go", graphic: "Nvidia GeForce RTX 2060" },
    { id: uuidv4(), productType: "PC", imageSrc: "https://storage-asset.msi.com/global/picture/image/feature/nb/2020_CML/GE/GE66/01-kv-nb.png", manufacturer: "MSI", reference: "GE66", processor: "Intel Core i7", ram: "16 Go", graphic: "Nvidia GeForce RTX 2070" },
    { id: uuidv4(), productType: "MOUSE", imageSrc: "https://www.londondrugs.com/on/demandware.static/-/Sites-londondrugs-master/default/dwc5b4fb92/products/L0252937/large/L0252937.JPG", manufacturer: "MOUSE", reference: "Mouse 1", rgb: "Yes", dpi: 4500 },
    { id: uuidv4(), productType: "MOUSE", imageSrc: "https://www.grootgadgets.com/wp-content/uploads/2018/08/zerodate-x300gy-gaming-mouse.jpg", manufacturer: "MOUSE", reference: "Mouse 2", rgb: "Yes", dpi: 6000 },
    { id: uuidv4(), productType: "KEYBOARD", imageSrc: "https://i5.walmartimages.com/asr/a6a1dd9b-4ac1-4e83-b2d2-d08e9409a63f_1.c51120d5a76438761cfb06662c1ad9f0.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff", manufacturer: "KEYBOARD", reference: "Keyboard 1", rgb: "Yes" },
    { id: uuidv4(), productType: "KEYBOARD", imageSrc: "https://images-na.ssl-images-amazon.com/images/I/71sb3zHHnEL._AC_SY355_.jpg", manufacturer: "KEYBOARD", reference: "Keyboard 2", rgb: "Yes" }
]

export const briefProductsListReducer = (state = briefProductsList, action) => {
    const updatedState = briefProductsList
    console.log(updatedState);
    console.log(updatedState.filter(product => product.productType === action.type));
    switch (action.type) {
        case "PC":
            return updatedState.filter(product => product.productType === action.type);
        case "MOUSE":
            return updatedState.filter(product => product.productType === action.type);
        case "KEYBOARD":
            return updatedState.filter(product => product.productType === action.type);
        default:
            return []
    }
}
