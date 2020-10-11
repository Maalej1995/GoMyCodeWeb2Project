import { briefProductsList } from './briefProductsList'

const detailedProductsList = [
    { id: briefProductsList[0].id, imageSrc: "https://www.hoa-magazine.com/uploads/content/1560509330_media.jpg", manufacturer: "ASUS", reference: "Zenbook Pro Duo", screen: "15,6'' 4K UHD Tactile", processor: "Intel Core i9-10980HK 16 Mo Cache", ram: "32 Go DDR4", graphic: "Nvidia GeForce RTX 2060 6 Go", disk: "1 To SSD", price: 6000 },
    { id: briefProductsList[1].id, imageSrc: "https://storage-asset.msi.com/global/picture/image/feature/nb/2020_CML/GE/GE66/01-kv-nb.png", manufacturer: "MSI", reference: "GE66", screen: "15,6'' FHD", processor: "Intel Core i7-10750H 12 Mo Cache", ram: "16 Go DDR4", graphic: "Nvidia GeForce RTX 2070 8 Go", disk: "1 To SSD", price: 4500 },
    { id: briefProductsList[2].id, imageSrc: "https://www.londondrugs.com/on/demandware.static/-/Sites-londondrugs-master/default/dwc5b4fb92/products/L0252937/large/L0252937.JPG", manufacturer: "MOUSE", reference: "Mouse 1", rgb: "Yes", dpi: 4500, price: 100 },
    { id: briefProductsList[3].id, imageSrc: "https://www.grootgadgets.com/wp-content/uploads/2018/08/zerodate-x300gy-gaming-mouse.jpg", manufacturer: "MOUSE", reference: "Mouse 2", rgb: "Yes", dpi: 6000, price: 120 },
    { id: briefProductsList[4].id, imageSrc: "https://i5.walmartimages.com/asr/a6a1dd9b-4ac1-4e83-b2d2-d08e9409a63f_1.c51120d5a76438761cfb06662c1ad9f0.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff", manufacturer: "KEYBOARD", reference: "Keyboard 1", rgb: "Yes", price: 205 },
    { id: briefProductsList[5].id, imageSrc: "https://images-na.ssl-images-amazon.com/images/I/71sb3zHHnEL._AC_SY355_.jpg", manufacturer: "KEYBOARD", reference: "Keyboard 2", rgb: "Yes", price: 260 }
]
export const detailedProductsListReducer = (state = detailedProductsList, action) => {
    switch (action.type) {
        default:
            return state
    }
}