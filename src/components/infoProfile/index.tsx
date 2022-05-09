import { ShowProfile } from "./showProfile"
import { EditProfile } from "./editProfile";

interface InfoProfileProps {
  onProfileChangeStateProfileEdit: () => void;
  onProfileStateProfileEdit: boolean;
}

export function InfoProfile({ onProfileChangeStateProfileEdit, onProfileStateProfileEdit } : InfoProfileProps) {

  return (
    <>
      {onProfileStateProfileEdit ?
        <EditProfile onProfileChangeStateProfileEdit={onProfileChangeStateProfileEdit}/>
        : <ShowProfile onProfileChangeStateProfileEdit={onProfileChangeStateProfileEdit} /> }
    </>
  )
}
