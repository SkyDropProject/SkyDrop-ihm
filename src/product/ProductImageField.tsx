import { useRecordContext } from "react-admin";
import axios from "axios";
import { useEffect, useState } from "react";
import { getAuthHeaders } from "../utils.tsx";

const ProductImageField = ({ apiUrl }: { apiUrl: string; label: string }) => {
  const record = useRecordContext();
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

  if (!record || !record.imageUrl) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    let objectUrl: string | undefined;
    const fetchImg = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/uploads/${record.imageUrl}`,
          { headers: getAuthHeaders(), responseType: "blob" },
        );
        objectUrl = URL.createObjectURL(response.data);
        setImageUrl(objectUrl);
      } catch {
        setImageUrl(undefined);
      }
    };
    fetchImg();
    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [apiUrl, record.imageUrl]);

  return imageUrl ? (
    <img
      src={imageUrl}
      alt="Produit"
      style={{ maxWidth: 100, maxHeight: 100 }}
    />
  ) : null;
};

export default ProductImageField;
