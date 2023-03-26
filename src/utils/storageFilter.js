export const s3FileFilter = (s3StorageList, currentPath) => {
  return s3StorageList.filter((item) => {
    const absKey = item.key.replace(currentPath, "");
    if (absKey == "") {
      return false;
    }
    return absKey.split("/").length === 1;
  });
};

export const s3FolderFilter = (s3StorageList, currentPath) => {
  return s3StorageList.filter((item) => {
    const absKey = item.key.replace(currentPath, "");
    if (absKey == "") {
      return false;
    }
    return absKey.split("/")[1] === "";
  });
};
