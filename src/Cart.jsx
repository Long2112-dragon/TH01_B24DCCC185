import { useState } from "react";

function Cart() {
  const products = [
    { name: "Sách", price: 10000 },
    { name: "Bút", price: 5000 },
    { name: "Vở", price: 7000 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const deleteFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Bài 3: Giỏ hàng</h2>
      <h3>Sản phẩm</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price.toLocaleString()}₫{" "}
            <button onClick={() => addToCart(product)}>Thêm vào giỏ</button>
          </li>
        ))}
      </ul>

      <h3>Giỏ hàng</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price.toLocaleString()}₫{" "}
            <button onClick={() => deleteFromCart(index)}>Xóa</button>
          </li>
        ))}
      </ul>

      <p>
        <strong>Tổng tiền: {totalPrice.toLocaleString()}₫</strong>
      </p>
    </div>
  );
}

export default Cart;
