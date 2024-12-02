import { useState } from "react";

const useImagePreview = () => {
  const [image, setImage] = useState("");

  const handleImagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      setImage(result);
    };
  };

  return {
    image,
    setImage,
    handleImagePreview,
  };
};

export default useImagePreview;
