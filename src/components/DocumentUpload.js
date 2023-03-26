import { Storage } from "aws-amplify";
import { FileUploader } from "@aws-amplify/ui-react";

export default function DocumentUpload() {
  async function onChange(e) {
    const file = e.target.files[0];
    try {
      await Storage.put(file.name, file, {
        contentType: "image/png", // contentType is optional
      });
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  return (
    <FileUploader
      isPreviewerVisible={true}
      variation="drop"
      acceptedFileTypes={["image/*"]}
      accessLevel="private"
    />
  );
}
