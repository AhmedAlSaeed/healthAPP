import { Product, Category, Ingredient, NutritionFact } from './data.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private fb: AngularFirestore) { }

  // ? Product

  async createProduct(data: Product) {
    return await this.fb.collection('Product').add(data);
  }

  async deleteProduct(id: string) {
    return await this.fb.collection<Product[]>('Product').doc<Product>(id).delete();
  }

  async updateProduct(data: Product) {
    const { id, ...product } = data;
    return await this.fb.collection<Product[]>('Product').doc<Product>(id).update(product);
  }

  async getProduct(id: string) {
    return await this.fb.firestore.collection('Product').doc(id).get().then(data => {
      return data.data()
    })
  }

  getAllProducts() {
    return this.fb.collection<Product[]>('Product').snapshotChanges();
  }

  // ? Ingredient

  async createIngredient(data: Ingredient) {
    return await this.fb.collection('Ingredient').add(data);
  }
  async deleteIngredient(id: string) {
    return await this.fb.collection<Ingredient[]>('Ingredient').doc<Ingredient>(id).delete();
  }
  async updateIngredient(data: Ingredient) {
    const { id, ...ingredient } = data;
    return await this.fb.collection<Ingredient[]>('Ingredient').doc<Ingredient>(id).update(ingredient);
  }
  getAllIngredient() {
    return this.fb.collection<Ingredient[]>('Ingredient').snapshotChanges();
  }


  // ? NutritionFact

  async createNutritionFact(data: NutritionFact) {
    return await this.fb.collection('NutritionFact').add(data);
  }
  async deleteNutritionFact(id: string) {
    return await this.fb.collection<NutritionFact[]>('NutritionFact').doc<NutritionFact>(id).delete();
  }
  async updateNutritionFact(data: NutritionFact) {
    const { id, ...NutritionFact } = data;
    return await this.fb.collection<NutritionFact[]>('NutritionFact').doc<NutritionFact>(id).update(NutritionFact);
  }

  getAllNutritionFact() {
    return this.fb.collection<NutritionFact[]>('NutritionFact').snapshotChanges();
  }

}
