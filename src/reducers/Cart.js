import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
  SUB_SHIPPING,
} from "../actions/actions-types/Cart";
import Item1 from "../images/item1.jpg";
import Item2 from "../images/item2.jpg";
import Item3 from "../images/item3.jpg";
import Item4 from "../images/item4.jpg";
import Item5 from "../images/item5.jpg";
import Item6 from "../images/item6.jpg";

const initialState = {
  items: [
    {
      id: 1,
      title: "Winter body",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: Item1,
    },
    {
      id: 2,
      title: "Adidas",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      img: Item2,
    },
    {
      id: 3,
      title: "Vans",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      img: Item3,
    },
    {
      id: 4,
      title: "White",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      img: Item4,
    },
    {
      id: 5,
      title: "Cropped-sho",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      img: Item5,
    },
    {
      id: 6,
      title: "Blues",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item6,
    },
  ],
  addedItems: [],
  total: 0,
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      let addedItem = state.items.find((item) => item.id === payload);
      let existed_item = state.addedItems.find((item) => payload === item.id);
      if (existed_item) {
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.price,
        };
      } else {
        addedItem.quantity = 1;
        let newTotal = state.total + addedItem.price;
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal,
        };
      }
    case REMOVE_ITEM:
      let removedItem = state.addedItems.find((item) => payload === item.id);
      return {
        ...state,
        addedItems: state.addedItems.filter((item) => item.id !== payload),
        total: state.total - (removedItem.price * removedItem.quantity),
      };
    case SUB_QUANTITY:
      let subtractedQuantityItem = state.addedItems.find((item) => payload === item.id);
      if (subtractedQuantityItem.quantity === 1) {
        return {
          ...state,
          addedItems: state.addedItems.filter((item) => item.id !== payload),
          total: state.total - subtractedQuantityItem.price
        }
      } else {
        subtractedQuantityItem.quantity--;
        return {
          ...state,
          total: state.total - subtractedQuantityItem.price
        }
      }
    case ADD_QUANTITY:
      let addedQuantityItem = state.addedItems.find((item) => payload === item.id);
      addedQuantityItem.quantity++;
      return {
        ...state,
        total: state.total + addedQuantityItem.price
      }
    case ADD_SHIPPING:
      return {
        ...state,
        total: state.total + payload
      }
    case SUB_SHIPPING:
      return {
        ...state,
        total: state.total - payload
      }
    default:
      return state;
  }
};

export default cartReducer;
