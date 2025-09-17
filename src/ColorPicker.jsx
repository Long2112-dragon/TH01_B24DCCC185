import { useState } from "react";
import ColorBox from "./ColorBox.jsx"; // ✅ import từ file riêng

function ColorPicker() {
  const [color, setColor] = useState("white");

  return (
    <div>
      <h2>Bài 2: Color Picker</h2>
      <button onClick={() => setColor("red")}>Đỏ</button>
      <button onClick={() => setColor("green")}>Xanh</button>
      <button onClick={() => setColor("yellow")}>Vàng</button>
      <ColorBox color={color} /> {/* dùng component từ file riêng */}
    </div>
  );
}

export default ColorPicker;
