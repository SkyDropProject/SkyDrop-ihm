import { Datagrid, List, TextField, useRecordContext } from "react-admin";

interface CoordinatesFieldProps {
  label?: string;
}

// eslint-disable-next-line no-empty-pattern
const CoordinatesField = ({}: CoordinatesFieldProps) => {
  const record = useRecordContext<{
    coordinates?: { x?: number; y?: number };
  }>();
  if (!record?.coordinates) return null;
  return (
    <span>
      {record.coordinates.x}, {record.coordinates.y}
    </span>
  );
};

const DroneList = () => {
  return (
    <List>
      <Datagrid rowClick="show">
        <TextField source="name" label="Nom" />
        <TextField source="status" label="Statut" />
        <CoordinatesField label="Coordonnées" />
      </Datagrid>
    </List>
  );
};

export default DroneList;
