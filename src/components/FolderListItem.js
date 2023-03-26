import ListGroup from "react-bootstrap/ListGroup";
import { useSelector, useDispatch } from "react-redux";
import { addPath } from "@/utils/fileReducer";

export default function FolderListItem({ folder }) {
  const filePath = useSelector((state) => state.file.filePath).join("");
  const dispatch = useDispatch();

  return (
    <ListGroup.Item
      key={folder.key}
      action="true"
      onClick={() => {
        dispatch({
          type: addPath,
          payload: folder.key.replace(filePath, ""),
        });
      }}>
      <div className="fw-bold">
        {folder.key.replace(filePath, "").slice(0, -1)}
      </div>
      <div className="fw-light">Folder</div>
    </ListGroup.Item>
  );
}
