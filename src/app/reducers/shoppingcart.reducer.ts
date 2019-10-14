import { createReducer, on, State } from '@ngrx/store';
import { buy, increment, decrement, empty } from './shoppingcart.actions';
import { IShoppingCartModel } from '../models/IShoppingCartModel';
import { IShoppingCartItemModel } from '../models/IShoppingCartItemModel';

export const initialState: IShoppingCartModel = {
    total: 0,
    items: []
};

function buyReducer(state: IShoppingCartModel, props) {
    const book = props.book;
    if (state.items.some(item => item.book.id === book.id)) {
        return {
            total: state.total + book.price,
            items: state.items.map(item => {
                if (item.book.id === book.id) {
                    return {
                        book: item.book,
                        total: item.total + book.price,
                        amount: item.amount + 1
                    };
                } else {
                    return item;
                }
            })
        };
    } else {
        return {total: state.total + book.price, items: state.items.concat([{
            book,
            total: book.price,
            amount: 1
        }])};
    }
}

function incrementReducer(state: IShoppingCartModel, props) {
    console.log('increment', props);
    return {
        total: state.total + props.item.book.price,
        items: state.items.map(item => {
            if (item.book.id === props.item.book.id) {
                return {
                    book: item.book,
                    total: item.total + props.item.book.price,
                    amount: item.amount + 1
                };
            } else {
                return item;
            }
        })
    };
}

function decrementReducer(state: IShoppingCartModel, props) {
    if (props.item.amount === 1) {
        return {
            total: state.total - props.item.book.price,
            items: state.items.filter(item => {
                return (item.book.id !== props.item.book.id);
            })
        };
    } else {
        return {
            total: state.total - props.item.book.price,
            items: state.items.map(item => {
                if (item.book.id === props.item.book.id) {
                    return {
                        book: item.book,
                        total: item.total - props.item.book.price,
                        amount: item.amount - 1
                    };
                } else {
                    return item;
                }
            })
        };
    }
}

const shoppingCartReducerObj = createReducer(initialState,
    on(buy, buyReducer),
    on(increment, incrementReducer),
    on(decrement, decrementReducer),
    on(empty, state => ({ ...state, total: 0, items: [] }))
);

export function shoppingCartReducer(state, action) {
    return shoppingCartReducerObj(state, action);
}
