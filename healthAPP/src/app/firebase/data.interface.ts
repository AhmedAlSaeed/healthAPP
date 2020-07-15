export interface Product {
    id?: string,
    name: string,
    brand: string,
    packaging: string,
    category: [Category],
    daysAfterOpening: number,
    country: string,
    ingredients?: [string],
    nutritionFacts?: [
        {
            id: string
            name: string
            grams: number
        }
    ],
    weight: number,
    totalCal: number,
    barcode?: number,
    image?: string
}

export interface NutritionFact {
    id?: string,
    name: string,
    calPerGram: number,
    description: string,
    image?: string
}

export interface Ingredient {
    id?: string,
    name: string,
    description: string
}

export enum Category {
    HALAL,
    DRINK,
}