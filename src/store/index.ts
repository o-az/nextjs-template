import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface BearState {
  bears: number
}

interface BearActions {
  increaseBears: (by?: number) => void
  decreaseBears: (by?: number) => void
  annahilateBears: () => void
}

const initialBearState: BearState = { bears: 2 }

export const useBearStore = create<BearState & BearActions>()(
  // uses localStorage
  persist(
    (set, get) => ({
      ...initialBearState,
      getBears: () => get().bears,
      increaseBears: by => set(state => ({ bears: state.bears + (by ? Number(by) : 1) })),
      decreaseBears: by => set(state => ({ bears: state.bears === 0 ? 0 : state.bears - (by ? Number(by) : 1) })),
      annahilateBears: () => set({ bears: 0 }),
    }),
    {
      name: 'bears',
      getStorage: () => localStorage,
    }
  )
)
