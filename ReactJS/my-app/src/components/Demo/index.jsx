import { useState } from "react";
import Button from "../Button";

const Demo = () => {
  // Khi useState thay đổi ==> component re-render lại

  //?   UseState
  // 1. init value = 'Huy Vo'
  const [name, setName] = useState("Huy Vo");

  const handleChangeName = () => {
    // 4. Set giá trị cho name
    setName("Vo Duc Huy");
  };

  return (
    <>
      {/* 2. render name, 6. render name */}
      <h2>Name: {name}</h2>

      {/* //? Props */}
      {/* Từ Parent gọi Child và gửi qua Child */}
      <Button functionClick={handleChangeName}>Click to Change name</Button>
      {/* //! Click to Change name is Children */}
    </>
  );
};

export default Demo;
