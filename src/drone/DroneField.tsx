import { useRecordContext, Link } from "react-admin";
import DroneType from "../types/Drone.ts";

const DroneField = ({ drones }: { drones: DroneType[]; label: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  const cat = drones.find((c) => c._id === record.droneId._id);
  if (!cat) return null;
  return <Link to={`/Drone/${cat._id}`}>{cat.name}</Link>;
};

export default DroneField;
