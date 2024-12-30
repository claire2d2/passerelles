import UploadWidget from "./UploadWidget";
import { useEffect, useState } from "react";

interface UploadButtonProps {
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

const UploadButton: React.FC<UploadButtonProps> = ({ setImageUrl }) => {
  const [error, updateError] = useState<string | null>(null);
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    setImageUrl(url);
  }, [url, setImageUrl]);

  function handleOnUpload(error: any, result: any, widget: any) {
    if (error) {
      updateError(error.message || "An error occurred during upload.");
      widget.close({
        quiet: true,
      });
      return;
    }
    setUrl(result?.info?.secure_url || "");
  }

  return (
    <UploadWidget onUpload={handleOnUpload}>
      {({ open }) => (
        <div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button onClick={() => open()} type="button">
            Upload an Image
          </button>
        </div>
      )}
    </UploadWidget>
  );
};

export default UploadButton;
