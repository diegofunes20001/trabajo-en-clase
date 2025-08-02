
"use client";
import { useState, useEffect } from "react";

interface Person {
  id: number;
  nombre: string;
  ocupacion: string;
  pais: string;
}


interface TarjtasProps {
  person: Person;
}

function PersonCard({ person }: TarjtasProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{person.nombre}</h2>
        <p className="text-blue-600 font-medium mb-1">{person.ocupacion}</p>
        <p className="text-gray-600 text-sm">{person.pais}</p>
      </div>
    </div>
  );
}


export default function Tarjtas() {
  const [personas, setPersonas] = useState<Person[]>([]);

  useEffect(() => {
    const datosPersonas: Person[] = [
      {
        id: 1,
        nombre: "María García",
        ocupacion: "Desarrolladora Frontend",
        pais: "España"
      },
      {
        id: 2,
        nombre: "Juan Pérez",
        ocupacion: "Diseñador UX/UI",
        pais: "México"
      },
      {
        id: 3,
        nombre: "Ana Silva",
        ocupacion: "Data Scientist",
        pais: "Argentina"
      },
      {
        id: 4,
        nombre: "Carlos Rodríguez",
        ocupacion: "DevOps Engineer",
        pais: "Colombia"
      },
      {
        id: 5,
        nombre: "Laura Martínez",
        ocupacion: "Product Manager",
        pais: "Chile"
      }
    ];

    setPersonas(datosPersonas);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Tarjetas de Presentación
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((persona) => (
            <Tarjtas key={persona.id} Tarjtas={persona} />
          ))}
        </div>
      </div>
    </div>
  )
}