import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { api } from "../../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // ✅ Carregar usuário e token do localStorage quando o app inicia
  useEffect(() => {
    console.log("🔄 Verificando sessão no localStorage...");

    const token = localStorage.getItem("authToken");
    const storedUser = localStorage.getItem("userData");

    if (token && storedUser) {
      console.log("✅ Usuário encontrado no localStorage:", JSON.parse(storedUser));

      api.defaults.headers.Authorization = `Bearer ${token}`;
      setUser(JSON.parse(storedUser)); // Converter string para objeto
    } else {
      console.log("❌ Nenhuma sessão encontrada. Usuário não logado.");
    }
  }, []);

  // ✅ Login do usuário e salvar no localStorage
  const login = async (email, password) => {
    try {
        console.log("🔄 Iniciando login...");

        const response = await api.post("/api/users/login", { email, password });
        console.log("✅ Login bem-sucedido! Resposta da API:", response.data);

        const { token, userData } = response.data;

        // Garante que a role é salva corretamente
        const userWithRole = { ...userData, role: userData.role || "user" };

        localStorage.setItem("authToken", token);
        localStorage.setItem("userData", JSON.stringify(userWithRole));

        api.defaults.headers.Authorization = `Bearer ${token}`;
        setUser(userWithRole);

        console.log("🔀 Redirecionando para Home...");
        router.push("/Home");
    } catch (error) {
        console.error("❌ Erro no login:", error.response?.data || error.message);
        throw new Error("Credenciais inválidas.");
    }
};

  // ✅ Logout e remoção do localStorage
  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    setUser(null);
    delete api.defaults.headers.Authorization;
    router.push("/Login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
