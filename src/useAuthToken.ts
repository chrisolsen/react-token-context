import { useEffect, useState } from "react";

function useAuthToken(): string | undefined {
  const [authToken, setAuthToken] = useState<string>();

  const generateToken = () => btoa(`${Math.random()}`);

  useEffect(() => {
    const id = window.setInterval(() => {
      const newToken = generateToken();
      setAuthToken(newToken)
    }, 5000);

    return () => clearInterval(id)
  }, [])


  return authToken || generateToken();
}

export default useAuthToken;
