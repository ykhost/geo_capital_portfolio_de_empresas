import { Container } from "./styles";

interface EditProfileProps {
  onProfileChangeStateProfileEdit: () => void;
}

export function EditProfile ({ onProfileChangeStateProfileEdit } : EditProfileProps) {

  return (
    <Container>
      <div className="input">
        <span>Name:</span>
        <input></input>
      </div>
      <div className="input">
        <span>Email:</span>
        <input></input>
      </div>
      <div className="input">
        <span>Celular:</span>
        <input></input>
      </div>
      <div className="buttons">
        <button onClick={onProfileChangeStateProfileEdit}>Salvar</button>
        <button onClick={onProfileChangeStateProfileEdit}>Cancelar</button>
      </div>
    </Container>
  )
}
