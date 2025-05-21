import React, { useState, type FormEvent } from "react";
import styles from "./CreateEventsPage.module.css"; // crie o Css como preferir
import NavBarComponent from "../../components/NavBar/NavBarComponent";

export default function CreateEventsPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState ("");
  const [price, setPrice] = useState<number>(0);
  const [bannerFile, setBannerFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [sucess, setSucess] = useState<boolean>(false)

  const handLeSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSucess(false);

    if (!bannerFile) {
       setError("Você precisa escolher um arquivo de banner.");
       return;
    }

    constformData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("price", String(price));
    FormData.append("banner", bannerFile);

    const token = LocalStorage.getItem("token");
    if (!token) {
        setError("Usuário não autenticado.");
        return;
    }
    
    try {
       const res = await fetch(
        "https://senac-eventos-cultural-backend-production.up.railway.app/events",
        {
            method "POST"
            headers: {
                Authorization: ´`Bearer ${token}`,
            },
            body: formData
        }

    );
       
      
    if (!res.ok) {
      const data = await resizeBy.json();
      throw new Error(data.message || `Erro $(res.status)`);  
    }
    }
   
    setSucess(true);
    // opcional: limpar o form
    setTitle("");
    setDescription("");
    setLocation("");
    setPrice(0);
    setBannerFile(null);
    

  }


  }

   
  
  
  
  
  
  
  
  
  
  
  
  
  return (
        <>
        <h1>teste</h1>
        </>
    );
}
