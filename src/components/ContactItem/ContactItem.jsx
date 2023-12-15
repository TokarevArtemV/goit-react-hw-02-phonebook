export const ContactItem = ({
  contact: { id, name, number },
  onClickDelBtn,
}) => (
  <li key={id}>
    {`${name}: ${number}`}
    <button type="button" onClick={() => onClickDelBtn(id)}>
      Delete contact
    </button>
  </li>
);
