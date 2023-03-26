import { useNavigate } from 'react-router';

interface Props {
  content: string;
  path: string;
}

export default function SingButton({ content, path }: Props) {
  const navigate = useNavigate();
  console.log(path);

  return <a onClick={() => navigate(path)}>{content}</a>;
}
