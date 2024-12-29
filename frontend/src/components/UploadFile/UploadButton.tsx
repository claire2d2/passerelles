import UploadWidget from "./UploadWidget"
import { useState } from "react";

const UploadButton = () => {
    const [url, updateUrl] = useState();
    const [error, updateError] = useState();

    function handleOnUpload(error: any, result: any, widget: any) {

        
        if ( error ) {
          updateError(error);
          widget.close({
            quiet: true
          });
          return;
        }
        updateUrl(result?.info?.secure_url);
      }
  return (
    <UploadWidget onUpload={handleOnUpload}>
          {({ open }) => {
            return (
              <button onClick={() => open()}>
                Upload an Image
              </button>
            )
          }}
        </UploadWidget>
  )
}

export default UploadButton
