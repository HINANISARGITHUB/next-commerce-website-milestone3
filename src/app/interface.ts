// 1st interface for newest

export interface simplifiedProduct {
    _id: string;
    imageUrl: string;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
}

// 2nd interface product/[slug]//

export interface fullProduct {

    _id: string;
    images: string;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
    description : string;
    price_id: string;

}