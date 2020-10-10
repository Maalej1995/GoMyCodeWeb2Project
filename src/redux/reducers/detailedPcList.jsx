import { briefPcList } from './briefPcList'

const detailedPcList = [
    { id: briefPcList[0].id, imageSrc: "https://www.hoa-magazine.com/uploads/content/1560509330_media.jpg", manufacturer: "ASUS", reference: "Zenbook Pro Duo", screen: "15,6'' 4K UHD Tactile", processor: "Intel Core i9-10980HK 16 Mo Cache", ram: "32 Go DDR4", graphic: "Nvidia GeForce RTX 2060 6 Go", disk: "1 To SSD" },
    { id: briefPcList[1].id, imageSrc: "https://storage-asset.msi.com/global/picture/image/feature/nb/2020_CML/GE/GE66/01-kv-nb.png", manufacturer: "MSI", reference: "GE66", screen: "15,6'' FHD", processor: "Intel Core i7-10750H 12 Mo Cache", ram: "16 Go DDR4", graphic: "Nvidia GeForce RTX 2070 8 Go", disk: "1 To SSD" }
]

export const detailedPcListReducer = (state = detailedPcList, action) => {
    switch (action.type) {
        default:
            return state
    }
}