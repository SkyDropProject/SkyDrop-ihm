import { useRecordContext } from "react-admin";
import axios from "axios";
import { useEffect, useState } from "react";
import { getAuthHeaders } from "../utils.tsx";

const ProductEditImageField = ({ apiUrl }: { apiUrl: string }) => {
  const record = useRecordContext();
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    let objectUrl: string | undefined;
    if (record && record.imageUrl) {
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
    }
    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [apiUrl, record, record?.imageUrl]);

  if (!imageUrl) return null;
  return (
    <img
      src={imageUrl}
      alt="Produit"
      style={{ maxWidth: 100, maxHeight: 100, marginBottom: 8 }}
    />
  );
};

export default ProductEditImageField;
