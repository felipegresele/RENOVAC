// pages/clientes.tsx

import { useEffect, useState } from "react";

interface Cliente {
  id: number;
  nome: string;
  email: string;
}

const Clientes = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    const fetchClientes = async () => {
      const res = await fetch("http://localhost:5000/clientes");
      const data = await res.json();
      setClientes(data);
    };

    fetchClientes();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Lista de Clientes</h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.nome}</td>
              <td>{cliente.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clientes;
