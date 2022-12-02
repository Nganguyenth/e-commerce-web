import create from 'zustand'

type ICartProduct = { img: string; price: number; quantity: number }
type ICart = Map<string | number, ICartProduct>
interface CartStore {
  cart?: ICart
  onAddToCart: (id: string | number, product: ICartProduct) => void
  onRemoveCart?: (id: string | number) => void
}

export const useCartStore = create<CartStore>((set, get) => {
  return {
    onAddToCart(id, product) {
      const cart = getCartMap(get()['cart'])
      const currentProduct = cart.get(id) as ICartProduct
      if (currentProduct) {
        cart.set(id, { ...currentProduct, quantity: (currentProduct.quantity += product.quantity) })
      } else {
        cart.set(id, product)
      }
      set({ cart: new Map(cart) })
    }
  }
})

const getCartMap = (currentCart?: ICart) => {
  if (!currentCart) return new Map()
  return currentCart
}
