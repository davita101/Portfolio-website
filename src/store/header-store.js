import {create} from "zustand"

const useHeaderStore = create((set) => ({
    isContact: false,
    setIsContact: () => {
        set({isContact: true})
    },
    unsetIsContact: () => {
        set({isContact: false})

    }
}))
export {useHeaderStore};