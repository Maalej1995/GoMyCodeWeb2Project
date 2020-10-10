import { v4 as uuidv4 } from 'uuid';

export const briefPcList = [
    { id: uuidv4(), imageSrc: "https://www.hoa-magazine.com/uploads/content/1560509330_media.jpg", manufacturer: "ASUS", reference: "Zenbook Pro Duo", processor: "Intel Core i9", ram: "32 Go", graphic: "Nvidia GeForce RTX 2060" },
    { id: uuidv4(), imageSrc: "https://storage-asset.msi.com/global/picture/image/feature/nb/2020_CML/GE/GE66/01-kv-nb.png", manufacturer: "MSI", reference: "GE66", processor: "Intel Core i7", ram: "16 Go", graphic: "Nvidia GeForce RTX 2070" }
]

export const briefPcListReducer = (state = briefPcList, action) => {
    switch (action.type) {
        default:
            return state
    }
}
