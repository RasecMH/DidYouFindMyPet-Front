import { useNavigate } from 'react-router';
interface SingInt {
  content: string;
  path: string;
}

export default function SingButton({ content, path }: SingInt) {
  const navigate = useNavigate();
  console.log(path);

  return <a onClick={() => navigate(path)}>{content}</a>;
}
