import { delay } from '@/utils';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import Button from '@/components/Button';
import TextField from '@/components/TextField';

export default function App() {
  const [searchParams] = useSearchParams();
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const redirectTo = searchParams.get('redirectTo');

  async function signIn() {
    if (isLoading) return;
    setIsLoading(true);
    await delay(3000);
    if (id && pwd) {
      console.log(id, pwd);
      // 서버와 통신하는 코드
      const token = 'abcd1234';
      localStorage.setItem('token', token);
      navigate(redirectTo || '/');
    }
    setIsLoading(false);
  }

  return (
    <>
      <form
        className="flex max-w-[400px] flex-col gap-2.5"
        onSubmit={e => {
          e.preventDefault();
        }}>
        <TextField
          label="아이디"
          type="text"
          value={id}
          onChange={e => setId(e.target.value)}
        />
        <TextField
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={pwd}
          onChange={e => setPwd(e.target.value)}
        />
        <Button
          variant="primary"
          loading={isLoading}
          onClick={() => signIn()}>
          로그인
        </Button>
      </form>
    </>
  );
}
