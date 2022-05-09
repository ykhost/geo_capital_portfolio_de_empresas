import { PencilSimple } from "phosphor-react";
import { Container } from "./styles";


interface ShowProfileProps {
  onProfileChangeStateProfileEdit: () => void;
}

export function ShowProfile({ onProfileChangeStateProfileEdit }: ShowProfileProps) {

  return (
    <Container>
      <div>
        <span>Nome:</span>
        <span>Andre Heringer</span>
      </div>
      <div>
        <span>Email:</span>
        <span>andrew.heringer@gmail.com</span>
      </div>
      <div>
        <span>Celular: </span>
        <span>(11) 993800-4739</span>
      </div>
      <button onClick={onProfileChangeStateProfileEdit}><PencilSimple /> Edit Profile</button>
    </Container>
  )
}
