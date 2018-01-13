import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Product from "./Product";
import AddProduct from "./AddProduct";

class Main extends Component {

    constructor() {
        super();
        this.state = {
            products: [],
            currentProduct: null
        }
        this.handleAddProduct = this.handleAddProduct.bind(this);
    }

    componentDidMount() {
        fetch('/api/products')
            .then(response => {
                return response.json();
            })
            .then(products => {
                this.setState({products});
            });
    }

    renderProducts() {
        return this.state.products.map(product => {
            return (
              <li key={product.id} onClick={() => this.handleClick(product)}>
                  {product.title}
              </li>
            );
        });
    }

    handleClick(product) {
        this.setState({currentProduct: product})
    }

    handleAddProduct(product) {
        product.price = Number(product.price);
        product.availability = Number(product.availability) > 0
        fetch('api/products/', {
            method: 'post',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState((prevState) => ({
                    products: prevState.products.concat(data),
                    currentProduct: data
                }))
            })
    }

    render() {
        return (
            <div>
                <div>
                    <h3>All products</h3>
                    <ul>
                        {this.renderProducts()}
                    </ul>
                </div>
                <Product product={this.state.currentProduct}/>
                <AddProduct onAdd={this.handleAddProduct}/>
            </div>
        );
    }
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}