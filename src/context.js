import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct
    };
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let temProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            temProducts = [...temProducts, singleItem];

        })
        this.setState(() => {
            return { products: temProducts }
        })
    }
    handleDetail = () => {
        console.log('hello form detail');
    }
    addToCart = (id) => {
        console.log(`hello from add to cart.id is ${id}`);
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };