import { useState } from "react";

const useImagePreview = (multiple: boolean = false) => {
  const [images, setImages] = useState<string[]>([]);

  const handleImagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files) return;

    if (!multiple) {
      const file = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        setImages([result]);
      };
    } else {
      for (const file of files) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const result = reader.result as string;
          setImages((prev) => [...prev, result]);
        };
      }
    }
  };

  return {
    images,
    setImages,
    handleImagePreview,
  };
};

export default useImagePreview;
