import { createContext, useState } from "react";

export const FavouritesContext = createContext({ 
    ids: [],
    addFavourite: (id) => {},
    removeFavourite: (id) => {},

});

const FavouritesContextProvider = ({children}) => {
    const [favouriteMealsIds, setFavouriteMealIds] = useState([])

    const addFavourite = (id) => {
        setFavouriteMealIds((currentFavId) => [...currentFavId, id])
    }

    const removeFavourite = (id) => {
        setFavouriteMealIds((currentFavId) => currentFavId.filter((mealId) => mealId !== id))
    }

    const value = {
        ids: favouriteMealsIds,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite,
    }
    return (<FavouritesContext.Provider value={value}>
           {children}
    </FavouritesContext.Provider>)
}
export default FavouritesContextProvider ;