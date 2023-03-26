import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Storage } from "aws-amplify";
import ListGroup from "react-bootstrap/ListGroup";

import { s3FileFilter, s3FolderFilter } from "../utils/storageFilter";

import FolderListItem from "./FolderListItem";

export default function DocumentList() {
  const [folders, setFolders] = useState([]);
  const [documents, setDocuments] = useState([]);
  const filePath = useSelector((state) => state.file.filePath).join("");

  useEffect(() => {
    Storage.list(filePath, { level: "private", pageSize: "ALL" })
      .then(({ results }) => {
        setFolders(s3FolderFilter(results, filePath));
        setDocuments(s3FileFilter(results, filePath));
        console.log(filePath);
        console.log(results);
      })
      .catch((err) => console.log(err));
  }, [filePath]);

  return (
    <>
      <ListGroup variant="flush user-select-none">
        {folders.map((folder) => {
          return <FolderListItem folder={folder} />;
        })}
        {documents.map((document) => {
          return (
            <ListGroup.Item key={document.key} action="true">
              {document.key.replace(filePath, "")}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
}

const containsWordOnce = (str, searchKey) => {
  return str.split("").filter((word) => word === searchKey).length === 1;
};
